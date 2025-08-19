import React from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Partnership from './components/Partnership.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Partnership />
      </main>
      <Footer />
    </div>
  )
}