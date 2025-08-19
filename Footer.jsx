import React from 'react'

export default function Footer() {
  return (
    <footer className="border-t py-8">
      <div className="mx-auto max-w-6xl px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-600">© {new Date().getFullYear()} Nawah Token — NWTK</p>
        <div className="flex gap-4 text-sm">
          <a href="https://github.com/nawahtkui/nawahpi" className="hover:underline">المستودع</a>
          <a href="https://github.com/nawahtkui" className="hover:underline">جميع المستودعات</a>
          <a href="#" className="hover:underline">الورقة البيضاء</a>
        </div>
      </div>
    </footer>
  )
}