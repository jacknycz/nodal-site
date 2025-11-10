//
import { motion } from 'framer-motion'
import NodalBlackLogo from '../assets/nodal-black.svg'
import NodalWhiteLogo from '../assets/nodal-white.svg'
// import NodalLaptop from '../assets/nodal-laptop.svg'
import DraggableBoard from './DraggableBoard'
import bgVideo from '../assets/welcome-to-nodal-short.mp4'

interface HeroProps {
  isDark: boolean;
}

export default function Hero({ isDark }: HeroProps) {
  return (

    <section
      className="lg:min-h-[1000px] pt-32 md:pt-48 pb-16 md:pb-24 lg:pt-32 lg:pb-12 flex-col items-center justify-center px-4 lg:px-16 
      transition-colors duration-200 relative"
    >

      {/* Background draggable board */}

      <div className="absolute z-20 top-2 left-4 max-w-md font-heading flex flex-col items-start space-y-1 md:space-y-2 mb-12">
        <img
          src={isDark ? NodalWhiteLogo : NodalBlackLogo}
          alt="Nodal Logo"
          className="transition-opacity duration-200 max-w-32 md:max-w-48"
        />
        <h1 className="font-heading text-lg md:text-2xl font-medium text-zinc-900 dark:text-white">go idea.</h1>
      </div>

      <div className="w-full max-w-md lg:max-w-2xl mx-auto justify-center items-center text-center relative z-20">
        <motion.div
          className="flex flex-col space-y-6 items-center justify-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h3 className="font-heading text-2xl md:text-5xl lg:text-6xl font-medium text-zinc-900 dark:text-white">
            a sandbox for ideas
          </h3>
          <p className="md:text-2xl max-w-md mx-auto lg:mx-0 xl:max-w-2xl text-zinc-900 dark:text-white">
            nodal is seriously flexible visual thinking. plan, organize, learn, teach, and share ideas.
          </p>

          <div className="mt-6 flex w-full gap-4">
            <div className="flex w-full gap-4 justify-center">
              <div className="flex flex-col space-y-1">
                <a
                  href="https://app.nodalapp.com/"
                  className="bg-primary-600 hover:bg-primary-500
                  text-white text-center font-medium font-heading 
                  px-6 py-3 rounded-full transition-colors duration-200"
                >
                  use nodal free
                </a>
                <span className="text-gray-400 dark:text-gray-400 text-xs">no credit card needed</span>
              </div>
              <div className="hidden md:flex flex-col space-y-1">
                <a
                  href="#pro"
                  onClick={(e) => {
                    e.preventDefault()
                    const el = document.getElementById('pro')
                    if (el) {
                      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
                    } else {
                      window.location.hash = 'pro'
                    }
                  }}
                  className="border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800
                  text-zinc-900 text-center font-medium font-heading dark:text-white px-6 py-3 rounded-full transition-colors duration-200"
                >
                  see pro features
                </a>
                <span className="text-gray-400 dark:text-gray-400 text-xs">feeling $9.99 ambitious?</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Background video (full-bleed <md, contained and styled on md+) */}
      <motion.div
        className="flex flex-col space-y-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {/* <div className="z-0 w-full md:mx-auto md:max-w-2xl mt-12 lg:mt-32 md:rounded-2xl md:overflow-hidden md:shadow-2xl dark:shadow-black/70 md:bg-black/20 md:backdrop-blur-sm aspect-[1.94/1]">
          <video
            src={bgVideo}
            autoPlay
            loop
            muted
            playsInline
            aria-hidden="true"
            className="pointer-events-none select-none w-full h-auto md:h-full object-contain"
          />
        </div> */}
      </motion.div>

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

      <div className="hidden lg:block absolute inset-0 z-30 pointer-events-none">
        <DraggableBoard fillParent className="bg-transparent border-none" />
      </div>
    </section>
  )
}


