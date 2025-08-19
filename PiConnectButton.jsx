import React, { useState } from 'react'

export default function PiConnectButton() {
  const [connected, setConnected] = useState(false)
  const [address, setAddress] = useState('')

  const handleConnect = async () => {
    // Placeholder: هنا سيتم دمج Pi SDK لاحقًا
    setConnected(true)
    setAddress('pi_testnet_0x1234...abcd')
  }

  return (
    <button
      onClick={handleConnect}
      className="px-5 py-3 rounded-2xl bg-yellow-400 hover:bg-yellow-300 font-semibold"
    >
      {connected ? `متصل: ${address}` : 'اتصال بمحفظة Pi (تجريبي)'}
    </button>
  )
}