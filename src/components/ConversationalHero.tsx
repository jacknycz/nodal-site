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

        {/* Right Column - Conversation */}
        <div className="flex flex-col">
          {/* Chat bubbles */}
          <div className="space-y-4 mb-8">
            <AnimatePresence>
              {conversation.slice(0, currentStep).map((message, index) => {
                if (message.speaker === 'final') {
                  return (
                    <motion.div
                      key={index}
                      className="text-center mt-8"
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
                return (
                  <motion.div
                    key={index}
                    className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}
                    variants={bubbleVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <div className={`
                      max-w-xs px-4 py-3 rounded-2xl shadow-sm
                      ${isUser 
                        ? 'bg-primary-500 text-white rounded-br-md' 
                        : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white rounded-bl-md'
                      }
                    `}>
                      <p className="text-sm md:text-base">{message.text}</p>
                    </div>
                  </motion.div>
                )
              })}
            </AnimatePresence>
          </div>

          {/* Visual demonstration */}
          <div className="flex justify-center mt-4">
            <svg width="200" height="150" viewBox="0 0 200 150">
              {/* First node */}
              {currentStep >= 2 && (
                <motion.circle
                  cx="50"
                  cy="60"
                  r="20"
                  fill={isDark ? "#3b82f6" : "#2563eb"}
                  variants={nodeVariants}
                  initial="hidden"
                  animate="visible"
                />
              )}
              
              {/* Second node */}
              {currentStep >= 4 && (
                <motion.circle
                  cx="150"
                  cy="90"
                  r="20"
                  fill={isDark ? "#10b981" : "#059669"}
                  variants={nodeVariants}
                  initial="hidden"
                  animate="visible"
                />
              )}
              
              {/* Connection line */}
              {currentStep >= 4 && (
                <motion.path
                  d="M 70 60 Q 110 50 130 90"
                  stroke={isDark ? "#6b7280" : "#4b5563"}
                  strokeWidth="2"
                  fill="none"
                  variants={connectionVariants}
                  initial="hidden"
                  animate="visible"
                />
              )}
              
              {/* Third node for cluster effect */}
              {currentStep >= 5 && (
                <motion.circle
                  cx="100"
                  cy="30"
                  r="15"
                  fill={isDark ? "#f59e0b" : "#d97706"}
                  variants={nodeVariants}
                  initial="hidden"
                  animate="visible"
                />
              )}
              
              {/* Additional connections */}
              {currentStep >= 5 && (
                <>
                  <motion.path
                    d="M 65 50 Q 80 40 85 30"
                    stroke={isDark ? "#6b7280" : "#4b5563"}
                    strokeWidth="2"
                    fill="none"
                    variants={connectionVariants}
                    initial="hidden"
                    animate="visible"
                  />
                  <motion.path
                    d="M 115 30 Q 130 60 135 85"
                    stroke={isDark ? "#6b7280" : "#4b5563"}
                    strokeWidth="2"
                    fill="none"
                    variants={connectionVariants}
                    initial="hidden"
                    animate="visible"
                  />
                </>
              )}
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}