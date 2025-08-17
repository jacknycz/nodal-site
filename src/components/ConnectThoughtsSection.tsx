import { motion } from 'framer-motion'
import { Zap } from 'lucide-react'

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
              Connect Your Thoughts
            </motion.h2>
            
            <motion.p 
              className="text-2xl text-zinc-700 dark:text-zinc-200 mb-8 font-light"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Link what matters. See what unfolds.
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
                  Drag and drop to connect ideas visually.
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
                  Build out a web of thought that mirrors how your brain actually works.
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
                  From chaotic sparks to structured flow — Nodal helps you zoom out, zoom in, and see the big picture form naturally.
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
            <div className="bg-white dark:bg-zinc-800 rounded-2xl p-8 shadow-xl border border-zinc-200 dark:border-zinc-700 relative overflow-hidden min-h-[300px]">
              
              {/* Background pattern */}
              <div 
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: `radial-gradient(circle, ${isDark ? '#444' : '#ddd'} 1px, transparent 1px)`,
                  backgroundSize: '20px 20px'
                }}
              />

              {/* Demo nodes and connections */}
              <div className="relative z-10 h-96">
                {/* First Node */}
                <motion.div
                  className="absolute top-12 left-8 w-24 h-16 bg-primary-500 rounded-lg flex items-center justify-center shadow-lg"
                  initial={{ scale: 0.3, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.8 }}
                >
                  <span className="text-white text-sm font-medium">Idea A</span>
                </motion.div>

                {/* Second Node */}
                <motion.div
                  className="absolute top-12 right-8 w-24 h-16 bg-secondary-500 rounded-lg flex items-center justify-center shadow-lg"
                  initial={{ scale: 0.3, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 1.0 }}
                >
                  <span className="text-white text-sm font-medium">Idea B</span>
                </motion.div>

                {/* Third Node */}
                <motion.div
                  className="absolute bottom-12 left-1/2 transform -translate-x-1/2 w-24 h-16 bg-tertiary-500 rounded-lg flex items-center justify-center shadow-lg"
                  initial={{ scale: 0.3, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 1.2 }}
                >
                  <span className="text-white text-sm font-medium">Insight</span>
                </motion.div>

                {/* Connection Line 1 */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                  <motion.path
                    d="M 128 48 Q 200 48 272 48"
                    stroke={isDark ? "#00CFF5" : "#00CFF5"}
                    strokeWidth="3"
                    fill="none"
                    strokeDasharray="0"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.8 }}
                    transition={{ duration: 0.8, delay: 1.4 }}
                  />
                  
                  {/* Connection glow effect */}
                  <motion.circle
                    cx="200"
                    cy="48"
                    r="4"
                    fill="#00CFF5"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ 
                      scale: [0, 1.5, 1],
                      opacity: [0, 0.8, 1]
                    }}
                    transition={{ 
                      duration: 0.6, 
                      delay: 2.2,
                      ease: "easeOut"
                    }}
                  />
                </svg>

                {/* Connection Line 2 */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                  <motion.path
                    d="M 64 80 Q 64 180 200 220"
                    stroke={isDark ? "#FFDE00" : "#FFDE00"}
                    strokeWidth="3"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.8 }}
                    transition={{ duration: 0.8, delay: 1.6 }}
                  />
                  
                  <motion.circle
                    cx="132"
                    cy="150"
                    r="4"
                    fill="#FFDE00"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ 
                      scale: [0, 1.5, 1],
                      opacity: [0, 0.8, 1]
                    }}
                    transition={{ 
                      duration: 0.6, 
                      delay: 2.4,
                      ease: "easeOut"
                    }}
                  />
                </svg>

                {/* Connection Line 3 */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                  <motion.path
                    d="M 336 80 Q 336 180 200 220"
                    stroke={isDark ? "#FF00A8" : "#FF00A8"}
                    strokeWidth="3"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.8 }}
                    transition={{ duration: 0.8, delay: 1.8 }}
                  />
                  
                  <motion.circle
                    cx="268"
                    cy="150"
                    r="4"
                    fill="#FF00A8"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ 
                      scale: [0, 1.5, 1],
                      opacity: [0, 0.8, 1]
                    }}
                    transition={{ 
                      duration: 0.6, 
                      delay: 2.6,
                      ease: "easeOut"
                    }}
                  />
                </svg>

                {/* Floating action hints */}
                <motion.div
                  className="absolute top-4 right-4 flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.8 }}
                >
                  <Zap className="w-3 h-3" />
                  <span>Live connections</span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}