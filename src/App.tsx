import { useState, useEffect } from 'react'
import NodalBlackLogo from './assets/nodal-black.svg'
import NodalWhiteLogo from './assets/nodal-white.svg'
import Screengrab from './assets/screengrab.png'
import './App.css'

// Typewriter component
function Typewriter({ phrases, typingSpeed = 80, pause = 1800, deletingSpeed = 40 }: {
  phrases: string[];
  typingSpeed?: number;
  pause?: number;
  deletingSpeed?: number;
}) {
  const [displayed, setDisplayed] = useState('')
  const [phraseIdx, setPhraseIdx] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [charIdx, setCharIdx] = useState(0)

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    const currentPhrase = phrases[phraseIdx];
    if (!isDeleting && charIdx < currentPhrase.length) {
      timeout = setTimeout(() => {
        setDisplayed(currentPhrase.slice(0, charIdx + 1));
        setCharIdx(charIdx + 1);
      }, typingSpeed);
    } else if (isDeleting && charIdx > 0) {
      timeout = setTimeout(() => {
        setDisplayed(currentPhrase.slice(0, charIdx - 1));
        setCharIdx(charIdx - 1);
      }, deletingSpeed);
    } else if (!isDeleting && charIdx === currentPhrase.length) {
      timeout = setTimeout(() => setIsDeleting(true), pause);
    } else if (isDeleting && charIdx === 0) {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setPhraseIdx((phraseIdx + 1) % phrases.length);
      }, 400);
    }
    return () => clearTimeout(timeout);
  }, [charIdx, isDeleting, phraseIdx, phrases, typingSpeed, deletingSpeed, pause]);

  return (
    <span className="inline-block -mr-3">
      {displayed}
      <span className="typewriter-cursor">|</span>
    </span>
  );
}

function App() {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark)
  }, [isDark])

  return (
    <>
      <section
        className="relative flex flex-col items-center justify-center bg-cover min-h-screen bg-center text-zinc-900 dark:text-white transition-colors duration-200"
        style={{ backgroundImage: `url(${Screengrab})` }}
      >
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-white/80 dark:bg-zinc-950/80 pointer-events-none transition-colors duration-200" />
        <div className="relative flex flex-col items-start justify-start w-full px-4 md:px-8 lg:px-16">

          <button
            onClick={() => setIsDark(prev => !prev)}
            className="fixed -top-40 right-4 px-4 py-2 rounded bg-zinc-200 dark:bg-zinc-800"
          >
            {isDark ? "🌙 Dark" : "☀️ Light"}
          </button>

          {/* Logo - show different versions for light/dark */}
          <div className="mb-8 max-w-full md:max-w-1/2 lg:max-w-1/2">
            <img
              src={isDark ? NodalWhiteLogo : NodalBlackLogo}
              alt="Nodal Logo"
              className="transition-opacity duration-200"
            />
          </div>

          <h1 className="flex justify-start text-2xl lg:text-4xl lg:max-w-3/4 text-zinc-900 dark:text-white font-normal tracking-tight">
            <span>is&nbsp;</span>
            <span className="text-zinc-200 dark:text-white border-b-3 lg:border-b-4 border-primary-500 dark:border-primary-500">
              <Typewriter
                phrases={[
                  'coming soon...',
                  'a visual thinking tool...',
                  'AI for your ideas...',
                  'boards & nodes...',
                  'your creative partner...',
                  'whatever you imagine...',
                  'AI meets ADHD...',
                  'a research assistant...',
                  'for sharing ideas...'
                ]}
              />
            </span>
          </h1>
          {/* <p className="mt-6 text-lg sm:text-xl text-zinc-600 dark:text-zinc-300">
            Nodal is a visual thinking tool powered by AI. Build ideas with Boards & Nodes.
          </p> */}

          {/* <div className="mt-10 flex justify-center gap-4">
            <a
              href="https://app.nodalapp.com"
              className="bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-semibold px-6 py-3 rounded-lg hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors duration-200"
            >
              Try the App
            </a>
            <a
              href="#features"
              className="border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-white px-6 py-3 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors duration-200"
            >
              Learn More
            </a>
          </div> */}

          {/* <h3 className="mt-10 text-lg sm:text-xl text-zinc-600 dark:text-zinc-300">Coming soon...</h3> */}
        </div>
      </section>
    </>
  )
}

export default App
