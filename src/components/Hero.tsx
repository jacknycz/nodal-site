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
          <h3 className="font-heading text-4xl md:text-5xl lg:text-6xl font-medium text-zinc-900 dark:text-white">
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
              <div className="flex flex-col space-y-1">
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
        <div className="z-0 w-full mx-auto mt-16 rounded-2xl 
        border border-black/50
        overflow-hidden shadow-2xl dark:shadow-black bg-black/20 backdrop-blur-sm 
        aspect-[1.94/1] lg:hidden">
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
      </motion.div>

      <div className="hidden lg:block absolute inset-0 z-30 pointer-events-none">
        <DraggableBoard fillParent className="bg-transparent border-none" />
      </div>
    </section>
  )
}


