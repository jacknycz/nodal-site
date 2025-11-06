import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from '@phosphor-icons/react'

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

    // Generate ~30% more confetti pieces (65)
    for (let i = 0; i < 65; i++) {
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
    <section className="relative py-32 md:py-48 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-white/10 via-white/10 to-primary-500/20 dark:from-gray-950/10 dark:via-gray-950/10 dark:to-zinc-950 overflow-hidden">
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
                    style={{ backgroundColor: piece.color, transform: 'scale(1.3)' }}
                  />
                ) : piece.type === 'circle' ? (
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: piece.color, transform: 'scale(1.3)' }}
                  />
                ) : piece.type === 'triangle' ? (
                  <div
                    className="w-0 h-0 border-l-2 border-r-2 border-b-4 border-l-transparent border-r-transparent"
                    style={{ borderBottomColor: piece.color, transform: 'scale(1.3)' }}
                  />
                ) : (
                  <div
                    className="w-3 h-3"
                    style={{ backgroundColor: piece.color, transform: 'scale(1.3)' }}
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
          <h2 className="text-5xl md:text-7xl font-medium font-heading text-white mb-6 leading-tight">
            if you made it this far...
            <br />
            <span className="bg-gradient-to-r from-primary-400 via-secondary-400 to-tertiary-400 bg-clip-text text-transparent">
              click the button
            </span>
          </h2>

          <motion.p
            className="text-2xl text-zinc-900 dark:text-zinc-300 mb-4 font-light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            or don't, it is free though - and most people think it's nifty at the very least.
          </motion.p>
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
            className="absolute inset-0 scale-y-200 rounded-full bg-radial from-primary-500 via-secondary-500/50 to-tertiary-500/20 opacity-20 blur-2xl"
            animate={{
              scale: isGlowing ? [.7, 1.1, .7] : .7,
              opacity: isGlowing ? [0.2, 0.6, 0.2] : 0.2
            }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />

          {/* Main button */}
          <motion.button
            className="relative cursor-pointer bg-gradient-to-r from-primary-500 via-secondary-500 to-tertiary-500 
            text-white font-bold text-2xl px-12 py-6 rounded-full shadow-2xl overflow-hidden group"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 25px 50px -12px rgba(0, 207, 245, 0.4)"
            }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              generateConfetti()
              window.setTimeout(() => {
                window.location.href = 'https://app.nodalapp.com'
              }, 1500)
            }}
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
              <span>start a board</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight weight="duotone" className="w-7 h-7" />
              </motion.div>
            </div>

            {/* Ripple effect */}
            {/* <motion.div
              className="absolute inset-0 bg-white/10 rounded-2xl"
              initial={{ scale: 0, opacity: 0 }}
              whileTap={{
                scale: 1,
                opacity: [0, 0.3, 0],
                transition: { duration: 0.3 }
              }}
            /> */}
          </motion.button>

          {/* Floating action hint */}
          <motion.p
            className="text-zinc-400 text-sm mt-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1 }}
          >
            the button makes confetti too
          </motion.p>
        </motion.div>
      </div>

      {/* CSS for background animation */}
      <style>{`
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