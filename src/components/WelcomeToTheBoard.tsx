import { motion } from 'framer-motion'
import bgVideo from '../assets/welcome-to-nodal-short.mp4'

interface ConnectThoughtsSectionProps {
  isDark: boolean;
}

export default function ConnectThoughtsSection({ isDark: _isDark }: ConnectThoughtsSectionProps) {
  return (
    <section className="relative mt-6 md:-mt-24 overflow-hidden flex flex-col items-stretch md:items-center md:justify-center 
    transition-colors duration-200 md:py-12">
      {/* Background video (full-bleed <md, contained and styled on md+) */}
      <div className="z-0 w-full md:mx-auto md:max-w-2xl md:rounded-2xl md:border md:border-zinc-800/60 md:overflow-hidden md:shadow-lg md:bg-black/20 md:backdrop-blur-sm aspect-[1.94/1]">
        <video
          src={bgVideo}
          autoPlay
          loop
          muted
          playsInline
          aria-hidden="true"
          className="pointer-events-none select-none w-full h-auto md:h-full object-contain"
        />
      </div>

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
        <div className="text-center">
          <motion.h2
            className="font-heading hidden text-4xl md:text-5xl font-medium text-white mb-4"
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