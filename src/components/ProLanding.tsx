import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

import videoSearchAndZoom from '../assets/search-and-zoom.mp4'
import videoRightClickSuperpowers from '../assets/right-click-superpowers.mp4'
import videoWriteWithConfidence from '../assets/write-with-confidence.mp4'
import proCollab from '../assets/pro-collab.png'
import proStorage from '../assets/pro-storage.png'
import proAI from '../assets/pro-ai.png'
import nobotSvg from '/nobot.svg'
import { Database, ShareNetwork } from '@phosphor-icons/react'

const callouts = [
  { title: 'AI That Learns You', copy: 'Persistent board memory, tone customization, and reasoning depth that adapts over time.', video: videoWriteWithConfidence },
  { title: 'Infinite Canvas Performance', copy: 'Optimized rendering lets you build sprawling boards with zero lag.', video: videoSearchAndZoom },
  { title: 'Pro Integrations', copy: 'Export to Notion, Markdown, or PDF. Webhooks for advanced automation.', video: videoRightClickSuperpowers },
  { title: 'Privacy by Design', copy: 'Your keys, your data, your billing. Always in your control.', video: videoSearchAndZoom },
]

export default function ProLanding() {
  const [, setCarouselIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setCarouselIndex((i) => (i + 1) % callouts.length), 5000)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="w-full" id="pro">
      {/* Entry / Hero */}
      <div className="relative py-28 md:pt-36 md:pb-16 lg:pt-48 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-transparent to-black text-white">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-5xl mx-auto text-center"
        >
          <div className="text-primary-300/80 font-heading text-sm tracking-wide mb-3">Nodal Pro</div>
          <h2 className="font-heading text-3xl md:text-5xl font-medium">the mind map, upgraded</h2>
          <p className="mt-4 text-lg md:text-xl text-zinc-300 max-w-3xl mx-auto">Invite your friends, share your boards, and co-edit live. Faster AI, more power, resources and tools for thinkers who don’t stop at “idea.”</p>
          <p className="mt-2 text-zinc-400">It's Nodal with your friends and your files.</p>
          <div className="mt-8 flex items-center justify-center gap-4 flex-wrap">
            <a href="https://app.nodalapp.com/profile" className="bg-primary-600 hover:bg-primary-500 text-white font-heading px-6 py-3 rounded-full transition-colors">Go Pro Now</a>
          </div>
        </motion.div>
      </div>

      {/* Feature Bands (expanded, alternating layout) */}
      <div className="bg-black text-white px-4 md:px-8 lg:px-16 py-20">
        <div className="max-w-7xl mx-auto space-y-20 md:space-y-32">

          {/* Band 1: Real Collaboration (text left, image right) */}
          <div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center border border-gray-900 rounded-2xl p-6 bg-gray-950/40"
            style={{
              backgroundImage: `radial-gradient(circle, #222 1px, transparent 1px)`,
              backgroundSize: '20px 20px',
              backgroundPosition: '0 0'
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex flex-col lg:gap-4 md:px-8 lg:px-16">
                <div className="flex items-center gap-3 mb-3 text-primary-300/80">
                  <ShareNetwork size={28} weight="duotone" />
                  <span className="text-sm tracking-wide">Real Collaboration</span>
                </div>
                <h3 className="font-heading text-2xl md:text-5xl mb-3">idea together.</h3>
                <p className="text-zinc-300 text-lg">Invite teammates, share boards, and co-edit live. Assign tasks and keep everyone in the loop.</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="relative"
            >
              <div className="flex items-center justify-center py-6">
                <img src={proCollab} alt="Collaboration preview" className="w-full h-full object-contain p-6" />
              </div>
            </motion.div>
          </div>

          {/* Band 2: More Power (image left, text right) */}
          <div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center border border-gray-900 rounded-2xl p-6 bg-gray-950/40"
            style={{
              backgroundImage: `radial-gradient(circle, #222 1px, transparent 1px)`,
              backgroundSize: '20px 20px',
              backgroundPosition: '0 0'
            }}
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="flex items-center justify-center py-6 lg:py-16">
                <img src={proStorage} alt="Performance preview" className="w-full h-full object-contain p-6" />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.05 }}
            >
              <div className="flex flex-col lg:gap-4 md:px-8 lg:px-16">
                <div className="flex items-center gap-3 mb-3 text-primary-300/80">
                  <Database size={28} weight="duotone" />
                  <span className="text-sm tracking-wide">More Power</span>
                </div>
                <h3 className="font-heading text-2xl md:text-5xl mb-3">idea bigger.</h3>
                <p className="text-zinc-300 text-lg">Unlimited boards, 100k AI tokens per month, 10gb of storage. More storage, more power.</p>
              </div>
            </motion.div>
          </div>

          {/* Band 3: Smarter AI (text left, image right) */}
          <div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center border border-gray-900 rounded-2xl p-6 bg-gray-950/40"
            style={{
              backgroundImage: `radial-gradient(circle, #222 1px, transparent 1px)`,
              backgroundSize: '20px 20px',
              backgroundPosition: '0 0'
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex flex-col lg:gap-4 md:px-8 lg:px-16">
                <div className="flex items-center gap-3 mb-3 text-primary-300/80">
                  <img src={nobotSvg} alt="Nobot" className="w-7 h-7" />
                  <span className="text-sm tracking-wide">Smarter AI</span>
                </div>
                <h3 className="font-heading text-2xl md:text-5xl mb-3">idea deeper.</h3>
                <p className="text-zinc-300 text-lg">The latest models, custom personality sliders, and per-board memory. More options, more integrations.</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="relative"
            >
              <div className="flex items-center justify-center py-6">
                <img src={proAI} alt="Smarter AI preview" className="w-full h-full object-contain p-6" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Tabs: For Every Kind of Thinker */}
      {/* <div className="bg-gradient-to-b from-black to-zinc-950 text-white px-4 md:px-8 lg:px-16 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h3 className="font-heading text-3xl md:text-4xl">For Every Kind of Thinker</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
            <div role="tablist" aria-orientation="vertical" className="space-y-2">
              {tabs.map((t) => {
                const isActive = t.key === activeTab
                const tabId = `${baseId}-pro-tab-${t.key}`
                const panelId = `${baseId}-pro-panel-${t.key}`
                return (
                  <button
                    key={t.key}
                    id={tabId}
                    aria-controls={panelId}
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveTab(t.key)}
                    className={`w-full text-left rounded-xl border px-4 py-3 transition-colors cursor-pointer ${isActive ? 'border-zinc-700 bg-zinc-900' : 'border-zinc-800 hover:border-zinc-700'}`}
                  >
                    <div className="font-semibold">{t.label}</div>
                    <div className={`mt-1 text-sm text-zinc-400 ${isActive ? 'opacity-100' : 'opacity-0'} select-none`} aria-hidden={!isActive}>
                      {t.items[0]}
                    </div>
                  </button>
                )
              })}
            </div>

            <div className="md:col-span-3">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                >
                  <div
                    ref={panelRef}
                    role="tabpanel"
                    id={`${baseId}-pro-panel-${activeTab}`}
                    aria-labelledby={`${baseId}-pro-tab-${activeTab}`}
                    className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6"
                  >
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-zinc-300">
                      {tabs.find(t => t.key === activeTab)?.items.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="mt-1 inline-block w-1.5 h-1.5 rounded-full bg-primary-400" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div> */}

      {/* Deep Feature Callouts Carousel */}
      {/* <div className="bg-zinc-950 text-white px-4 md:px-8 lg:px-16 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-heading text-2xl">Deep Feature Callouts</h3>
            <div className="flex gap-2">
              <button onClick={() => setCarouselIndex((i) => (i - 1 + callouts.length) % callouts.length)} className="px-3 py-2 rounded border border-zinc-800 hover:bg-zinc-900">←</button>
              <button onClick={() => setCarouselIndex((i) => (i + 1) % callouts.length)} className="px-3 py-2 rounded border border-zinc-800 hover:bg-zinc-900">→</button>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl border border-zinc-800" style={{ aspectRatio: '16 / 9' }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={carouselIndex}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.35 }}
                className="absolute inset-0"
              >
                <video src={callouts[carouselIndex].video} autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="font-heading text-xl md:text-2xl">{callouts[carouselIndex].title}</div>
                  <div className="text-zinc-300 max-w-2xl">{callouts[carouselIndex].copy}</div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div> */}

      {/* Testimonial */}
      {/* <div className="bg-black text-white px-4 md:px-8 lg:px-16 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="text-2xl md:text-3xl font-heading">“It looks so cool! I have no idea how to use it, but it looks cool.”</blockquote>
          <div className="mt-3 text-zinc-400">- Literally my mom</div>
          <div className="mt-6 text-zinc-500">Guaranteed to make you look cool. Do it for science.</div>
        </div>
      </div> */}

      {/* Pricing / CTA */}
      <div id="pricing" className="bg-gradient-to-b from-black to-zinc-950/0 text-white px-4 md:px-8 lg:px-16 py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 space-y-10 lg:space-y-0 lg:gap-10 items-stretch">
          <div className="col-span-2">
            <h3 className="font-heading text-xl lg:text-2xl mb-4">Go Pro. Biggest win? Collaboration.</h3>
            <p className="text-zinc-300">Start free, upgrade when you’re ready.</p>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-10 lg:gap-4">
              <div className="rounded-xl border border-zinc-800 p-4 lg:p-6">
                <div className="font-heading">Free</div>
                <div className="text-3xl font-heading mt-1">$0</div>
                <ul className="mt-3 text-sm text-zinc-400 space-y-1 list-disc list-outside pl-4">
                  <li className="marker:text-zinc-400">Unlimited boards (fair use)</li>
                  <li className="marker:text-zinc-400">GPT-3.5</li>
                  <li className="marker:text-zinc-400">Solo workspace</li>
                </ul>
              </div>
              <div 
              className="rounded-xl border border-primary-800/40 p-4 lg:p-6 bg-gray-950/60
              hover:border-primary-800/60 transition-colors duration-200 shadow-xl shadow-primary-800/20 hover:shadow-primary-800/40"
              >
                <div className="font-heading">Pro</div>
                <div className="text-3xl font-heading mt-1">$9.99/mo</div>
                <ul className="mt-3 text-sm text-zinc-300 space-y-1 list-disc list-outside pl-4">
                  <li className="marker:text-primary-500"><strong>Collaboration</strong> (invite teammates, share boards, live co-editing)</li>
                  <li className="marker:text-primary-500">100k AI tokens /mo (covers most users)</li>
                  <li className="marker:text-primary-500">10gb of storage</li>
                  <li className="marker:text-primary-500">Latest AI models</li>
                  <li className="marker:text-primary-500">Custom API key integration</li>
                  <li className="marker:text-primary-500">Token usage transparency</li>
                </ul>
              </div>
            </div>
            {/* <div className="mt-8 flex gap-4 flex-wrap">
              <a href="https://app.nodalapp.com/" className="bg-primary-600 hover:bg-primary-500 text-white font-heading px-6 py-3 rounded-full transition-colors">Try Nodal Free</a>
            </div> */}
            <div className="mt-4 text-xs text-zinc-500">Your data stays yours. No ads. No nonsense.</div>
          </div>
          <div className="rounded-2xl border w-full border-zinc-800 p-6 flex flex-1 items-center justify-center">
            <div className="text-center">
              <div className="font-heading text-2xl mb-2">Ready to go Pro?</div>
              <p className="text-zinc-400">Smoother rendering. Deeper AI. Collaboration that clicks.</p>
              <div className="mt-6">
                <a href="#" onClick={() => {
                  window.location.href = 'https://app.nodalapp.com/profile'
                }} className="inline-block bg-primary-600 hover:bg-primary-500 text-white font-heading px-6 py-3 rounded-full transition-colors cursor-not-allowed">Go Pro</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}



