import React, { useState } from "react";
import { getNFTContract } from "../utils/contract";
import { ethers } from "ethers";
import NWTKAbi from "../utils/NWTK.json";

const NWTK_ADDRESS = process.env.REACT_APP_NWTK_ADDRESS;

export default function MintNWTK({ signer }) {
  const [mintAmount, setMintAmount] = useState(1);
  const [status, setStatus] = useState("");

  const handleMintNWTK = async () => {
    if (!signer) return;
    try {
      const nftContract = getNFTContract(signer);
      const nwtkContract = new ethers.Contract(NWTK_ADDRESS, NWTKAbi, signer);
      const price = await nftContract.priceNWTK();
      const totalPrice = price * mintAmount;

      const approveTx = await nwtkContract.approve(nftContract.address, totalPrice);
      setStatus("Approval sent...");
      await approveTx.wait();

      const mintTx = await nftContract.mintWithNWTK(mintAmount);
      setStatus("Mint transaction sent...");
      await mintTx.wait();

      setStatus("Mint with NWTK successful!");
    } catch (err) {
      setStatus("Error: " + err.message);
    }
  };

  return (
    <div>
      <h3>Mint with NWTK</h3>
      <input type="number" min="1" value={mintAmount} onChange={(e) => setMintAmount(Number(e.target.value))}/>
      <button onClick={handleMintNWTK}>Mint</button>
      <p>{status}</p>
    </div>
  );
}
