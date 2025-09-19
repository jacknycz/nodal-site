import { useState, useEffect } from 'react'
import { Brain, Users, FileText, Target, Cloud, Share } from '@phosphor-icons/react'
import Hero from './components/Hero'
import ConversationalNodes from './components/ConversationalNodes'
import MeetTheNodes from './components/MeetTheNodes'
import WelcomeToTheBoard from './components/WelcomeToTheBoard'
import AISection from './components/AISection'
import AIIntegrationSection from './components/AIIntegrationSection'
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
      <button
        onClick={() => setIsDark(prev => !prev)}
        className="fixed top-4 right-4 z-50 px-3 py-2 text-sm bg-zinc-200 dark:bg-zinc-800 text-zinc-900 dark:text-white rounded border border-zinc-300 dark:border-zinc-600 hover:bg-zinc-300 dark:hover:bg-zinc-700 transition-colors"
      >
        {isDark ? '☀️ Light' : '🌙 Dark'}
      </button>

      {/* <TypewriterHero isDark={isDark} /> */}

      {/* Hero */}
      <Hero isDark={isDark} />

      {/* Conversational Nodes */}
      <MeetTheNodes isDark={isDark} />

      {/* New Landing Page Sections */}
      <WelcomeToTheBoard isDark={isDark} />

      <AISection />

      <AIIntegrationSection isDark={isDark} />

      <TemplatesSection isDark={isDark} />

      {/* Final CTA with Confetti */}
      <FinalCTASection isDark={isDark} />

      <ConversationalNodes isDark={isDark} />
    </>
  )
}

export default App
