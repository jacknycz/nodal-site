import { useState, useEffect } from 'react'
import { Brain, Users, FileText, Target, Cloud, Share2 } from 'lucide-react'
import ConversationalHero from './components/ConversationalHero'
import WhatsANodeSection from './components/WhatsANodeSection'
import ConnectThoughtsSection from './components/ConnectThoughtsSection'
import AIIntegrationSection from './components/AIIntegrationSection'
import CollaborationSection from './components/CollaborationSection'
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
        className="fixed top-4 left-4 z-50 px-3 py-2 text-sm bg-zinc-200 dark:bg-zinc-800 text-zinc-900 dark:text-white rounded border border-zinc-300 dark:border-zinc-600 hover:bg-zinc-300 dark:hover:bg-zinc-700 transition-colors"
      >
        {isDark ? '☀️ Light' : '🌙 Dark'}
      </button>
      
      {/* <TypewriterHero isDark={isDark} /> */}

      {/* A SECOND TEST HERO */}
      <ConversationalHero isDark={isDark} />

      {/* New Landing Page Sections */}
      <WhatsANodeSection isDark={isDark} />
      <ConnectThoughtsSection isDark={isDark} />
      <AIIntegrationSection isDark={isDark} />
      <CollaborationSection isDark={isDark} />
      <TemplatesSection isDark={isDark} />

      <section className="py-20 px-4 md:px-8 lg:px-16 bg-zinc-50 dark:bg-zinc-900 transition-colors duration-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
              Visual thinking, supercharged by AI
            </h2>
            <p className="text-xl text-zinc-600 dark:text-zinc-300 max-w-3xl mx-auto">
              Transform ideas into visual maps with real-time collaboration and intelligent AI assistance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* AI-Powered Ideation */}
            <div className="bg-white dark:bg-zinc-800 p-6 rounded-xl shadow-sm border border-zinc-200 dark:border-zinc-700">
              <div className="w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center mb-4">
                <Brain className="text-white w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">AI-Powered Brainstorming</h3>
              <p className="text-zinc-600 dark:text-zinc-300">
                Generate ideas, expand thoughts, and get context-aware suggestions. Your AI creative partner that understands your thinking process.
              </p>
            </div>

            {/* Real-time Collaboration */}
            <div className="bg-white dark:bg-zinc-800 p-6 rounded-xl shadow-sm border border-zinc-200 dark:border-zinc-700">
              <div className="w-12 h-12 bg-secondary-500 rounded-lg flex items-center justify-center mb-4">
                <Users className="text-white w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">Real-time Collaboration</h3>
              <p className="text-zinc-600 dark:text-zinc-300">
                Work together seamlessly with live cursors, presence indicators, and smart conflict prevention. See who's thinking what, when.
              </p>
            </div>

            {/* Rich Content */}
            <div className="bg-white dark:bg-zinc-800 p-6 rounded-xl shadow-sm border border-zinc-200 dark:border-zinc-700">
              <div className="w-12 h-12 bg-tertiary-500 rounded-lg flex items-center justify-center mb-4">
                <FileText className="text-white w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">Rich Text & Media</h3>
              <p className="text-zinc-600 dark:text-zinc-300">
                Full WYSIWYG editing with document uploads, PDF previews, and rich formatting. Every node can hold detailed content.
              </p>
            </div>

            {/* Focus & Organization */}
            <div className="bg-white dark:bg-zinc-800 p-6 rounded-xl shadow-sm border border-zinc-200 dark:border-zinc-700">
              <div className="w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center mb-4">
                <Target className="text-white w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">Focus Tree & Navigation</h3>
              <p className="text-zinc-600 dark:text-zinc-300">
                Hierarchical organization with focus modes. Zoom into specific areas or see the big picture with intelligent navigation.
              </p>
            </div>

            {/* Cloud-First */}
            <div className="bg-white dark:bg-zinc-800 p-6 rounded-xl shadow-sm border border-zinc-200 dark:border-zinc-700">
              <div className="w-12 h-12 bg-secondary-500 rounded-lg flex items-center justify-center mb-4">
                <Cloud className="text-white w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">Cloud-First Storage</h3>
              <p className="text-zinc-600 dark:text-zinc-300">
                Automatic saves, thumbnail previews, and seamless sync across devices. Your boards are always available, everywhere.
              </p>
            </div>

            {/* Board Sharing */}
            <div className="bg-white dark:bg-zinc-800 p-6 rounded-xl shadow-sm border border-zinc-200 dark:border-zinc-700">
              <div className="w-12 h-12 bg-tertiary-500 rounded-lg flex items-center justify-center mb-4">
                <Share2 className="text-white w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">Easy Board Sharing</h3>
              <p className="text-zinc-600 dark:text-zinc-300">
                Invite collaborators via email, manage permissions, and track who's active. Share ideas as easily as sending a link.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-primary-500 to-blue-600 text-white p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">Ready to transform how you think?</h3>
              <p className="text-lg mb-6 opacity-90">
                Join thousands who've already discovered the power of visual thinking with AI
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#"
                  className="bg-white text-primary-600 font-semibold px-8 py-3 rounded-lg hover:bg-zinc-50 transition-colors duration-200"
                >
                  Start Free Today
                </a>
                <a
                  href="#"
                  className="border border-white/30 text-white px-8 py-3 rounded-lg hover:bg-white/10 transition-colors duration-200"
                >
                  See Pro Features
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA with Confetti */}
      <FinalCTASection isDark={isDark} />
    </>
  )
}

export default App
