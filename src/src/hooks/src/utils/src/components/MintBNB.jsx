import React, { useState } from "react";
import { getNFTContract } from "../utils/contract";

export default function MintBNB({ signer }) {
  const [mintAmount, setMintAmount] = useState(1);
  const [status, setStatus] = useState("");

  const handleMint = async () => {
    if (!signer) return;
    try {
      const contract = getNFTContract(signer);
      const price = await contract.priceWei();
      const tx = await contract.mint(mintAmount, { value: price * mintAmount });
      setStatus("Transaction sent, waiting confirmation...");
      await tx.wait();
      setStatus("Mint successful!");
    } catch (err) {
      setStatus("Error: " + err.message);
    }
  };

  return (
    <div>
      <h3>Mint with BNB</h3>
      <input type="number" min="1" value={mintAmount} onChange={(e) => setMintAmount(Number(e.target.value))}/>
      <button onClick={handleMint}>Mint</button>
      <p>{status}</p>
    </div>
  );
}
