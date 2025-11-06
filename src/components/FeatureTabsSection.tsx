import { useState, useId } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import videoRightClickSuperpowers from '../assets/right-click-superpowers.mp4'
import videoSearchAndZoom from '../assets/search-and-zoom.mp4'
import videoWriteWithConfidence from '../assets/write-with-confidence.mp4'

interface FeatureTab {
  title: string;
  description: string;
  src: string;
}

const TABS: FeatureTab[] = [
  {
    title: 'Search everything',
    description:
      'Does your search zoom? Our search zooms. Search all your docs, notes, tasks, in one place.',
    src: videoSearchAndZoom
  },
  {
    title: 'Right-click superpowers',
    description:
      'We made creating as simple as a click - just the right one.',
    src: videoRightClickSuperpowers
  },
  {
    title: 'Write with confidence',
    description:
      'Load your board up with everything your next project could possibly need.',
    src: videoWriteWithConfidence
  }
]

export default function FeatureTabsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const baseId = useId()

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 transition-colors duration-200">
      <div className="max-w-5xl mx-auto text-center mb-14">
        <motion.h2
          className="text-4xl md:text-5xl font-heading font-medium text-zinc-900 dark:text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          everything in its place
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl text-zinc-700 dark:text-zinc-300 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          the board is infinite and flexible - so you'll need some tools along the way.
        </motion.p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
        {/* Tabs */}
        <motion.div
          role="tablist"
          aria-orientation="vertical"
          className="md:col-span-1 space-y-2"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          {TABS.map((tab, index) => {
            const isActive = index === activeIndex
            const tabId = `${baseId}-tab-${index}`
            const panelId = `${baseId}-panel-${index}`
            return (
              <button
                key={tab.title}
                id={tabId}
                aria-controls={panelId}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveIndex(index)}
                className={`w-full text-left rounded-xl border px-4 py-3 transition-colors cursor-pointer
                ${isActive
                    ? 'border-zinc-300 dark:border-zinc-950/50 bg-white dark:bg-zinc-700/40 text-zinc-900 dark:text-white'
                    : 'border-zinc-200/70 dark:border-zinc-800/80 hover:border-zinc-300 dark:hover:border-zinc-700 text-zinc-900 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white'}`}
              >
                <div className="font-semibold">
                  {tab.title}
                </div>
                {isActive && (
                  <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                    {tab.description}
                  </p>
                )}
              </button>
            )
          })}
        </motion.div>

        {/* Video Panel */}
        <motion.div
          className="md:col-span-3"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
            >
              <div
                role="tabpanel"
                id={`${baseId}-panel-${activeIndex}`}
                aria-labelledby={`${baseId}-tab-${activeIndex}`}
                className="relative overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-900 shadow-2xl dark:shadow-black/70 min-h-[220px] md:min-h-[360px] lg:min-h-[420px]"
                style={{ aspectRatio: '16 / 9' }}
              >
                <motion.video
                  key={`video-${activeIndex}`}
                  initial={{ scale: 1.01 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className="absolute inset-0 w-full h-full object-cover"
                  src={TABS[activeIndex].src}
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}


