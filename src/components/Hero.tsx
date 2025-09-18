import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import NodalBlackLogo from '../assets/nodal-black.svg'
import NodalWhiteLogo from '../assets/nodal-white.svg'

interface HeroProps {
  isDark: boolean;
}

export default function Hero({ isDark }: HeroProps) {
  return (
    <section
      className="min-h-[70vh] flex items-center justify-center px-4 md:px-8 lg:px-16 bg-white dark:bg-zinc-950 transition-colors duration-200 relative"
      style={{
        backgroundImage: `radial-gradient(circle, ${isDark ? '#666666' : '#cccccc'} 1px, transparent 1px)`,
        backgroundSize: '20px 20px',
        backgroundPosition: '0 0'
      }}
    >
      <div className="absolute inset-0 bg-white/70 dark:bg-zinc-950/70 pointer-events-none" />

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 md:gap-12 lg:gap-32 items-center relative z-10">
        <motion.div
          className="flex flex-col items-start space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="max-w-md font-heading">
            <img
              src={isDark ? NodalWhiteLogo : NodalBlackLogo}
              alt="Nodal Logo"
              className="transition-opacity duration-200"
            />
          </div>
          <h1 className="font-heading text-xl md:text-3xl font-bold text-zinc-900 dark:text-white">for ideas.</h1>

          <div className="mt-6 flex gap-4">
            <div className="flex gap-4">
              <div className="flex flex-col space-y-1">
                <a
                  href="#"
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
      </div>
    </section>
  )
}


