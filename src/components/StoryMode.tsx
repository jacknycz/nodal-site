import { motion } from 'framer-motion'
import storyModeIntro from '../assets/story-mode-intro-small.mp4'

export default function StoryMode() {
  return (
    <section className="py-20 md:py-28 px-4 md:px-8 lg:px-16 transition-colors duration-200">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative overflow-hidden rounded-3xl border border-zinc-200/80 bg-white/70 p-6 shadow-2xl backdrop-blur-sm dark:border-zinc-800/80 dark:bg-zinc-950/30 dark:shadow-black/70 md:p-10"
        >
          {/* Decorative background wash */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-70"
            style={{
              background:
                'radial-gradient(50rem 50rem at 15% 15%, rgba(0, 207, 245, 0.20), transparent 55%), radial-gradient(45rem 45rem at 85% 25%, rgba(255, 0, 168, 0.14), transparent 55%), radial-gradient(55rem 55rem at 55% 90%, rgba(255, 222, 0, 0.12), transparent 60%)'
            }}
          />

          <div className="relative grid items-center gap-10 md:grid-cols-2">
            {/* Copy */}
            <div className="text-left">
              <motion.h2
                className="text-3xl md:text-4xl lg:text-5xl font-heading font-medium text-zinc-900 dark:text-white"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                turn thinking into a story
              </motion.h2>

              <motion.p
                className="mt-5 text-lg md:text-xl leading-relaxed text-zinc-700 dark:text-zinc-300 max-w-xl"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.05 }}
              >
                Ideas don’t start as stories - they become stories when they make sense. <strong>Story Mode</strong> lets you turn a
                board of connected thoughts into a clear, guided narrative without rebuilding your work as slides or
                docs.
              </motion.p>

              <motion.p
                className="mt-6 text-sm md:text-base text-zinc-500 dark:text-zinc-400"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Private when you’re figuring it out. Shareable when you’re ready.
              </motion.p>
            </div>

            {/* Visual */}
            <div className="relative">
              <div
                aria-hidden
                className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-primary-500/20 via-secondary-500/10 to-tertiary-500/15 blur-2xl dark:from-primary-500/15 dark:via-secondary-500/10 dark:to-tertiary-500/15"
              />

              <motion.div
                initial={{ opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, ease: 'easeOut', delay: 0.05 }}
                className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-white/80 p-6 shadow-lg backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-950/40"
              >
                {/* small node icons */}
                <div aria-hidden className="absolute right-5 top-5 flex items-center gap-2 opacity-80">
                  <img src="/document-node.svg" alt="" className="h-6 w-6" />
                  <img src="/task-node.svg" alt="" className="h-6 w-6" />
                  <img src="/video-node.svg" alt="" className="h-6 w-6" />
                </div>

                <div className="font-heading text-sm tracking-wide text-zinc-500 dark:text-zinc-400">
                  Story Mode
                </div>

                <div className="mt-4">
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-zinc-500 dark:text-zinc-400">intro (with audio)</div>
                    <div className="text-xs text-zinc-400 dark:text-zinc-500">~1 min</div>
                  </div>
                  <div className="mt-2 overflow-hidden rounded-xl border border-zinc-200/70 bg-white/60 dark:border-zinc-800/70 dark:bg-zinc-950/20">
                    <div className="aspect-video">
                      <video
                        src={storyModeIntro}
                        controls
                        playsInline
                        preload="metadata"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-4 space-y-3">
                  {[
                    { title: 'Pick a thread', body: 'Choose the path through your nodes.' },
                    { title: 'Guided structure', body: 'Get a clean narrative flow from what’s already there.' },
                    { title: 'Export / share', body: 'Keep it private—or publish when it clicks.' }
                  ].map((step, i) => (
                    <div key={step.title} className="relative">
                      {i !== 0 && (
                        <div
                          aria-hidden
                          className="absolute -top-3 left-4 h-3 w-px bg-gradient-to-b from-zinc-300 to-transparent dark:from-zinc-700"
                        />
                      )}
                      <div className="flex items-start gap-3 rounded-xl border border-zinc-200/70 bg-white/70 p-4 dark:border-zinc-800/70 dark:bg-zinc-900/20">
                        <div
                          aria-hidden
                          className="mt-1 h-2.5 w-2.5 rounded-full bg-primary-500 shadow-[0_0_0_4px_rgba(0,207,245,0.10)]"
                        />
                        <div className="min-w-0">
                          <div className="font-heading text-base font-medium text-zinc-900 dark:text-white">
                            {step.title}
                          </div>
                          <div className="text-sm text-zinc-600 dark:text-zinc-300">{step.body}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-5 flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-500">
                  <span>from messy → meaningful</span>
                  <span className="font-heading">no rebuild</span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

