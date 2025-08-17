import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Users, MessageSquare, Lock, Wifi } from 'lucide-react'

interface CollaborationSectionProps {
  isDark: boolean;
}

interface Cursor {
  id: string;
  name: string;
  color: string;
  x: number;
  y: number;
}

export default function CollaborationSection({ isDark }: CollaborationSectionProps) {
  const [cursors, setCursors] = useState<Cursor[]>([])
  const [showComment, setShowComment] = useState(false)
  const [activeUsers, setActiveUsers] = useState(0)

  const collaborators = [
    { name: 'Sarah', color: '#00CFF5', avatar: 'S' },
    { name: 'Mike', color: '#FFDE00', avatar: 'M' },
    { name: 'Alex', color: '#FF00A8', avatar: 'A' }
  ]

  // Simulate live cursors moving around
  useEffect(() => {
    const interval = setInterval(() => {
      setCursors(prev => {
        const newCursors = collaborators.slice(0, Math.min(activeUsers + 1, 3)).map((user, index) => ({
          id: user.name,
          name: user.name,
          color: user.color,
          x: 50 + Math.sin(Date.now() / 1000 + index * 2) * 30 + Math.random() * 20,
          y: 50 + Math.cos(Date.now() / 1500 + index * 1.5) * 20 + Math.random() * 15
        }))
        return newCursors
      })
    }, 100)

    return () => clearInterval(interval)
  }, [activeUsers])

  // Auto-trigger collaboration features
  useEffect(() => {
    const timer1 = setTimeout(() => setActiveUsers(1), 1000)
    const timer2 = setTimeout(() => setActiveUsers(2), 2000)
    const timer3 = setTimeout(() => setActiveUsers(3), 3000)
    const timer4 = setTimeout(() => setShowComment(true), 4000)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
      clearTimeout(timer4)
    }
  }, [])

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-zinc-50 dark:bg-zinc-900 transition-colors duration-200">
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
              Collaborate in Real Time
            </motion.h2>
            
            <motion.p 
              className="text-2xl text-zinc-700 dark:text-zinc-200 mb-8 font-light"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Because great ideas rarely happen alone.
            </motion.p>

            <div className="space-y-6 mb-8">
              <motion.div 
                className="flex items-start gap-4"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-3 flex-shrink-0" />
                <p className="text-lg text-zinc-600 dark:text-zinc-300">
                  Share your board with a friend, a teammate, or your fantasy football league.
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
                  See live cursors, comment on nodes, and lock in updates with real‑time syncing.
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
                  Planning a trip? Drafting a novel? Working on a group project? You're covered.
                </p>
              </motion.div>
            </div>

            {/* Collaboration Features */}
            <motion.div 
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="flex items-center gap-3 p-3 bg-white dark:bg-zinc-800 rounded-lg border border-zinc-200 dark:border-zinc-700">
                <Users className="w-5 h-5 text-primary-500" />
                <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Live Presence</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white dark:bg-zinc-800 rounded-lg border border-zinc-200 dark:border-zinc-700">
                <MessageSquare className="w-5 h-5 text-secondary-500" />
                <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Comments</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white dark:bg-zinc-800 rounded-lg border border-zinc-200 dark:border-zinc-700">
                <Lock className="w-5 h-5 text-tertiary-500" />
                <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Smart Locking</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white dark:bg-zinc-800 rounded-lg border border-zinc-200 dark:border-zinc-700">
                <Wifi className="w-5 h-5 text-primary-500" />
                <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Real-time Sync</span>
              </div>
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
            <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-xl border border-zinc-200 dark:border-zinc-700 relative overflow-hidden min-h-[400px]">
              
              {/* Background dot pattern */}
              <div 
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `radial-gradient(circle, ${isDark ? '#666' : '#999'} 1px, transparent 1px)`,
                  backgroundSize: '20px 20px'
                }}
              />

              {/* Active Users Indicator */}
              <motion.div 
                className="absolute top-4 right-4 flex items-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <div className="flex -space-x-2">
                  <AnimatePresence>
                    {collaborators.slice(0, activeUsers).map((user, index) => (
                      <motion.div
                        key={user.name}
                        className="w-8 h-8 rounded-full border-2 border-white dark:border-zinc-800 flex items-center justify-center text-white text-xs font-bold shadow-md"
                        style={{ backgroundColor: user.color }}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        transition={{ delay: index * 0.2 }}
                      >
                        {user.avatar}
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
                <span className="text-xs text-zinc-500 dark:text-zinc-400">
                  {activeUsers} online
                </span>
              </motion.div>

              {/* Demo Board Content */}
              <div className="relative z-10 pt-8">
                <h3 className="text-lg font-semibold text-zinc-700 dark:text-zinc-200 mb-6 text-center">
                  Weekend Trip Planning
                </h3>

                {/* Demo Nodes */}
                <div className="relative">
                  <motion.div
                    className="absolute top-4 left-8 w-28 h-18 bg-primary-500 rounded-lg flex items-center justify-center shadow-lg"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.8 }}
                  >
                    <span className="text-white text-sm font-medium text-center px-2">
                      Where to Stay
                    </span>
                  </motion.div>

                  <motion.div
                    className="absolute top-4 right-8 w-28 h-18 bg-secondary-500 rounded-lg flex items-center justify-center shadow-lg"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 1.0 }}
                  >
                    <span className="text-white text-sm font-medium text-center px-2">
                      Activities
                    </span>
                  </motion.div>

                  <motion.div
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-28 h-18 bg-tertiary-500 rounded-lg flex items-center justify-center shadow-lg relative"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 1.2 }}
                  >
                    <span className="text-white text-sm font-medium text-center px-2">
                      Budget
                    </span>
                    
                    {/* Comment bubble */}
                    <AnimatePresence>
                      {showComment && (
                        <motion.div
                          className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-lg p-3 shadow-lg min-w-40"
                          initial={{ opacity: 0, y: 10, scale: 0.9 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.9 }}
                          transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        >
                          <div className="flex items-start gap-2">
                            <div 
                              className="w-5 h-5 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                              style={{ backgroundColor: collaborators[0].color }}
                            >
                              {collaborators[0].avatar}
                            </div>
                            <div>
                              <p className="text-xs font-medium text-zinc-700 dark:text-zinc-300">
                                {collaborators[0].name}
                              </p>
                              <p className="text-xs text-zinc-600 dark:text-zinc-400">
                                Should we cap it at $500?
                              </p>
                            </div>
                          </div>
                          {/* Arrow pointing down */}
                          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-white dark:border-t-zinc-900" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </div>

                {/* Live Cursors */}
                <div className="absolute inset-0 pointer-events-none">
                  <AnimatePresence>
                    {cursors.map((cursor) => (
                      <motion.div
                        key={cursor.id}
                        className="absolute transition-all duration-75 ease-out"
                        style={{
                          left: `${cursor.x}%`,
                          top: `${cursor.y}%`
                        }}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                      >
                        {/* Cursor SVG */}
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          className="drop-shadow-lg"
                        >
                          <path
                            d="M5.65376 12.3673H5.46026L5.31717 12.4976L0.500002 16.8829L0.500002 1.19841L11.7841 12.3673H5.65376Z"
                            fill={cursor.color}
                            stroke="white"
                            strokeWidth="1"
                          />
                        </svg>
                        
                        {/* Name tag */}
                        <motion.div
                          className="absolute top-6 left-2 bg-black/80 text-white text-xs px-2 py-1 rounded whitespace-nowrap"
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                        >
                          {cursor.name}
                        </motion.div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}