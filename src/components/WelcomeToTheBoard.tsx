import { motion } from 'framer-motion'
import bgVideo from '../assets/welcome-to-the-board.mp4'

interface ConnectThoughtsSectionProps {
  isDark: boolean;
}

export default function ConnectThoughtsSection({ isDark }: ConnectThoughtsSectionProps) {
  return (
    <section className="relative overflow-hidden min-h-screen flex justify-start items-end bg-zinc-50 dark:bg-zinc-900 transition-colors duration-200">
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
        // style={{
        //   background: isDark
        //     ? 'linear-gradient(180deg, rgba(9,9,11,0.75) 0%, rgba(9,9,11,0.55) 40%, rgba(9,9,11,0.35) 70%, rgba(9,9,11,0.2) 100%)'
        //     : 'linear-gradient(180deg, rgba(9,9,11,0.75) 0%, rgba(9,9,11,0.55) 40%, rgba(9,9,11,0.35) 70%, rgba(9,9,11,0.2) 100%)'
        //     // : 'linear-gradient(180deg, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.65) 40%, rgba(255,255,255,0.45) 70%, rgba(255,255,255,0.25) 100%)'
        // }}
      />

      <div className="relative z-20 w-full">
        {/* Centered heading above columns */}
        <div className="text-center p-4 pb-16">
          <motion.h2
            className="font-heading text-4xl md:text-5xl font-medium text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            welcome to the board
          </motion.h2>

          {/* <motion.p
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
          </div> */}
        </div>
      </div>
    </section>
  )
}