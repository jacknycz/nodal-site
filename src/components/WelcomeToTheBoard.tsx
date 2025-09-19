import { motion } from 'framer-motion'
import bgVideo from '../assets/nodal-test.mp4'

interface ConnectThoughtsSectionProps {
  isDark: boolean;
}

export default function ConnectThoughtsSection({ isDark }: ConnectThoughtsSectionProps) {
  return (
    <section className="relative overflow-hidden py-16 min-h-screen flex justify-start items-end px-4 md:px-8 lg:px-16 bg-zinc-50 dark:bg-zinc-900 transition-colors duration-200">
      {/* Background video */}
      <video
        src={bgVideo}
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
        className="pointer-events-none select-none absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Overlay above video, below content */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background: isDark
            ? 'linear-gradient(180deg, rgba(9,9,11,0.75) 0%, rgba(9,9,11,0.55) 40%, rgba(9,9,11,0.35) 70%, rgba(9,9,11,0.2) 100%)'
            : 'linear-gradient(180deg, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.65) 40%, rgba(255,255,255,0.45) 70%, rgba(255,255,255,0.25) 100%)'
        }}
      />

      <div className="relative z-20 w-full mx-auto">
        {/* Centered heading above columns */}
        <div className="bg-zinc-900/50 p--4">
          <motion.h2
            className="font-heading text-4xl md:text-5xl font-medium text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            welcome to the board
          </motion.h2>

          <motion.p
            className="text-2xl text-zinc-200 font-light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Link what matters. See what unfolds. (or just drag and drop stuff onto the board)
          </motion.p>
          <div className="mt-8">
            <a
              href="https://app.nodalapp.com/"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold bg-primary-500 hover:bg-primary-400 text-white transition-colors"
            >
              just try it
            </a>
          </div>
        </div>

        {/* <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div className="space-y-6">
            <motion.div
              className="flex items-start gap-4"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="w-2 h-2 bg-primary-500 rounded-full mt-3 flex-shrink-0" />
              <p className="text-lg text-zinc-600 dark:text-zinc-300">
                Drag and drop nodes to connect ideas visually
              </p>
            </motion.div>

            <motion.div
              className="flex items-start gap-4"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="w-2 h-2 bg-secondary-500 rounded-full mt-3 flex-shrink-0" />
              <p className="text-lg text-zinc-600 dark:text-zinc-300">
                Build out a web of thought that mirrors how your brain actually works
              </p>
            </motion.div>

            <motion.div
              className="flex items-start gap-4"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="w-2 h-2 bg-tertiary-500 rounded-full mt-3 flex-shrink-0" />
              <p className="text-lg text-zinc-600 dark:text-zinc-300">
                From chaotic sparks to structured flow — Nodal helps you zoom out, zoom in, and see the big picture form naturally. Bring your assets to the party and start making something cool.
              </p>
            </motion.div>
          </div>
        </div> */}
      </div>
    </section>
  )
}