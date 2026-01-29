import { useEffect, useRef, useState } from 'react'
import { motion, useDragControls } from 'framer-motion'

import NodalBlackLogo from '../assets/nodal-black.svg'
import NodalWhiteLogo from '../assets/nodal-white.svg'
import DraggableBoard from './DraggableBoard'
import bgVideo from '../assets/welcome-to-nodal-short.mp4'

interface HeroV2Props {
  isDark: boolean
}

export default function HeroV2({ isDark }: HeroV2Props) {
  const constraintsRef = useRef<HTMLElement | null>(null)
  const dragControls = useDragControls()
  const [canDrag, setCanDrag] = useState(false)

  useEffect(() => {
    const check = () => setCanDrag(window.innerWidth >= 1024) // lg+
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  return (
    <section
      ref={constraintsRef}
      className="relative pt-24 md:pt-32 pb-16 md:pb-24 px-4 md:px-8 lg:px-16 transition-colors duration-200"
    >

<div className="flex flex-col items-center lg:items-start justify-center lg:justify-start gap-3 lg:absolute lg:top-8 lg:left-16">
            <div className="flex items-center justify-center lg:justify-start gap-3">
            <img
              src={isDark ? NodalWhiteLogo : NodalBlackLogo}
              alt="Nodal"
              className="h-9 md:h-10 w-auto"
            />
          </div>

          <span className="font-heading text-base md:text-lg text-zinc-900 dark:text-white">
            go idea.
            </span>
          </div>

      <div className="relative max-w-full mx-auto grid gap-10 lg:grid-cols-12 items-center">
        {/* LEFT: copy */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: 'easeOut' }}
          className="lg:col-span-6 text-center lg:text-left"
        >
          

          <h1 className="mt-5 font-heading text-4xl md:text-6xl font-medium leading-[1.03] text-zinc-900 dark:text-white">
            make the mess.
            <br />
            <span className="bg-gradient-to-r from-primary-400 via-secondary-400 to-tertiary-400 bg-clip-text text-transparent">
              find the line.
            </span>
            <br />
            tell the story.
          </h1>

          <p className="mt-5 text-lg md:text-2xl text-zinc-700 dark:text-zinc-300 max-w-xl mx-auto lg:mx-0">
            <strong className="font-heading text-white font-medium">nodal</strong> is a thinking canvas that turns connected ideas into something you can actually share.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-2">
            {['map ideas fast', 'connect context', 'share when it clicks'].map((t) => (
              <span
                key={t}
                className="inline-flex items-center rounded-full border border-zinc-200/70 bg-white/60 px-3 py-1 text-sm text-zinc-700 backdrop-blur-sm dark:border-zinc-800/70 dark:bg-zinc-950/25 dark:text-zinc-300"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
            <div className="flex flex-col space-y-1">
              <a
                href="https://app.nodalapp.com/"
                className="bg-primary-600 hover:bg-primary-500 text-white text-center font-semibold font-heading px-7 py-3.5 rounded-full transition-colors duration-200 shadow-lg shadow-primary-600/20"
              >
                start free
              </a>
              <span className="text-zinc-500 dark:text-zinc-400 text-xs text-center sm:text-left">
                no credit card needed
              </span>
            </div>

            <div className="flex flex-col space-y-1">
              <a
                href="#pro"
                onClick={(e) => {
                  e.preventDefault()
                  const el = document.getElementById('pro')
                  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  else window.location.hash = 'pro'
                }}
                className="border border-zinc-300/90 bg-white/40 hover:bg-white/60 text-zinc-900 text-center font-semibold font-heading dark:text-white px-7 py-3.5 rounded-full transition-colors duration-200
                dark:border-zinc-700/80 dark:bg-zinc-950/20 dark:hover:bg-zinc-950/35"
              >
                see pro
              </a>
              <span className="text-zinc-500 dark:text-zinc-400 text-xs text-center sm:text-left">
                extra power + collab
              </span>
            </div>
          </div>
        </motion.div>

        {/* RIGHT: “board” frame */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: 'easeOut', delay: 0.05 }}
          className="lg:col-span-6"
          drag={canDrag}
          dragControls={dragControls}
          dragListener={false}
          dragConstraints={constraintsRef}
          dragMomentum={false}
          dragElastic={0.08}
        >
          <div className="relative overflow-hidden rounded-3xl border border-zinc-200/80 bg-white/60 shadow-2xl backdrop-blur-sm dark:border-zinc-800/80 dark:bg-zinc-950/30 dark:shadow-black/70">
            <div className="absolute inset-0 pointer-events-none opacity-70">
              <div
                className="absolute -inset-24"
                style={{
                  background:
                    'radial-gradient(40rem 40rem at 20% 20%, rgba(0, 207, 245, 0.22), transparent 55%), radial-gradient(36rem 36rem at 85% 15%, rgba(255, 0, 168, 0.14), transparent 55%), radial-gradient(44rem 44rem at 60% 95%, rgba(255, 222, 0, 0.12), transparent 60%)'
                }}
              />
            </div>

            <div
              className="relative flex items-center justify-between px-5 py-4 border-b border-zinc-200/70 dark:border-zinc-800/70 select-none cursor-grab active:cursor-grabbing"
              onPointerDown={(e) => {
                if (!canDrag) return
                dragControls.start(e)
              }}
              role="button"
              tabIndex={0}
              aria-label="Drag board preview"
            >
              <div className="font-heading text-sm text-zinc-700 dark:text-zinc-300">your board</div>
              <div className="text-xs text-zinc-500 dark:text-zinc-500">
                {canDrag ? 'grab & move this preview' : 'drag. link. zoom. repeat.'}
              </div>
            </div>

            {/* desktop: draggable board “scene” */}
            <div className="relative hidden lg:block h-[70vh] overflow-hidden">
              <div className="absolute inset-0">
                <div className="absolute inset-0 opacity-40 bg-gradient-to-b from-transparent via-transparent to-white dark:to-gray-950" />
                {/* Drag layer behind nodes: grab empty space without stealing node drags */}
                <div
                  aria-hidden
                  className="absolute inset-0 z-0 cursor-grab active:cursor-grabbing"
                  onPointerDown={(e) => {
                    if (!canDrag) return
                    dragControls.start(e)
                  }}
                />
                <DraggableBoard
                  fillParent
                  className="relative z-10 bg-transparent border-none scale-[1] origin-top-left -translate-y-24"
                />
              </div>
            </div>

            {/* mobile/tablet: simple video preview */}
            <div className="relative lg:hidden aspect-[1.94/1]">
              <video
                src={bgVideo}
                autoPlay
                loop
                muted
                playsInline
                aria-hidden="true"
                className="pointer-events-none select-none w-full h-full object-contain"
              />
            </div>
          </div>

          <div className="mt-3 text-center text-xs text-zinc-500 dark:text-zinc-400">
            build privately. share cleanly.
          </div>
        </motion.div>
      </div>
    </section>
  )
}

