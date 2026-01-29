import { motion } from 'framer-motion'
import { Database, ShareNetwork } from '@phosphor-icons/react'
import nobotSvg from '/nobot.svg'
import nobotLeft from '../assets/nobot-left.svg'

export default function MeetNobot() {
  return (
    <section className="py-24 md:pt-32 pb-16 transition-colors duration-200 mx-4 md:mx-8 lg:mx-16">
      <div className="max-w-7xl mx-auto text-center mb-12 relative">
        {/* Subtle wash */}
        <div
          aria-hidden
          className="absolute -inset-x-6 -inset-y-8 -z-10 opacity-60 blur-3xl"
          style={{
            background:
              'radial-gradient(40rem 40rem at 20% 30%, rgba(0, 207, 245, 0.16), transparent 55%), radial-gradient(34rem 34rem at 80% 20%, rgba(255, 0, 168, 0.12), transparent 55%), radial-gradient(38rem 38rem at 55% 85%, rgba(255, 222, 0, 0.10), transparent 60%)'
          }}
        />

        <motion.div
          className="inline-flex items-center gap-2 rounded-full border border-zinc-200/70 bg-white/60 px-3 py-1 text-xs font-semibold tracking-wide text-zinc-700 backdrop-blur-sm dark:border-zinc-800/70 dark:bg-zinc-950/30 dark:text-zinc-300 mb-5"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-primary-500" />
          board-aware AI assistant
        </motion.div>
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
          Nobot isn’t a chatbox you have to babysit - he’s part of the board. He understands your context, helps you shape structure, and keeps your thinking moving forward.
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

        <motion.div
          className="mt-8 flex items-center justify-center gap-3 flex-wrap"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          <a
            href="https://app.nodalapp.com/"
            className="bg-primary-600 hover:bg-primary-500 text-white text-center font-semibold font-heading px-6 py-3 rounded-full transition-colors duration-200 shadow-lg shadow-primary-600/20"
          >
            try nobot
          </a>
          <span className="text-xs text-zinc-500 dark:text-zinc-400">
            (he’s helpful. mostly.)
          </span>
        </motion.div>
      </div>

      {/* Reused Pillars layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {([
          {
            icon: (<img src={nobotSvg} alt="Nobot robot icon" className="w-12 h-12" />),
            title: 'board-aware intelligence',
            lines: ['Nobot understands your board’s structure, goals, and content — and can connect dots across your nodes instead of answering in isolation.']
          },
          {
            icon: (<Database size={48} weight="duotone" />),
            title: 'node generation',
            lines: ['Turn raw thoughts into clean structure. Ask Nobot to “make nodes” and get organized branches that actually match your board.']
          },
          {
            icon: (<ShareNetwork size={48} weight="duotone" />),
            title: 'thinking with a teammate',
            lines: ['Bounce ideas, get fresh angles, summarize a cluster, or tighten a narrative — without leaving your flow.']
          }
        ] as { icon: React.ReactNode; title: string; lines: string[] }[]).map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: i * 0.05 }}
            className="rounded-2xl border flex flex-col border-zinc-200/80 dark:border-zinc-800/80 p-6 bg-white/70 dark:bg-zinc-950/30 backdrop-blur-sm shadow-lg shadow-black/5 dark:shadow-black/40"
          >
            <div className="text-xl mb-4 text-zinc-900 dark:text-zinc-500">{c.icon}</div>
            <div className="font-heading text-xl md:text-2xl lg:text-3xl mb-3 text-zinc-900 dark:text-white">{c.title}</div>
            <div className="text-zinc-600 dark:text-zinc-300 text-base md:text-lg space-y-1 leading-relaxed">
              <p>{c.lines[0]}</p>
              {/* <p className="text-zinc-500 dark:text-zinc-400">{c.lines[1]}</p> */}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}


