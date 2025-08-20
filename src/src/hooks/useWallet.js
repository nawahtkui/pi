import { useState } from "react";
import { ethers } from "ethers";

export default function useWallet() {
  const [account, setAccount] = useState(null);
  const [provider, setProvider] = useState(null);

  const connect = async () => {
    if (window.ethereum) {
      const prov = new ethers.BrowserProvider(window.ethereum);
      await prov.send("eth_requestAccounts", []);
      const signer = await prov.getSigner();
      setProvider(signer);
      const address = await signer.getAddress();
      setAccount(address);
    } else {
      alert("MetaMask is not installed");
    }
  };

  return { account, provider, connect };
}
