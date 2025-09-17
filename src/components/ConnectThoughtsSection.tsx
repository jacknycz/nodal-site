import { motion } from 'framer-motion'
import { Lightning } from '@phosphor-icons/react'
import nodalBoard from '../assets/nodal-board.png'

interface ConnectThoughtsSectionProps {
  isDark: boolean;
}

export default function ConnectThoughtsSection({ isDark }: ConnectThoughtsSectionProps) {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-zinc-50 dark:bg-zinc-900 transition-colors duration-200">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - Content */}
          <div>
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Welcome to the board
            </motion.h2>
            
            <motion.p 
              className="text-2xl text-zinc-700 dark:text-zinc-200 mb-8 font-light"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Link what matters. See what unfolds. (or just drag and drop stuff onto the board)
            </motion.p>

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
          </div>

          {/* Right Column - Interactive Demo */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img src={nodalBoard} alt="Connect Thoughts" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}