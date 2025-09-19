import { motion } from 'framer-motion'
import { ChatCircle, Sparkle, Brain, Lightning } from '@phosphor-icons/react'
import meetNobotVideo from '../assets/meet-nobot.mp4'

interface AIIntegrationSectionProps {
  isDark: boolean;
}

export default function AIIntegrationSection({ isDark: _isDark }: AIIntegrationSectionProps) {
  // Video-focused variant; demo state removed

  const aiFeatures = [
    { icon: Sparkle, text: 'ask questions', delay: 0 },
    { icon: ChatCircle, text: 'generate new nodes', delay: 0.2 },
    { icon: Brain, text: 'chat about the board - your docs, ideas, whatever', delay: 0.4 },
    { icon: Lightning, text: 'brainstorm your next move', delay: 0.6 },
    { icon: Brain, text: 'or reorganize your mess', delay: 0.8 }
  ]

  // (demo timers removed)

  return (
    <section className="relative py-20 px-4 md:px-8 lg:px-16 bg-white dark:bg-zinc-950 transition-colors duration-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - Content */}
          <div>
            <motion.h2 
              className="text-4xl md:text-5xl font-medium font-heading text-zinc-900 dark:text-white mb-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              meet Nobot
            </motion.h2>
            
            <motion.p 
              className="text-2xl text-zinc-700 dark:text-zinc-200 mb-8 font-light"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              look how well the AI section is hidden
            </motion.p>

            <motion.p 
              className="text-lg text-zinc-600 dark:text-zinc-300 mb-8"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              The whole point of the board is to help you think. Nobot is here to help you think better. So we'll skip all the AI BS say he's just a chatbot, but right click on the board and generate some nodes and Nobot can do some pretty cool stuff. It's basically mind reading, but with better boundaries.
            </motion.p>

            <div className="space-y-4 mb-8">
              {aiFeatures.map((feature) => (
                <motion.div 
                  key={feature.text}
                  className="flex items-center gap-4 group"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 + feature.delay }}
                >
                  <div className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center group-hover:bg-primary-400 transition-colors duration-200">
                    <feature.icon className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-lg text-zinc-600 dark:text-zinc-300 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors duration-200">
                    {feature.text}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <p className="text-lg text-zinc-600 dark:text-zinc-300">
                The AI sees your full board, your current focus, and helps in context — no copy‑pasting needed.
              </p>
              <p className="text-lg text-zinc-600 dark:text-zinc-300">
                Yes, it's basically mind‑reading <span className="text-primary-500 font-medium">(but with better boundaries)</span>.
              </p>
            </motion.div>
          </div>

          {/* Right Column - Interactive Demo */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* <video
              src={meetNobotVideo}
              muted
              loop
              autoPlay
              playsInline
              className="w-full h-64 md:h-80 lg:h-96 rounded-2xl object-cover border border-zinc-200 dark:border-zinc-700 shadow-xl"
            /> */}
          </motion.div>
        </div>
      </div>
      {/* Decorative Nobot in bottom-left */}
      <img
        src="/nobot-body.svg"
        alt="Nobot"
        className="pointer-events-none hidden md:block absolute right-4 bottom-0 w-36 transform scale-x-[-1]"
      />
    </section>
  )
}