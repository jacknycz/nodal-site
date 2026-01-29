import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Deck from './pages/Deck'
import Terms from './pages/Terms'
import Privacy from './pages/Privacy'
import './App.css'
import Footer from './components/Footer.tsx'



function App() {
  const [isDark] = useState(true)

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark)
  }, [isDark])

  return (
    <>
      {/* Global Dev Toggle - temporary */}
      {/* <button
        onClick={() => setIsDark(prev => !prev)}
        className="fixed top-4 right-4 z-50 px-3 py-2 text-sm bg-zinc-200 dark:bg-zinc-800 text-zinc-900 dark:text-white rounded border border-zinc-300 dark:border-zinc-600 hover:bg-zinc-300 dark:hover:bg-zinc-700 transition-colors"
      >
        {isDark ? '☀️ Light' : '🌙 Dark'}
      </button> */}

      <a
        href="https://app.nodalapp.com/"
        className="bg-primary-600 hover:bg-primary-500 fixed top-4 right-4 lg:right-16 z-50
        text-white text-center font-normal md:font-medium font-heading text-sm md:text-base
        px-4 md:px-6 py-2 md:py-3 rounded-full transition-colors duration-200"
      >
        login / sign up (it's free)
      </a>

      {/* Site-wide fixed background dots (behind everything) */}
      <div
        className="fixed inset-0 -z-50 pointer-events-none bg-white dark:bg-gray-950 opacity-40"
        style={{
          backgroundImage: `radial-gradient(circle, ${isDark ? '#333333' : '#c9c9c9'} 1px, transparent 1px)`,
          backgroundSize: '20px 20px',
          backgroundPosition: '0 0'
        }}
      />
      {/* Site-wide gradient wash above dots, still behind content */}
      <div className="site-wash" />

      <Routes>
        <Route path="/" element={<Home isDark={isDark} />} />
        <Route path="/deck" element={<Deck isDark={isDark} />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
