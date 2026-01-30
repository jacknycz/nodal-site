import { useState, useId, type ReactNode } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import usesBrainstorm from '../assets/uses-brainstorm.png'
import usesPlan from '../assets/uses-plan.png'
import usesLearn from '../assets/uses-learn.png'
import usesCreate from '../assets/uses-create.png'

interface FeatureTab {
  title: string;
  content: ReactNode;
}

const TABS: FeatureTab[] = [
  {
    title: 'brainstorm',
    content: (
      <PlaceholderContent
        contentTitle="brainstorming"
        imageLabel="Search UI preview"
        imageSrc={usesBrainstorm}
        subtitle="got a direction? let's go there"
        description="nodal is seriously flexible. Jot down thoughts, word vomit, lay everything down in one place. Find connections and similarities so you can see the bigger picture and build from there. Invite your friends to collaborate. Or ask Nobot to weigh in too - he's good at that."
      />
    )
  },
  {
    title: 'plan',
    content: (
      <PlaceholderContent
        contentTitle="planning"
        imageLabel="Command menu mock"
        imageSrc={usesPlan}
        subtitle="ditch the lists"
        description="Ditch the to-do app, chaotic notes, never-ending browser windows and bookmarks and see your whole project at a glance. Simplify workflows and bring order to the chaos. Create a visual framework for complex ideas and share with others."
      />
    )
  },
  {
    title: 'learn',
    content: (
      <PlaceholderContent
        contentTitle="learning"
        imageLabel="Drafting space"
        imageSrc={usesLearn}
        subtitle="learn the way your brain learns best"
        description="Turn messy notes into clear visuals, map out concepts and processes, expand on knowledge and quiz yourself. Create study guides and share with students or classmates. Use Nodal to plan writing projects, thought excercises, learning assignments and more. Hate school projects? Collaborate effectively and assign tasks virtually."
      />
    )
  },
  {
    title: 'create',
    content: (
      <PlaceholderContent
        contentTitle="creating"
        imageLabel="Drafting space"
        imageSrc={usesCreate}
        subtitle="open up your creative flow"
        description="Plan content, start an art project, drop in some inspiration if you're feeling stuck. Turn up the creativity and start your project from scratch, or expand on something you've got going now. Watch your ideas bloom as you let your mind wander."
      />
    )
  }
]

interface PlaceholderContentProps {
  imageLabel: string;
  contentTitle: string;
  subtitle: string;
  description: string;
  imageSrc: string;
}

function PlaceholderContent({
  imageLabel,
  contentTitle,
  subtitle,
  description,
  imageSrc
}: PlaceholderContentProps) {
  return (
    <div className="grid items-center gap-8 md:grid-cols-2 lg:gap-12">
      <div className="flex items-center justify-center">
        <img src={imageSrc} alt={imageLabel} className="w-full h-full object-contain" />
      </div>

      <div className="space-y-4 text-left">
        <p className="text-2xl md:text-3xl font-medium font-heading tracking-wide text-zinc-500 dark:text-white">
          {contentTitle}
        </p>
        <p className="text-sm font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
          {subtitle}
        </p>
        <p className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
          {description}
        </p>
      </div>
    </div>
  )
}

export default function FeatureTabsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const baseId = useId()

  return (
    <section className="py-8 md:py-20 px-4 md:px-8 lg:px-16 mt-12 lg:mt-24 transition-colors duration-200">
      <div className="max-w-5xl mx-auto text-center mb-14">
        <motion.h2
          className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium text-zinc-900 dark:text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          boards are infinite and flexible
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl text-zinc-700 dark:text-zinc-300 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          so here are a few of the ways people use their boards
        </motion.p>
        <motion.p
          className="text-sm md:text-sm text-zinc-700 dark:text-zinc-300 max-w-3xl mx-auto mt-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          *legally the board is just really big, not <em>infinite</em>
        </motion.p>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Tabs */}
        <motion.div
          role="tablist"
          aria-orientation="horizontal"
          className="flex flex-wrap justify-center gap-2"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
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
                type="button"
                id={tabId}
                aria-controls={panelId}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveIndex(index)}
                className={`inline-flex items-center justify-center rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-400 dark:focus-visible:outline-white ${isActive
                  ? 'border-zinc-900 bg-zinc-900 text-white shadow-sm dark:border-white dark:bg-white dark:text-zinc-900'
                  : 'border-zinc-200 bg-white text-zinc-700 hover:border-zinc-300 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-zinc-700 dark:hover:text-white'}`}
              >
                {tab.title}
              </button>
            )
          })}
        </motion.div>

        {/* Content Panel */}
        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
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
                className="relative overflow-hidden rounded-3xl border border-gray-200/80 bg-white/80 p-6 shadow-2xl 
                dark:border-gray-800/80 dark:bg-gray-950/50 dark:shadow-black/70 md:p-10"
              >
                {/* Gradient/wash treatment (no extra outer box) */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 opacity-70"
                  style={{
                    background:
                      'radial-gradient(46rem 46rem at 12% 18%, rgba(0, 207, 245, 0.16), transparent 58%), radial-gradient(44rem 44rem at 88% 25%, rgba(255, 0, 168, 0.10), transparent 58%), radial-gradient(52rem 52rem at 55% 92%, rgba(255, 222, 0, 0.08), transparent 62%)'
                  }}
                />
                <div className="relative">{TABS[activeIndex].content}</div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}


