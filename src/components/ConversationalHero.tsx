import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import NodalBlackLogo from '../assets/nodal-black.svg'
import NodalWhiteLogo from '../assets/nodal-white.svg'

interface ConversationalHeroProps {
  isDark: boolean;
}

export default function ConversationalHero({ isDark }: ConversationalHeroProps) {
  const [currentStep, setCurrentStep] = useState(0)

  const conversation = [
    { speaker: 'user', text: "What's a node?" },
    { speaker: 'nodal', text: "Your idea, visualized." },
    { speaker: 'user', text: "Like a sticky note?" },
    { speaker: 'nodal', text: "Better. You can connect them." },
    { speaker: 'user', text: "Oh! That's actually useful." },
    // { speaker: 'final', text: "Nodal helps you connect your ideas." }
  ]

  useEffect(() => {
    const timers: NodeJS.Timeout[] = []
    
    conversation.forEach((_, index) => {
      const timer = setTimeout(() => {
        setCurrentStep(index + 1)
      }, (index + 1) * 1200) // Each step appears after 1.2s
      timers.push(timer)
    })

    return () => timers.forEach(clearTimeout)
  }, [])

  const bubbleVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25
      }
    }
  }

  const nodeVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 20,
        delay: 0.3
      }
    }
  }

  const connectionVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, 
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
        delay: 0.5
      }
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-4 md:px-8 lg:px-16 bg-white dark:bg-zinc-950 transition-colors duration-200">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Column - Brand */}
        <motion.div 
          className="flex flex-col items-start space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="max-w-md">
            <img
              src={isDark ? NodalWhiteLogo : NodalBlackLogo}
              alt="Nodal Logo"
              className="transition-opacity duration-200"
            />
          </div>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 font-light">
            Your ideas, connected.
          </p>
        </motion.div>

        {/* Right Column - Conversation as Nodes */}
        <div className="flex flex-col items-center relative">
          {/* Chat bubbles as nodes with connections */}
          <div className="space-y-6 relative w-full">
            <AnimatePresence>
              {conversation.slice(0, currentStep).map((message, index) => {
                if (message.speaker === 'final') {
                  return (
                    <motion.div
                      key={index}
                      className="text-center mt-12"
                      variants={bubbleVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white">
                        {message.text}
                      </h2>
                    </motion.div>
                  )
                }

                const isUser = message.speaker === 'user'
                const showConnection = index > 0 && conversation.slice(0, currentStep).length > index

                return (
                  <div key={index} className="relative">
                    {/* Connection line to previous node */}
                    {showConnection && (
                      <motion.div
                        className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                      >
                        <svg width="60" height="24" className="overflow-visible">
                          <motion.path
                            d={`M 30 0 Q ${isUser ? 45 : 15} 12 30 24`}
                            stroke={isDark ? "#6b7280" : "#4b5563"}
                            strokeWidth="2"
                            strokeDasharray="4 4"
                            fill="none"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                          />
                        </svg>
                      </motion.div>
                    )}

                    {/* Node bubble */}
                    <motion.div
                      className={`flex ${isUser ? 'justify-end' : 'justify-start'} relative`}
                      variants={bubbleVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      {/* Connection handles */}
                      <div className="relative">
                        {/* Left handle */}
                        <motion.div
                          className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-zinc-400 dark:bg-zinc-500 rounded-full border-2 border-white dark:border-zinc-800"
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ delay: 0.4, duration: 0.3 }}
                        />
                        
                        {/* Right handle */}
                        <motion.div
                          className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-zinc-400 dark:bg-zinc-500 rounded-full border-2 border-white dark:border-zinc-800"
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ delay: 0.4, duration: 0.3 }}
                        />

                        {/* The actual node/bubble */}
                        <div className={`
                          px-6 py-4 rounded-xl shadow-lg border-2 max-w-xs
                          ${isUser 
                            ? 'bg-primary-500 text-white border-primary-400 rounded-br-md' 
                            : 'bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white border-zinc-200 dark:border-zinc-700 rounded-bl-md'
                          }
                        `}>
                          <p className="text-sm md:text-base font-medium">{message.text}</p>
                        </div>
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