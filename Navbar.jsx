import React from 'react'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <a href="#" className="font-extrabold text-xl">نواة — NWTK</a>
        <nav className="flex items-center gap-4 text-sm">
          <a href="#vision" className="hover:underline">الرؤية</a>
          <a href="#pi" className="hover:underline">التكامل مع Pi</a>
          <a href="#join" className="hover:underline">انضم</a>
        </nav>
      </div>
    </header>
  )
}