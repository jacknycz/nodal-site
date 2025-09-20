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
      className="min-h-[70vh] py-64 flex items-center justify-center px-4 md:px-8 lg:px-16 transition-colors duration-200 relative overflow-hidden"
    >

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
                  className="bg-primary-600 dark:bg-white hover:bg-zinc-800 dark:hover:bg-zinc-100
                  text-white text-center dark:text-zinc-900 font-medium font-heading 
                  px-6 py-3 rounded-full transition-colors duration-200"
                >
                  sign up free
                </a>
                <span className="text-gray-400 dark:text-gray-400 text-xs">no credit card needed</span>
              </div>
              <div className="flex flex-col space-y-1">
                <a
                  href="#"
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


