import { motion } from 'framer-motion'
import { Database, ShareNetwork } from '@phosphor-icons/react'
import nobotSvg from '/nobot.svg'
import nobotLeft from '../assets/nobot-left.svg'

export default function MeetNobot() {
  return (
    <section className="py-24 md:pt-32 pb-16 transition-colors duration-200 mx-4 md:mx-8 lg:mx-16">
      <div className="max-w-7xl mx-auto text-center mb-12 relative">
        <motion.h2
          className="text-4xl md:text-5xl font-heading font-medium text-zinc-900 dark:text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          meet nobot
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl text-zinc-700 dark:text-zinc-300 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          we didn't just bolt-on a chatbot - Nobot is one with the board.
        </motion.p>

        <motion.img
          src={nobotLeft}
          alt="Nobot"
          className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-28 lg:w-40 pointer-events-none select-none"
          initial={{ x: 24, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
        />
      </div>

      {/* Reused Pillars layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {([
          {
            icon: (<img src={nobotSvg} alt="Nobot" className="w-12 h-12" />),
            title: 'board-aware intelligence',
            lines: ['Nobot understands your board’s structure, your goals, and your content. He connects dots across your nodes, analyzes attached docs, and thinks in context - not isolation.']
          },
          {
            icon: (<Database size={48} weight="duotone" />),
            title: 'node generation',
            lines: ['Turn ideas into structure instantly. Ask Nobot to “make nodes,” and it’ll generate organized thoughts, lists, or outlines that fit your board - not random AI spaghetti.']
          },
          {
            icon: (<ShareNetwork size={48} weight="duotone" />),
            title: 'thinking with a teammate',
            lines: ['AI that feels like a teammate. Bounce ideas, get fresh takes, ask quick questions, and expand your thinking - all without breaking flow.']
          }
        ] as { icon: React.ReactNode; title: string; lines: string[] }[]).map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: i * 0.05 }}
            className="rounded-xl border flex flex-col border-zinc-200 dark:border-zinc-800 p-6 bg-white/70 dark:bg-zinc-900/30 backdrop-blur-sm"
          >
            <div className="text-xl mb-3 md:mb-4 lg:mb-6 text-zinc-900 dark:text-zinc-600">{c.icon}</div>
            <div className="font-heading text-xl md:text-2xl lg:text-3xl mb-2 md:mb-3 lg:mb-4 text-zinc-900 dark:text-white">{c.title}</div>
            <div className="text-zinc-600 dark:text-zinc-300 text-base md:text-lg space-y-1">
              <p>{c.lines[0]}</p>
              {/* <p className="text-zinc-500 dark:text-zinc-400">{c.lines[1]}</p> */}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}


