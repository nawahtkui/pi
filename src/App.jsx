import React from "react";
import useWallet from "./hooks/useWallet";
import MintBNB from "./components/MintBNB";
import MintNWTK from "./components/MintNWTK";
import PiPaymentRequest from "./components/PiPaymentRequest";

function App() {
  const { account, connect, provider } = useWallet();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Nawah Anime NFT Mint</h1>
      {!account ? <button onClick={connect}>Connect Wallet</button> : <p>Connected: {account}</p>}
      {account && provider && (
        <div className="space-y-6 mt-4">
          <MintBNB signer={provider} />
          <MintNWTK signer={provider} />
          <PiPaymentRequest />
        </div>
      )}
    </div>
  );
}

export default App;
