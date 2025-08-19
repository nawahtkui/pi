import React from 'react'

export default function Partnership() {
  return (
    <section id="pi" className="py-16 bg-white">
      <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-3 gap-6">
        <div className="rounded-3xl border p-6">
          <h3 className="font-semibold text-lg">Web3 & NFTs</h3>
          <p className="text-gray-600 mt-2">
            دعم رموز ثقافية وفنية عبر NFTs لتمكين المبدعات والمبدعين.
          </p>
        </div>
        <div className="rounded-3xl border p-6">
          <h3 className="font-semibold text-lg">Integration with Pi</h3>
          <p className="text-gray-600 mt-2">
            شراكات وتكامل مع Pi Network لتوسيع الوصول والدفع الرقمي.
          </p>
        </div>
        <div className="rounded-3xl border p-6" id="join">
          <h3 className="font-semibold text-lg">انضم للمجتمع</h3>
          <p className="text-gray-600 mt-2">
            تابع التطوير، شارك الأفكار، وكن جزءًا من رحلة نواة حتى 2029.
          </p>
        </div>
      </div>
    </section>
  )
}