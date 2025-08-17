import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles, ArrowRight, Star, Zap } from 'lucide-react'

interface FinalCTASectionProps {
  isDark: boolean;
}

interface ConfettiPiece {
  id: number;
  x: number;
  y: number;
  rotation: number;
  color: string;
  type: 'circle' | 'square' | 'triangle' | 'node';
  delay: number;
}

export default function FinalCTASection({ isDark }: FinalCTASectionProps) {
  const [isGlowing, setIsGlowing] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)
  const [confetti, setConfetti] = useState<ConfettiPiece[]>([])

  const brandColors = ['#00CFF5', '#FFDE00', '#FF00A8']

  // Auto-trigger glow effect
  useEffect(() => {
    const interval = setInterval(() => {
      setIsGlowing(true)
      setTimeout(() => setIsGlowing(false), 2000)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  // Generate confetti
  const generateConfetti = () => {
    const pieces: ConfettiPiece[] = []
    
    // Generate 50 confetti pieces
    for (let i = 0; i < 50; i++) {
      pieces.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        rotation: Math.random() * 360,
        color: brandColors[Math.floor(Math.random() * brandColors.length)],
        type: ['circle', 'square', 'triangle', 'node'][Math.floor(Math.random() * 4)] as any,
        delay: Math.random() * 0.5
      })
    }
    
    setConfetti(pieces)
    setShowConfetti(true)
    
    // Clear confetti after animation
    setTimeout(() => {
      setShowConfetti(false)
      setConfetti([])
    }, 3000)
  }

  return (
    <section className="relative py-32 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Animated background dots */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle, ${isDark ? '#444' : '#666'} 1px, transparent 1px)`,
            backgroundSize: '30px 30px',
            animation: 'backgroundFloat 20s linear infinite'
          }}
        />
        
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary-400 rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              y: [-10, -30, -10],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      {/* Confetti Layer */}
      <AnimatePresence>
        {showConfetti && (
          <div className="absolute inset-0 pointer-events-none z-10">
            {confetti.map((piece) => (
              <motion.div
                key={piece.id}
                className="absolute"
                style={{
                  left: `${piece.x}%`,
                  top: `${piece.y}%`,
                }}
                initial={{ 
                  scale: 0, 
                  opacity: 0, 
                  y: 50,
                  rotate: 0
                }}
                animate={{ 
                  scale: [0, 1.2, 0.8, 1],
                  opacity: [0, 1, 1, 0],
                  y: [-100, -200, -300],
                  rotate: [0, piece.rotation, piece.rotation * 2],
                  x: [0, Math.random() * 40 - 20]
                }}
                exit={{ 
                  opacity: 0,
                  scale: 0
                }}
                transition={{
                  duration: 2.5,
                  delay: piece.delay,
                  ease: "easeOut"
                }}
              >
                {piece.type === 'node' ? (
                  <div 
                    className="w-4 h-3 rounded-sm shadow-sm"
                    style={{ backgroundColor: piece.color }}
                  />
                ) : piece.type === 'circle' ? (
                  <div 
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: piece.color }}
                  />
                ) : piece.type === 'triangle' ? (
                  <div 
                    className="w-0 h-0 border-l-2 border-r-2 border-b-4 border-l-transparent border-r-transparent"
                    style={{ borderBottomColor: piece.color }}
                  />
                ) : (
                  <div 
                    className="w-3 h-3"
                    style={{ backgroundColor: piece.color }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        )}
      </AnimatePresence>

      <div className="max-w-4xl mx-auto text-center relative z-20">
        {/* Header */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Start Mapping
            <br />
            <span className="bg-gradient-to-r from-primary-400 via-secondary-400 to-tertiary-400 bg-clip-text text-transparent">
              What Matters
            </span>
          </h2>
          
          <motion.p 
            className="text-2xl text-zinc-300 mb-4 font-light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Create your first board.
          </motion.p>
        </motion.div>

        {/* Three-step flow */}
        <motion.div 
          className="grid md:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Start with a single thought.</h3>
            <p className="text-zinc-400">One idea becomes a node</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">End with something bigger than you imagined.</h3>
            <p className="text-zinc-400">Watch your ideas connect and grow</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-tertiary-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Star className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">No downloads. No pressure.</h3>
            <p className="text-zinc-400">Just thinking—upgraded</p>
          </div>
        </motion.div>

        {/* Main CTA Button */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {/* Glowing ring effect */}
          <motion.div
            className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-500 via-secondary-500 to-tertiary-500 opacity-30 blur-xl"
            animate={{
              scale: isGlowing ? [1, 1.1, 1] : 1,
              opacity: isGlowing ? [0.3, 0.6, 0.3] : 0.3
            }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />

          {/* Main button */}
          <motion.button
            className="relative bg-gradient-to-r from-primary-500 via-secondary-500 to-tertiary-500 text-white font-bold text-2xl px-12 py-6 rounded-2xl shadow-2xl overflow-hidden group"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 25px 50px -12px rgba(0, 207, 245, 0.4)"
            }}
            whileTap={{ scale: 0.98 }}
            onClick={generateConfetti}
          >
            {/* Button shine effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
              initial={{ x: '-100%' }}
              whileHover={{ x: '200%' }}
              transition={{ duration: 0.6 }}
            />
            
            {/* Button content */}
            <div className="relative flex items-center justify-center gap-3">
              <span>Start a Board</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="w-7 h-7" />
              </motion.div>
            </div>

            {/* Ripple effect */}
            <motion.div
              className="absolute inset-0 bg-white/10 rounded-2xl"
              initial={{ scale: 0, opacity: 0 }}
              whileTap={{
                scale: 1,
                opacity: [0, 0.3, 0],
                transition: { duration: 0.3 }
              }}
            />
          </motion.button>

          {/* Floating action hint */}
          <motion.p 
            className="text-zinc-400 text-sm mt-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1 }}
          >
            Click for a surprise! 🎉
          </motion.p>
        </motion.div>

        {/* Secondary actions */}
        <motion.div 
          className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <a
            href="#"
            className="text-zinc-300 hover:text-white transition-colors duration-200 font-medium"
          >
            See Pro Features
          </a>
          <span className="text-zinc-600 hidden sm:block">•</span>
          <a
            href="#"
            className="text-zinc-300 hover:text-white transition-colors duration-200 font-medium"
          >
            Watch Demo Video
          </a>
          <span className="text-zinc-600 hidden sm:block">•</span>
          <a
            href="#"
            className="text-zinc-300 hover:text-white transition-colors duration-200 font-medium"
          >
            Join the Community
          </a>
        </motion.div>
      </div>

      {/* CSS for background animation */}
      <style jsx>{`
        @keyframes backgroundFloat {
          0% { transform: translateY(0px) translateX(0px); }
          33% { transform: translateY(-10px) translateX(5px); }
          66% { transform: translateY(5px) translateX(-5px); }
          100% { transform: translateY(0px) translateX(0px); }
        }
      `}</style>
    </section>
  )
}