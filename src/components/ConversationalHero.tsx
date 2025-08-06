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
    { speaker: 'nodal', text: "You're a node." },
    { speaker: 'user', text: "Touché. Well what am I?" },
    { speaker: 'nodal', text: "You can be a document. Or a task, or a list. Maybe an image." },
    { speaker: 'user', text: "An idea?" },
    { speaker: 'nodal', text: "Yep. You can connect them to other nodes." },
    { speaker: 'user', text: "...and then we hangout on a board, as ideas?" }, 
    { speaker: 'nodal', text: "Just sign in and start creating. Trust me - easier that way." },
    // { speaker: 'final', text: "Nodal helps you connect your ideas." }
  ]

  useEffect(() => {
    const timers: NodeJS.Timeout[] = []
    
    conversation.forEach((_, index) => {
      const timer = setTimeout(() => {
        setCurrentStep(index + 1)
      }, (index + 1) * 1500) // Each step appears after 1.2s
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
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: -50,
      transition: {
        duration: 0.4,
        ease: "easeInOut"
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
    <section 
      className="min-h-screen flex items-center justify-center px-4 md:px-8 lg:px-16 bg-white dark:bg-zinc-950 transition-colors duration-200 relative"
      style={{
        backgroundImage: `radial-gradient(circle, ${isDark ? '#666666' : '#cccccc'} 1px, transparent 1px)`,
        backgroundSize: '20px 20px',
        backgroundPosition: '0 0'
      }}
    >
      {/* Optional subtle overlay to tone down the dots */}
      <div className="absolute inset-0 bg-white/70 dark:bg-zinc-950/70 pointer-events-none" />
      
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 md:gap-12 lg:gap-32 items-center relative z-10">
        
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
          <p className="text-xl text-zinc-600 dark:text-white font-light">
            Collaborative mindmapping with AI
          </p>
          <div className="mt-6 flex gap-4">
          <a
            href="#"
            className="bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-semibold px-6 py-3 rounded-lg hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors duration-200"
          >
            Get Nodal Free
          </a>
          <a
            href="#"
            className="border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-white px-6 py-3 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors duration-200"
          >
            See Pro Features
          </a>
        </div>
        </motion.div>

        {/* Right Column - Conversation as Nodes */}
        <div className="flex flex-col items-center relative">
          {/* Chat bubbles as nodes */}
          <div className="space-y-12 relative w-full">
            <AnimatePresence mode="popLayout">
              {conversation.slice(0, currentStep).slice(-4).map((message, index) => {
                // Adjust index to be relative to the full conversation
                const actualIndex = Math.max(0, currentStep - 4) + index;
                if (message.speaker === 'final') {
                  return (
                    <motion.div
                      key={`final-${actualIndex}`}
                      className="text-center mt-12"
                      variants={bubbleVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                    >
                      <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white">
                        {message.text}
                      </h2>
                    </motion.div>
                  )
                }

                const isUser = message.speaker === 'user'

                return (
                  <div key={`node-${actualIndex}`} className="relative">
                    {/* Node bubble */}
                    <motion.div
                      className={`flex ${isUser ? 'justify-end' : 'justify-start'} relative`}
                      variants={bubbleVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                    >
                      {/* Connection handles */}
                      <div className="relative">
                        {/* The actual node/bubble */}
                        <div className={`
                          px-6 py-4 rounded-xl shadow-lg border-2 max-w-xs relative
                          ${isUser 
                            ? 'dark:text-white border-primary-400' 
                            : 'bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white border-zinc-200 dark:border-zinc-700'
                          }
                        `}>
                          <p className="text-sm md:text-base font-medium">{message.text}</p>
                        </div>

                        {/* Left handle */}
                        <motion.div
                          className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-zinc-400 dark:bg-zinc-500 rounded-full border-2 border-white dark:border-zinc-800"
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ delay: 0.4, duration: 0.3 }}
                        />
                        
                        {/* Right handle */}
                        <motion.div
                          className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-zinc-400 dark:bg-zinc-500 rounded-full border-2 border-white dark:border-zinc-800"
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ delay: 0.4, duration: 0.3 }}
                        />
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