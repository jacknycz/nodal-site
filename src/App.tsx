import { useState, useEffect } from 'react'
import Hero from './components/Hero'
// import ConversationalNodes from './components/ConversationalNodes'
import MeetTheNodes from './components/MeetTheNodes'
import WelcomeToTheBoard from './components/WelcomeToTheBoard'
import AISection from './components/AISection'
// import AIIntegrationSection from './components/AIIntegrationSection'
import TemplatesSection from './components/TemplatesSection'
import FinalCTASection from './components/FinalCTASection'
import './App.css'



function App() {
  const [isDark, setIsDark] = useState(true)

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
        className="bg-primary-600 hover:bg-primary-500 fixed top-4 right-4 z-50
        text-white text-center font-medium font-heading 
        px-6 py-3 rounded-full transition-colors duration-200"
      >
        login / sign up (it's free)
      </a>

      {/* Site-wide fixed background dots (behind everything) */}
      <div
        className="fixed inset-0 -z-50 pointer-events-none bg-white dark:bg-gray-950"
        style={{
          backgroundImage: `radial-gradient(circle, ${isDark ? '#333333' : '#c9c9c9'} 1px, transparent 1px)`,
          backgroundSize: '20px 20px',
          backgroundPosition: '0 0'
        }}
      />
      {/* Radial overlay above dots, still behind content */}
      <div
        className="fixed inset-0 -z-40 pointer-events-none"
        style={{
          background: isDark
            ? 'radial-gradient(60% 60% at 50% 50%, rgba(9,9,11,.6) 0%, rgba(9,9,11,0.55) 65%, rgba(9,9,11,0.2) 85%)'
            : 'radial-gradient(60% 60% at 50% 50%, rgba(255,255,255,1) 0%, rgba(255,255,255,0.55) 65%, rgba(255,255,255,0.3) 85%)'
        }}
      />

      {/* <TypewriterHero isDark={isDark} /> */}

      {/* Hero */}
      <Hero isDark={isDark} />

      {/* Conversational Nodes */}
      <MeetTheNodes isDark={isDark} />

      {/* New Landing Page Sections */}
      <WelcomeToTheBoard isDark={isDark} />

      <AISection />

      {/* <AIIntegrationSection isDark={isDark} /> */}

      <TemplatesSection isDark={isDark} />

      {/* Final CTA with Confetti */}
      <FinalCTASection isDark={isDark} />

      {/* <ConversationalNodes isDark={isDark} /> */}
    </>
  )
}

export default App
