//
import { motion } from 'framer-motion'
import NodalBlackLogo from '../assets/nodal-black.svg'
import NodalWhiteLogo from '../assets/nodal-white.svg'
// import NodalLaptop from '../assets/nodal-laptop.svg'
import DraggableBoard from './DraggableBoard'

interface HeroProps {
  isDark: boolean;
}

export default function Hero({ isDark }: HeroProps) {
  return (
    
    <section
      className="min-h-[70vh] py-48 flex items-center justify-center px-4 md:px-8 lg:px-16 bg-slate-100 dark:bg-zinc-950 transition-colors duration-200 relative overflow-hidden"
      style={{
        backgroundImage: `radial-gradient(circle, ${isDark ? '#333333' : '#c9c9c9'} 1px, transparent 1px)`,
        backgroundSize: '20px 20px',
        backgroundPosition: '0 0'
      }}
    >
      {/* Ripple mask that hides a ring of dots expanding outward */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background: isDark
            ? 'radial-gradient(60% 60% at 50% 50%, rgba(9,9,11,.6) 0%, rgba(9,9,11,0.55) 65%, rgba(9,9,11,0.2) 85%)'
            : 'radial-gradient(60% 60% at 50% 50%, rgba(255,255,255,1) 0%, rgba(255,255,255,0.55) 65%, rgba(255,255,255,0.3) 85%)'
        }}
      />

      {/* Background draggable board */}

      <div className="absolute z-20 top-2 left-4 max-w-md font-heading flex flex-col items-start space-y-2 mb-12">
        <img
          src={isDark ? NodalWhiteLogo : NodalBlackLogo}
          alt="Nodal Logo"
          className="transition-opacity duration-200 max-w-48"
        />
        <h1 className="font-heading text-xl md:text-2xl font-medium text-zinc-900 dark:text-white">for ideas.</h1>
      </div>

      <div className="w-full grid gap-8 md:grid-cols-2 md:gap-12 lg:gap-32 items-center relative z-20">
        <motion.div
          className="flex flex-col max-w-md items-start space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h3 className="font-heading text-lg md:text-2xl lg:text-3xl font-medium text-zinc-900 dark:text-white">nodal is a place to put your ideas down on a board and organize them how you see fit. it’s flexible.</h3>
          <p className="md:text-base text-zinc-900 dark:text-white">seriously flexible. jot down ideas, drop in files, quickly save summarized links and more to get that idea down while it makes sense. tasks, videos, images, documents, and more. all in one place.</p>
          <p className="md:text-base text-zinc-900 dark:text-white">drag and drop - for ideas.</p>

          <div className="mt-6 flex gap-4">
            <div className="flex gap-4">
              <div className="flex flex-col space-y-1">
                <a
                  href="https://app.nodalapp.com/"
                  className="bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-semibold px-6 py-3 rounded-lg hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors duration-200"
                >
                  Try Nodal (it's free)
                </a>
                <span className="text-gray-400 dark:text-gray-400 text-xs">like you don't need a credit card</span>
              </div>
              <div className="flex flex-col space-y-1">
                <a
                  href="#"
                  className="border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-white px-6 py-3 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors duration-200"
                >
                  Checkout the Fancy Stuff
                </a>
                <span className="text-gray-400 dark:text-gray-400 text-xs">if you're feeling $9.99 kinda ambitious</span>
              </div>
            </div>
          </div>
        </motion.div>

        

        {/* <motion.div
          className="flex flex-col items-start space-y-6"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="w-full flex flex-col items-center justify-center space-y-2 font-heading">
            <img
              src={NodalLaptop}
              alt="Nodal Logo"
              className="transition-opacity duration-200 w-full max-w-[420px]"
            />
            <span className="text-zinc-900 dark:text-white text-sm max-w-sm text-center">*yes there is AI, you all have got to be as burned out on that marketing as I am right?</span>
          </div>
        </motion.div> */}
      </div>

      <div className="absolute inset-0 z-30 pointer-events-none">
        <DraggableBoard fillParent className="bg-transparent border-none" />
      </div>
    </section>
  )
}


