import React from 'react'
import PiConnectButton from './PiConnectButton.jsx'

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-yellow-50 to-white">
      <div className="mx-auto max-w-6xl px-4 py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
            Nawah Token (NWTK)
          </h1>
          <p className="mt-4 text-gray-600" id="vision">
            مشروع رقمي يمزج بين الرمز الحضاري والتمكين الاقتصادي للمرأة والشباب،
            مع تكامل Web3 وNFTs وخارطة طريق حتى 2029.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="https://nawah.org" className="px-5 py-3 rounded-2xl border hover:bg-gray-100">
              الموقع الرسمي
            </a>
            <a href="https://github.com/nawahtkui" className="px-5 py-3 rounded-2xl border hover:bg-gray-100">
              GitHub
            </a>
          </div>
        </div>
        <div className="bg-white rounded-3xl border p-6 shadow-sm">
          <h2 className="font-semibold text-lg">التكامل مع Pi</h2>
          <p className="text-gray-600 mt-2">
            زر تجريبي للاتصال بالمحفظة سيتم ربطه لاحقًا عبر Pi SDK.
          </p>
          <div className="mt-4">
            <PiConnectButton />
          </div>
          <p className="text-xs text-gray-500 mt-3">
            ملاحظة: هذا زر Placeholder — عند توفر مفاتيح/SDK سيتم تفعيله.
          </p>
        </div>
      </div>
    </section>
  )
}