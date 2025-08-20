import React, { useState } from "react";

export default function PiPaymentRequest() {
  const [amount, setAmount] = useState("");
  const [status, setStatus] = useState("");

  const handleRequest = async () => {
    try {
      const res = await fetch("https://your-escrow-backend/api/pi-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount })
      });
      const data = await res.json();
      setStatus(`Request sent: ${JSON.stringify(data)}`);
    } catch (err) {
      setStatus("Error: " + err.message);
    }
  };

  return (
    <div>
      <h3>Request Pi Payment</h3>
      <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
      <button onClick={handleRequest}>Send Request</button>
      <p>{status}</p>
    </div>
  );
}
