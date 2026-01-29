import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Files, Presentation, Robot } from '@phosphor-icons/react'
import NodalBlackLogo from '../assets/nodal-black.svg'
import NodalWhiteLogo from '../assets/nodal-white.svg'
import solutionImage from '../assets/solution-image.png'
import productImage from '../assets/product-image.png'
import competitiveLandscapeImage from '../assets/competitive-landscape-image.png'

interface DeckProps {
  isDark: boolean
}

const TOTAL_SLIDES = 10

export default function Deck({ isDark }: DeckProps) {
  const [currentSlide, setCurrentSlide] = useState(1)
  const slideRefs = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    // Apply scroll snap to html element (the actual scroll container)
    const html = document.documentElement
    html.style.scrollSnapType = 'y mandatory'
    html.style.scrollBehavior = 'smooth'
    html.style.overflowY = 'scroll'
    html.style.height = '100%'

    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const slideIndex = slideRefs.current.indexOf(entry.target as HTMLElement)
          if (slideIndex !== -1) {
            setCurrentSlide(slideIndex + 1)
          }
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    slideRefs.current.forEach((slide) => {
      if (slide) observer.observe(slide)
    })

    return () => {
      slideRefs.current.forEach((slide) => {
        if (slide) observer.unobserve(slide)
      })
      // Cleanup scroll snap styles
      html.style.scrollSnapType = ''
      html.style.scrollBehavior = ''
      html.style.overflowY = ''
      html.style.height = ''
    }
  }, [])

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Slide 1: Logo/Tagline (was slide 10) */}
      <section
        ref={(el) => { slideRefs.current[0] = el }}
        className="min-h-screen flex flex-col items-center justify-center px-4 md:px-8 lg:px-16 py-20 snap-start"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <img
            src={isDark ? NodalWhiteLogo : NodalBlackLogo}
            alt="Nodal"
            className="h-24 md:h-32 w-auto mx-auto mb-8"
          />
          <p className="font-heading text-xl md:text-2xl lg:text-3xl text-zinc-300">
            a visual thinking platform for turning ideas into shareable stories
          </p>
        </motion.div>
      </section>

      {/* Slide 2: Problem */}
      <section
        ref={(el) => { slideRefs.current[1] = el }}
        className="min-h-screen flex flex-col items-center justify-center px-4 md:px-8 lg:px-16 py-20 snap-start"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-primary-400 font-heading text-sm md:text-base uppercase tracking-wide mb-8">
            problem
          </div>
          <h2 className="font-heading text-4xl md:text-6xl lg:text-7xl font-medium mb-8 leading-tight">
            ideas are easy to have, hard to explain
          </h2>
          <div className="space-y-4 text-lg md:text-xl text-zinc-300">
            <p>People lose time trying to explain ideas that live in notes,</p>
            <p>docs, and decks.</p>
            <p>Context gets scattered.</p>
            <p>Good thinking gets misunderstood or never shared at all.</p>
          </div>
          <p className="mt-8 font-heading text-2xl md:text-3xl font-medium">
            ideas don't fail because they're bad - they fail because they're hard to communicate
          </p>
        </motion.div>
      </section>

      {/* Slide 3: Insight */}
      <section
        ref={(el) => { slideRefs.current[2] = el }}
        className="min-h-screen flex flex-col items-center justify-center px-4 md:px-8 lg:px-16 py-20 snap-start"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <div className="text-primary-400 font-heading text-sm md:text-base uppercase tracking-wide mb-8">
              insight
            </div>
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <Files size={64} weight="duotone" className="text-zinc-400 flex-shrink-0" />
                <div>
                  <p className="text-lg md:text-xl">
                    Docs are <strong>linear</strong>
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Presentation size={64} weight="duotone" className="text-zinc-400 flex-shrink-0" />
                <div>
                  <p className="text-lg md:text-xl">
                    Whiteboards are <strong>chaotic</strong>
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Robot size={64} weight="duotone" className="text-zinc-400 flex-shrink-0" />
                <div>
                  <p className="text-lg md:text-xl">
                    AI tools generate <strong>content</strong> - not understanding
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-medium mb-6 leading-tight">
              the tools weren't built for how ideas actually evolve
            </h2>
            <p className="text-lg md:text-xl text-zinc-300">
              Most tools stop at creation.
            </p>
            <p className="text-lg md:text-xl text-zinc-300 mt-2">
              Very few help people make sense of what they're thinking.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Slide 4: Solution */}
      <section
        ref={(el) => { slideRefs.current[3] = el }}
        className="min-h-screen flex flex-col items-center justify-center px-4 md:px-8 lg:px-16 py-20 snap-start"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <div className="text-primary-400 font-heading text-sm md:text-base uppercase tracking-wide mb-8">
              solution
            </div>
            <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-medium mb-6 leading-tight">
              thinking is non-linear. explaining shouldn't be.
            </h2>
            <p className="text-lg md:text-xl text-zinc-300">
              nodal lets people explore ideas freely - then turn that thinking into a clear story when they are ready.
            </p>
            
          </div>
          <div className="relative">
            <img
              src={solutionImage}
              alt="Laptop illustration showing nodal interface"
              className="w-full h-auto rounded-lg"
            />

<p className="mt-6 text-lg text-center md:text-xl text-zinc-300 italic">
              from a collection of thoughts to clear communication <br />- <strong>in one place</strong>
            </p>
          </div>
        </motion.div>
      </section>

      {/* Slide 5: Product */}
      <section
        ref={(el) => { slideRefs.current[4] = el }}
        className="min-h-screen flex flex-col items-center justify-center px-4 md:px-8 lg:px-16 py-20 snap-start"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="relative">
            <img
              src={productImage}
              alt="Editing a node on a board"
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div>
            <div className="text-primary-400 font-heading text-sm md:text-base uppercase tracking-wide mb-8">
              product
            </div>
            <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-medium mb-6 leading-tight">
              how nodal creates clarity
            </h2>
            <p className="text-lg md:text-xl text-zinc-300 mb-6">
              A creator connects scattered <strong>nodes</strong> (docs, media, links) into a visual <strong>board</strong>, then uses <strong>Story Mode</strong> to explain the idea clearly without rebuilding it as a deck.
            </p>
            <ul className="space-y-3 text-lg md:text-xl text-zinc-300">
              <li>• create <strong>boards</strong> to explore ideas</li>
              <li>• add <strong>nodes</strong> to create context</li>
              <li>• use <strong>AI</strong> to expand or summarize thinking</li>
              <li>• turn boards into stories with <strong>Story Mode</strong></li>
              <li>• keep work private or share when ready</li>
            </ul>
          </div>
        </motion.div>
      </section>

      {/* Slide 6: Competitive Landscape */}
      <section
        ref={(el) => { slideRefs.current[5] = el }}
        className="min-h-screen flex flex-col items-center justify-center px-4 md:px-8 lg:px-16 py-20 snap-start"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-primary-400 font-heading text-sm md:text-base uppercase tracking-wide mb-8">
            competitive landscape
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-2 mb-6 text-lg md:text-xl">
                <p>thinking → understanding → storytelling</p>
              </div>
              <p className="text-lg md:text-xl text-zinc-300 mb-2">
                Most tools focus on one step.
              </p>
              <p className="text-lg md:text-xl text-zinc-300">
                nodal connects the full flow.
              </p>
            </div>
            <div className="relative">
              <img
                src={competitiveLandscapeImage}
                alt="Competitive landscape 2x2 matrix diagram"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Slide 7: Business Model */}
      <section
        ref={(el) => { slideRefs.current[6] = el }}
        className="min-h-screen flex flex-col items-center justify-center px-4 md:px-8 lg:px-16 py-20 snap-start"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-primary-400 font-heading text-sm md:text-base uppercase tracking-wide mb-8">
            business model
          </div>
          <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-medium mb-8 leading-tight">
            designed to grow with usage
          </h2>
          <p className="text-lg md:text-xl text-zinc-300 mb-8">
            nodal follows a freemium model.
          </p>
          <p className="text-lg md:text-xl text-zinc-300 mb-8">
            the product is designed around:
          </p>
          <ul className="space-y-2 text-lg md:text-xl text-zinc-300 mb-12">
            <li>• individual use first</li>
            <li>• future expansion into team plans</li>
          </ul>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="bg-secondary-500 rounded-3xl p-8 text-black">
              <h3 className="font-heading text-3xl md:text-4xl font-bold mb-6">Free</h3>
              <ul className="space-y-2 text-lg">
                <li>• core boards & nodes</li>
                <li>• personal use</li>
              </ul>
            </div>
            <div className="bg-tertiary-500 rounded-3xl p-8">
              <h3 className="font-heading text-3xl md:text-4xl font-bold mb-6">Pro</h3>
              <ul className="space-y-2 text-lg">
                <li>• collaboration</li>
                <li>• advanced features</li>
                <li>• more AI usage</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Slide 8: Who It's For */}
      <section
        ref={(el) => { slideRefs.current[7] = el }}
        className="min-h-screen flex flex-col items-center justify-center px-4 md:px-8 lg:px-16 py-20 snap-start"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="text-primary-400 font-heading text-sm md:text-base uppercase tracking-wide mb-8">
            who it's for
          </div>
          <h2 className="font-heading text-4xl md:text-6xl lg:text-7xl font-medium mb-8 leading-tight">
            built for people who think in ideas, not documents
          </h2>
          <ul className="space-y-4 text-lg md:text-xl text-zinc-300 mb-8">
            <li>• creators and writers</li>
            <li>• founders and builders</li>
            <li>• educators and students</li>
            <li>• teams working through complex ideas</li>
          </ul>
          <p className="text-lg md:text-xl text-zinc-300">
            nodal is for anyone who needs to explore complexity and explain ideas clearly
          </p>
        </motion.div>
      </section>

      {/* Slide 9: Why Now */}
      <section
        ref={(el) => { slideRefs.current[8] = el }}
        className="min-h-screen flex flex-col items-center justify-center px-4 md:px-8 lg:px-16 py-20 snap-start"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-primary-400 font-heading text-sm md:text-base uppercase tracking-wide mb-8">
            why now
          </div>
          <h2 className="font-heading text-4xl md:text-6xl lg:text-7xl font-medium mb-8 leading-tight">
            AI accelerates ideas -
            <br />
            understanding is still human
          </h2>
          <div className="space-y-6 text-lg md:text-xl text-zinc-300">
            <p>
              LLMs make generating ideas instant - but making sense of them still takes thought.
            </p>
            <p>
              As tools speed up creation, clarity and communication have become the bottleneck.
            </p>
            <p className="font-medium">
              <strong>nodal</strong> exists for the part in between.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Slide 10: Title (was slide 1) */}
      <section
        ref={(el) => { slideRefs.current[9] = el }}
        className="min-h-screen flex flex-col items-center justify-center px-4 md:px-8 lg:px-16 py-20 snap-start"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-medium mb-8 leading-tight">
            ideas matter most when
            <br />
            they're understood
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 mb-12 max-w-2xl mx-auto">
            nodal helps ideas move from a collection of thoughts to a clear communication - in one place.
          </p>
          <div className="flex flex-col items-center gap-4">
            <img
              src={isDark ? NodalWhiteLogo : NodalBlackLogo}
              alt="Nodal"
              className="h-16 md:h-20 w-auto"
            />
            <p className="font-heading text-xl md:text-2xl">go idea.</p>
          </div>
        </motion.div>
      </section>

      {/* Slide Counter */}
      <div className="fixed bottom-6 right-6 z-50 pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="font-heading text-sm md:text-base text-zinc-400"
        >
          {currentSlide} / {TOTAL_SLIDES}
        </motion.div>
      </div>
    </div>
  )
}
