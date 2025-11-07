import { motion } from 'framer-motion'
import nobotLeft from '../assets/nobot-left.svg'
import videoContext from '../assets/search-and-zoom.mp4'
import videoGenerate from '../assets/right-click-superpowers.mp4'
import videoLinking from '../assets/nodal-test.mp4'
import videoNobot from '../assets/meet-nobot.mp4'

export default function AISection() {
  return (
    <section className="py-24 md:py-48 px-4 md:px-8 lg:px-16 transition-colors duration-200">
      <div className="max-w-6xl mx-auto flex items-start justify-between space-x-16">
        <div className="mb-16 flex flex-col items-start justify-start space-y-4">
          <div className="flex w-full space-x-6 md:space-x-8 justify-between items-end">
            <h2 className="text-3xl md:text-4xl font-medium font-heading text-zinc-900 dark:text-white">
              meet nobot! and look how well we hid this AI stuff
            </h2>

            <img src={nobotLeft} alt="Nobot" className="h-full object-cover w-16 md:w-24" />
          </div>
          
          <p className="text-xl text-zinc-600 dark:text-zinc-300">
          yes, nodal does cool AI stuff, but everyone’s doing that. we weren't even going to bring it up but our investor said we should.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary-500 to-blue-600 text-white p-8 rounded-2xl flex flex-col items-center justify-center">
            <h3 className="text-2xl font-medium font-heading mb-4">you're too smart for a catchy CTA!</h3>
            <p className="text-lg mb-6 opacity-90 max-w-2xl">
              just give it a try, it's free - and hit that feedback button if you do try it. seriously looking for thoughts and where it's screwing up. thanks!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#"
                className="bg-white text-primary-600 font-medium font-heading px-8 py-3 rounded-lg hover:bg-zinc-50 transition-colors duration-200"
              >
                Start Free Today
              </a>
              <a
                href="#"
                className="border border-white/30 text-white px-8 py-3 rounded-lg hover:bg-white/10 transition-colors duration-200"
              >
                See Pro Features (coming soon)
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Thought, evolved. */}
      <section id="ai" className="relative py-24 md:py-40">
        {/* subtle grid bg */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(24,24,27,0.08) 1px, transparent 1px)`,
            backgroundSize: '18px 18px'
          }}
        />

        {/* Intro moment */}
        <div className="relative max-w-5xl mx-auto text-center mb-20 md:mb-28">
          <div className="absolute -inset-x-8 -top-10 bottom-0 -z-10 overflow-hidden rounded-[3rem]">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0"
            >
              <video
                className="w-full h-full object-cover opacity-20"
                src={videoContext}
                autoPlay
                muted
                loop
                playsInline
              />
            </motion.div>
          </div>

          <motion.h2
            className="text-4xl md:text-6xl font-heading font-medium text-zinc-900 dark:text-white mb-6"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Thought, evolved.
          </motion.h2>
          <motion.p
            className="text-lg md:text-2xl text-zinc-700 dark:text-zinc-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
          >
            Nodal’s AI sees patterns in your ideas — and helps you grow them. It’s not another chat window. It’s a creative partner that lives inside your flow.
          </motion.p>
        </div>

        {/* Band 1: Context Awareness (60/40) */}
        <div className="relative max-w-7xl mx-auto grid md:grid-cols-5 gap-8 items-center mb-16 md:mb-28">
          <div className="md:col-span-3">
            <motion.h3
              className="text-2xl md:text-4xl font-heading font-medium text-zinc-900 dark:text-white mb-4"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Understands your boards, not just your words.
            </motion.h3>
            <motion.p
              className="text-zinc-700 dark:text-zinc-300 text-lg"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 }}
            >
              Nodal’s intelligence isn’t separate from your work — it’s woven into it. It knows where your ideas live, how they connect, and what might be missing.
            </motion.p>
          </div>
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="relative overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-lg"
            >
              <video className="w-full h-full" src={videoContext} autoPlay muted loop playsInline />
            </motion.div>
          </div>
        </div>

        {/* Band 2: Generative Flow (40/60 inverted) */}
        <div className="relative max-w-7xl mx-auto grid md:grid-cols-5 gap-8 items-center mb-16 md:mb-28">
          <div className="md:col-span-2 order-last md:order-first">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="relative overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-lg"
            >
              <video className="w-full h-full" src={videoGenerate} autoPlay muted loop playsInline />
            </motion.div>
          </div>
          <div className="md:col-span-3">
            <motion.h3
              className="text-2xl md:text-4xl font-heading font-medium text-zinc-900 dark:text-white mb-4"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              When you need a nudge, Nobot’s there.
            </motion.h3>
            <motion.p
              className="text-zinc-700 dark:text-zinc-300 text-lg"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 }}
            >
              Hit a wall? Select a few nodes and ask Nobot to summarize, expand, or spark new branches. Sometimes all you need is a small push — Nodal gives you one that actually makes sense.
            </motion.p>
          </div>
        </div>

        {/* Band 3: Intelligent Linking - full width media with copy overlay */}
        <div className="relative max-w-7xl mx-auto mb-16 md:mb-28">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-xl"
          >
            <video className="w-full h-full" src={videoLinking} autoPlay muted loop playsInline />
            <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-white/30 to-transparent dark:from-zinc-950/80 dark:via-zinc-950/30" />
            <div className="absolute inset-x-0 bottom-0 p-8 md:p-12">
              <h3 className="text-2xl md:text-4xl font-heading font-medium text-zinc-900 dark:text-white mb-3">
                Find connections you didn’t know existed.
              </h3>
              <p className="text-lg text-zinc-700 dark:text-zinc-300 max-w-3xl">
                Nodal helps surface hidden relationships between your thoughts — weaving context and creativity into something that feels effortless.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Band 6: Nobot Spotlight */}
        <div className="relative -mx-4 md:mx-0 mb-16 md:mb-28">
          <div className="relative max-w-7xl mx-auto overflow-hidden rounded-3xl">
            <div className="absolute inset-0 bg-zinc-950" />
            <video className="relative w-full h-full opacity-30" src={videoNobot} autoPlay muted loop playsInline />
            <div className="absolute inset-0 flex items-center justify-center p-8">
              <div className="text-center max-w-3xl">
                <h2 className="text-3xl md:text-5xl font-heading font-medium text-white mb-4">
                  Meet Nobot — the shape of Nodal’s mind.
                </h2>
                <p className="text-lg text-white/80 mb-6">
                  Nobot is Nodal’s quiet thinker — always around, never in the way. You’ll see it spark when ideas connect, pulse when it’s processing, and chime in when inspiration stalls. It’s not here to talk at you. It’s here to think with you.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary-600 text-white font-heading font-medium hover:bg-primary-500 transition-colors"
                >
                  Meet Nobot
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}


