import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, Sparkles, Brain, Zap, Eye, ChevronRight } from 'lucide-react'

interface AIIntegrationSectionProps {
  isDark: boolean;
}

export default function AIIntegrationSection({ isDark }: AIIntegrationSectionProps) {
  const [selectedNode, setSelectedNode] = useState(false)
  const [showChat, setShowChat] = useState(false)
  const [currentMessage, setCurrentMessage] = useState(0)
  const [showTyping, setShowTyping] = useState(false)

  const chatMessages = [
    { type: 'user', text: 'Help me expand on "sustainable energy"' },
    { type: 'ai', text: 'I can see you\'re exploring energy solutions! Let me suggest some connected ideas...' },
    { type: 'ai', text: 'How about: Solar panel efficiency, Wind farm locations, Battery storage tech, and Policy frameworks?' }
  ]

  const aiFeatures = [
    { icon: Sparkles, text: 'generate new ideas', delay: 0 },
    { icon: MessageCircle, text: 'ask clarifying questions', delay: 0.2 },
    { icon: Brain, text: 'expand on a topic', delay: 0.4 },
    { icon: Zap, text: 'or brainstorm your next move', delay: 0.6 }
  ]

  // Auto-trigger the demo sequence
  useEffect(() => {
    const timer1 = setTimeout(() => setSelectedNode(true), 1000)
    const timer2 = setTimeout(() => setShowChat(true), 2000)
    const timer3 = setTimeout(() => setCurrentMessage(1), 3000)
    const timer4 = setTimeout(() => setShowTyping(true), 3800)
    const timer5 = setTimeout(() => {
      setShowTyping(false)
      setCurrentMessage(2)
    }, 5000)
    const timer6 = setTimeout(() => setShowTyping(true), 5800)
    const timer7 = setTimeout(() => {
      setShowTyping(false)
      setCurrentMessage(3)
    }, 7000)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
      clearTimeout(timer4)
      clearTimeout(timer5)
      clearTimeout(timer6)
      clearTimeout(timer7)
    }
  }, [])

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-white dark:bg-zinc-950 transition-colors duration-200">
      <div className="max-w-7xl mx-auto">
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
              Think with Nodal
            </motion.h2>
            
            <motion.p 
              className="text-2xl text-zinc-700 dark:text-zinc-200 mb-8 font-light"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Your co‑thinker, right in the canvas.
            </motion.p>

            <motion.p 
              className="text-lg text-zinc-600 dark:text-zinc-300 mb-8"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Tap into Nodal's built‑in AI to:
            </motion.p>

            <div className="space-y-4 mb-8">
              {aiFeatures.map((feature, index) => (
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
            <div className="bg-zinc-100 dark:bg-zinc-800 rounded-2xl p-6 shadow-xl border border-zinc-200 dark:border-zinc-700 relative overflow-hidden min-h-[400px]">
              
              {/* Background dot pattern */}
              <div 
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `radial-gradient(circle, ${isDark ? '#666' : '#999'} 1px, transparent 1px)`,
                  backgroundSize: '20px 20px'
                }}
              />

              {/* Demo Board */}
              <div className="relative z-10">
                {/* Board Title */}
                <div className="text-center mb-6">
                  <h3 className="text-lg font-semibold text-zinc-700 dark:text-zinc-200">Climate Solutions Board</h3>
                </div>

                {/* Demo Nodes */}
                <div className="relative">
                  {/* Central Node - Selected */}
                  <motion.div
                    className={`
                      absolute top-8 left-1/2 transform -translate-x-1/2 w-32 h-20 rounded-xl flex items-center justify-center shadow-lg cursor-pointer transition-all duration-300
                      ${selectedNode 
                        ? 'bg-primary-500 ring-4 ring-primary-200 dark:ring-primary-800 scale-105' 
                        : 'bg-secondary-500 hover:bg-secondary-400'
                      }
                    `}
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                    onClick={() => setSelectedNode(!selectedNode)}
                  >
                    <span className="text-white text-sm font-medium text-center px-2">
                      Sustainable Energy
                    </span>
                    {selectedNode && (
                      <motion.div
                        className="absolute -top-2 -right-2 w-6 h-6 bg-primary-400 rounded-full flex items-center justify-center"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        <Eye className="w-3 h-3 text-white" />
                      </motion.div>
                    )}
                  </motion.div>

                  {/* Other context nodes */}
                  <motion.div
                    className="absolute top-0 left-4 w-24 h-16 bg-zinc-400 dark:bg-zinc-600 rounded-lg flex items-center justify-center shadow-md"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.7 }}
                  >
                    <span className="text-white text-xs text-center">Climate Change</span>
                  </motion.div>

                  <motion.div
                    className="absolute top-0 right-4 w-24 h-16 bg-zinc-400 dark:bg-zinc-600 rounded-lg flex items-center justify-center shadow-md"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.9 }}
                  >
                    <span className="text-white text-xs text-center">Green Tech</span>
                  </motion.div>

                  {/* Highlight connections when node is selected */}
                  {selectedNode && (
                    <>
                      <motion.div
                        className="absolute top-8 left-16 w-8 h-0.5 bg-primary-400"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ delay: 1.5, duration: 0.5 }}
                      />
                      <motion.div
                        className="absolute top-8 right-16 w-8 h-0.5 bg-primary-400"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ delay: 1.7, duration: 0.5 }}
                      />
                    </>
                  )}
                </div>
              </div>

              {/* Chat Panel - Slides in from right */}
              <AnimatePresence>
                {showChat && (
                  <motion.div
                    className="absolute top-0 right-0 w-72 h-full bg-white dark:bg-zinc-900 border-l border-zinc-200 dark:border-zinc-700 rounded-r-2xl shadow-xl"
                    initial={{ x: '100%' }}
                    animate={{ x: 0 }}
                    exit={{ x: '100%' }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  >
                    {/* Chat Header */}
                    <div className="p-4 border-b border-zinc-200 dark:border-zinc-700">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                          <Brain className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-zinc-900 dark:text-white text-sm">Nodal AI</h4>
                          <p className="text-xs text-zinc-500 dark:text-zinc-400">Context-aware assistant</p>
                        </div>
                      </div>
                    </div>

                    {/* Chat Messages */}
                    <div className="p-4 space-y-3 h-full overflow-hidden">
                      <AnimatePresence>
                        {chatMessages.slice(0, currentMessage).map((message, index) => (
                          <motion.div
                            key={index}
                            className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                            initial={{ opacity: 0, y: 20, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ 
                              type: "spring", 
                              stiffness: 500, 
                              damping: 30,
                              delay: index * 0.1 
                            }}
                          >
                            <div className={`
                              max-w-[80%] px-3 py-2 rounded-2xl text-sm
                              ${message.type === 'user' 
                                ? 'bg-primary-500 text-white rounded-br-md' 
                                : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white rounded-bl-md'
                              }
                            `}>
                              {message.text}
                            </div>
                          </motion.div>
                        ))}
                      </AnimatePresence>

                      {/* Typing indicator */}
                      <AnimatePresence>
                        {showTyping && (
                          <motion.div
                            className="flex justify-start"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                          >
                            <div className="bg-zinc-100 dark:bg-zinc-800 px-4 py-3 rounded-2xl rounded-bl-md">
                              <div className="flex space-x-1">
                                <motion.div
                                  className="w-2 h-2 bg-zinc-400 rounded-full"
                                  animate={{ y: [0, -4, 0] }}
                                  transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                                />
                                <motion.div
                                  className="w-2 h-2 bg-zinc-400 rounded-full"
                                  animate={{ y: [0, -4, 0] }}
                                  transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                                />
                                <motion.div
                                  className="w-2 h-2 bg-zinc-400 rounded-full"
                                  animate={{ y: [0, -4, 0] }}
                                  transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                                />
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Click hint */}
              {!selectedNode && (
                <motion.div
                  className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.2 }}
                >
                  <span>Click the node to see AI in action</span>
                  <ChevronRight className="w-3 h-3" />
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}