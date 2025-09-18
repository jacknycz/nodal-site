import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface ConversationalNodesProps {
  isDark: boolean;
}

export default function ConversationalNodes({ isDark }: ConversationalNodesProps) {
  const [currentStep, setCurrentStep] = useState(0)

  const conversation = [
    { speaker: 'user', text: "What's a node?" },
    { speaker: 'nodal', text: "You're a node." },
    { speaker: 'user', text: "Touché. Well what am I?" },
    { speaker: 'nodal', text: "You can be a document. Or a task, or a list. Maybe an image." },
    { speaker: 'user', text: "An idea?" },
    { speaker: 'nodal', text: "Yep. You can connect them to other nodes." },
    { speaker: 'user', text: "...and then we hangout on a board, as ideas?" },
    { speaker: 'nodal', text: "Just sign up and start creating. It's free! (pro has some cool stuff coming though). Trust me - easier that way." },
  ]

  useEffect(() => {
    const timers: number[] = []
    conversation.forEach((_, index) => {
      const timer = setTimeout(() => setCurrentStep(index + 1), (index + 1) * 1500)
      timers.push(timer)
    })
    return () => timers.forEach(clearTimeout)
  }, [])

  const bubbleVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring' as const, stiffness: 300, damping: 25 } },
    exit: { opacity: 0, scale: 0.8, y: -50, transition: { duration: 0.4, ease: 'easeInOut' as const } }
  }

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-white dark:bg-zinc-950 transition-colors duration-200">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center relative">
          <div className="space-y-12 relative w-full">
            <AnimatePresence mode="popLayout">
              {conversation.slice(0, currentStep).slice(-4).map((message, index) => {
                const actualIndex = Math.max(0, currentStep - 4) + index
                const isUser = message.speaker === 'user'
                return (
                  <div key={`node-${actualIndex}`} className="relative">
                    <motion.div
                      className={`flex ${isUser ? 'justify-end' : 'justify-start'} relative`}
                      variants={bubbleVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                    >
                      <div className="relative">
                        <div className={`
                          px-6 py-4 rounded-xl shadow-lg border-2 max-w-xs relative
                          ${isUser
                            ? 'dark:text-white border-primary-400'
                            : 'bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white border-zinc-200 dark:border-zinc-700'
                          }
                        `}>
                          <p className="text-sm md:text-base font-medium">{message.text}</p>
                        </div>
                        <motion.div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-zinc-400 dark:bg-zinc-500 rounded-full border-2 border-white dark:border-zinc-800" initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.4, duration: 0.3 }} />
                        <motion.div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-zinc-400 dark:bg-zinc-500 rounded-full border-2 border-white dark:border-zinc-800" initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.4, duration: 0.3 }} />
                      </div>
                    </motion.div>
                  </div>
                )
              })}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}


