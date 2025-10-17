import { motion } from 'framer-motion'
import { useState, type ReactNode, useRef } from 'react'
import videoNode from '../assets/video-node.mp4'
import { FilePdf } from '@phosphor-icons/react'
import nobotPeek from '../assets/nobot-peek.png'

interface WhatsANodeSectionProps {
  isDark: boolean;
}

export default function WhatsANodeSection({ }: WhatsANodeSectionProps) {

  // const getColorClasses = (color: string) => {
  //   switch (color) {
  //     case 'primary':
  //       return 'bg-primary-500 hover:bg-primary-400 shadow-primary-200 dark:shadow-primary-900/20'
  //     case 'secondary':
  //       return 'bg-secondary-500 hover:bg-secondary-400 shadow-secondary-200 dark:shadow-secondary-900/20'
  //     case 'tertiary':
  //       return 'bg-tertiary-500 hover:bg-tertiary-400 shadow-tertiary-200 dark:shadow-tertiary-900/20'
  //     default:
  //       return 'bg-primary-500 hover:bg-primary-400 shadow-primary-200'
  //   }
  // }

  return (
    <section id="meet-nodes-section" className="relative overflow-hidden py-24 md:py-48 px-4 md:px-8 lg:px-16 transition-colors duration-200">
      <motion.h2
        className="text-4xl text-center md:text-5xl font-heading font-medium text-zinc-900 dark:text-white mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        meet the nodes
      </motion.h2>

      {(() => {
        const [peekComplete, setPeekComplete] = useState(false)
        return (
          <motion.div
            className="absolute -right-6 bottom-12 md:right-0 md:top-3/5 md:-translate-y-1/2 z-20"
            style={{ willChange: 'transform, opacity' }}
            initial={{ x: 24, opacity: 0 }}
            whileInView={{ x: [0, -4, 0], opacity: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 1.4, ease: 'easeOut', delay: 1.5 }}
            onAnimationComplete={() => setPeekComplete(true)}
          >
            <motion.img
              src={nobotPeek}
              alt="Nobot peeking"
              className="pointer-events-none select-none w-36"
              animate={peekComplete ? { rotate: [0, -1, 0, .7, 0], y: [0, -1, 0, -1, 0] } : undefined}
              transition={peekComplete ? { duration: 3.0, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' } : undefined}
            />
          </motion.div>
        )
      })()}

      {/* Tabs */}
      <TabsSection />

      {/* Bottom Text */}
      <motion.div
        className="text-center max-w-4xl mx-auto mt-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 1.2 }}
      >
        <p className="text-xl text-zinc-600 dark:text-zinc-300 leading-relaxed">
          Nodes are flexible building blocks for your brainwaves — and they're always
          <span className="text-primary-500 font-medium"> one click away</span> from becoming something bigger.
        </p>
      </motion.div>
    </section>
  )
}

function TabsSection() {
  type TabKey = 'Default' | 'Doc' | 'Video' | 'Image' | 'Task'

  function DraggableWrapper({ children }: { children: React.ReactNode }) {
    const containerRef = useRef<HTMLDivElement | null>(null)
    const posRef = useRef({ x: 0, y: 0 })
    const startRef = useRef({ x: 0, y: 0 })
    const draggingRef = useRef(false)

    return (
      <div
        ref={containerRef}
        className="cursor-grab active:cursor-grabbing touch-none p-6"
        onPointerDown={(e) => {
          draggingRef.current = true
          startRef.current = { x: e.clientX - posRef.current.x, y: e.clientY - posRef.current.y }
          e.currentTarget.setPointerCapture(e.pointerId)
        }}
        onPointerMove={(e) => {
          if (!draggingRef.current) return
          let x = e.clientX - startRef.current.x
          let y = e.clientY - startRef.current.y
          const el = containerRef.current
          const section = document.getElementById('meet-nodes-section')
          if (el && section) {
            const bounds = section.getBoundingClientRect()
            const elemRect = el.getBoundingClientRect()
            const dx = x - posRef.current.x
            const dy = y - posRef.current.y
            const newLeft = elemRect.left + dx
            const newRight = elemRect.right + dx
            const newTop = elemRect.top + dy
            const newBottom = elemRect.bottom + dy
            if (newLeft < bounds.left) x += bounds.left - newLeft
            if (newRight > bounds.right) x -= newRight - bounds.right
            if (newTop < bounds.top) y += bounds.top - newTop
            if (newBottom > bounds.bottom) y -= newBottom - bounds.bottom
          }
          posRef.current = { x, y }
          if (containerRef.current) {
            containerRef.current.style.transform = `translate(${x}px, ${y}px)`
          }
        }}
        onPointerUp={(e) => {
          draggingRef.current = false
          e.currentTarget.releasePointerCapture(e.pointerId)
        }}
        onPointerCancel={(e) => {
          draggingRef.current = false
          e.currentTarget.releasePointerCapture(e.pointerId)
        }}
      >
        {children}
      </div>
    )
  }

  const tabsContent: Record<TabKey, { left: ReactNode; right: ReactNode }> = {
    Default: {
      left: (
        <div>
          <h3 className="text-2xl md:text-3xl font-medium font-heading text-zinc-900 dark:text-white mb-3">
            the regular ole' node
          </h3>
          <div className="text-zinc-600 dark:text-zinc-300 space-y-2">
            <p>The flexible building blocks to this whole things.</p>
            <p>Add text, jot down thoughts, make lists. Form connections and move them around. Add notes, hints, or reminders.</p>
            <p>We like things flexible around here.</p>
          </div>
        </div>
      ),
      right: (
        <div className="flex flex-col items-center justify-center">
          <DraggableWrapper>
            <div data-node className="relative flex flex-col justify-start text-left p-3 bg-white dark:bg-gray-800 border border-transparent rounded-lg shadow-sm shadow-gray-400/20 dark:shadow-none group w-[260px] hover:shadow-md hover:border-gray-300 dark:hover:border-gray-600 transition">
              <div className="rf-handle-hit-32 absolute -top-2 left-1/2 -translate-x-1/2"></div>
              <div className="rf-handle-hit-32 absolute -bottom-2 left-1/2 -translate-x-1/2"></div>
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-sm font-medium text-gray-900 dark:text-white">hey! I'm a regular ole' node</h3>
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-200 mb-2">
                ...but I am pretty cool. I hold whatever you throw at me.
              </div>
            </div>
          </DraggableWrapper>
        </div>
      )
    },
    Doc: {
      left: (
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white mb-3">we take your docs, turn them into nodes and hope they treat you better that way</h3>
          <div className="text-zinc-600 dark:text-zinc-300 space-y-2">
            <p>We'll hold your docs for you. Upload them or drag and drop them and we'll make them into nodes for you. Not just that, we'll read it for you. scan documents quickly with our search too. Works with with .pdf, .docx, .txt, .md, and more.</p>
          </div>
        </div>
      ),
      right: (
        <div className="flex flex-col items-center justify-center">
          <DraggableWrapper>
            <div className="relative flex flex-col justify-start text-left p-3 bg-white dark:bg-gray-800 border border-transparent rounded-lg shadow-sm shadow-gray-400/20 dark:shadow-none group w-[320px] hover:shadow-md hover:border-gray-300 dark:hover:border-gray-600 transition">
              <div className="rf-handle-hit-32 absolute -top-2 left-1/2 -translate-x-1/2"></div>
              <div className="rf-handle-hit-32 absolute -bottom-2 left-1/2 -translate-x-1/2"></div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-11 h-11 flex items-center justify-center text-red-600"><FilePdf size={32} weight="duotone" /></div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-semibold text-gray-900 dark:text-white truncate">You can use docs and stuff too.pdf</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">1.8 MB • application/pdf</div>
                </div>
              </div>
              <div className="flex items-center gap-1 mb-2">
                <span className="inline-flex w-3 h-3 rounded-full bg-green-500"></span>
                <span className="text-xs text-gray-600 dark:text-gray-400">Ready</span>
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-700 rounded p-2">
                Extracted Text: “Yup. It extracts the text. You can use it for things. Talk to Nobot about it. Seriously, that's an option, he loves PDFs.”
              </div>
            </div>
          </DraggableWrapper>
        </div>
      )
    },
    Video: {
      left: (
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white mb-3">upload videos or link to youtube. watch while you work.</h3>
          <div className="text-zinc-600 dark:text-zinc-300 space-y-2">
            <p>Reference content and take notes, all in one place.</p>
            <p>Add visual aids and add context for your ideas.</p>
          </div>
        </div>
      ),
      right: (
        <div className="flex flex-col items-center justify-center">
          <DraggableWrapper>
            <div className="relative flex flex-col justify-start text-left p-3 bg-white dark:bg-gray-800 border border-transparent rounded-lg shadow-sm shadow-gray-400/20 dark:shadow-none group w-[260px] hover:shadow-md hover:border-gray-300 dark:hover:border-gray-600 transition">
              <div className="rf-handle-hit-32 absolute -top-2 left-1/2 -translate-x-1/2"></div>
              <div className="rf-handle-hit-32 absolute -bottom-2 left-1/2 -translate-x-1/2"></div>
              <div className="relative w-full">
                <video
                  src={videoNode}
                  muted
                  playsInline
                  loop
                  autoPlay
                  className="w-full h-[160px] rounded-md object-cover"
                />
              </div>
              <div className="mt-2">
                <div className="text-sm font-medium text-gray-900 dark:text-white">nodes can hold all kinds of stuff - like this video</div>
                <div className="text-xs text-gray-500 dark:text-gray-400 truncate">https://youtu.be/just-an-example</div>
              </div>
            </div>
          </DraggableWrapper>
        </div>
      )
    },
    Image: {
      left: (
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white mb-3">visual thinking thrives when imagery is one node away. </h3>
          <div className="text-zinc-600 dark:text-zinc-300 space-y-2">
            <p>Add photos, images, screenshots. upload to the board or drag and drop, and keep it anywhere on your board.</p>
            <p>Plan content, look at images side-by-side. Create captions or let our AI generate one for you.</p>
          </div>
        </div>
      ),
      right: (
        <div className="w-full h-56 md:h-64 lg:h-72 rounded-xl bg-zinc-200 dark:bg-zinc-800 border border-zinc-300/60 dark:border-zinc-700/60 flex items-center justify-center overflow-hidden">
          <img src="/image-node.svg" alt="Image" className="max-h-full max-w-full object-contain" />
        </div>
      )
    },
    Task: {
      left: (
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white mb-3">need to come back to that idea later? add a task node and we’ll remind you.</h3>
          <div className="text-zinc-600 dark:text-zinc-300 space-y-2">
            <p>Assign a due date and we'll bug you again. See all your tasks at once in your boardroom.</p>
          </div>
        </div>
      ),
      right: (
        <div className="w-full h-56 md:h-64 lg:h-72 rounded-xl bg-zinc-200 dark:bg-zinc-800 border border-zinc-300/60 dark:border-zinc-700/60 flex items-center justify-center overflow-hidden">
          <img src="/nodal-board-template.svg" alt="Tasks" className="max-h-full max-w-full object-contain" />
        </div>
      )
    }
  }

  // const tabs = Object.keys(tabsContent) as TabKey[]
  const [active, setActive] = useState<TabKey>('Default')

  // Tab configuration for buttons (supports either icon or image)
  const tabOrder: TabKey[] = ['Default', 'Doc', 'Video', 'Image', 'Task']
  const tabMeta: Record<TabKey, { label: string; icon?: ReactNode; imageSrc?: string }> = {
    Default: { label: 'Default', imageSrc: '/nodal-node.svg' },
    Doc: { label: 'Doc', imageSrc: '/document-node.svg' },
    Video: { label: 'Video', imageSrc: '/image-node.svg' },
    Image: { label: 'Image', imageSrc: '/image-node.svg' },
    Task: { label: 'Task', imageSrc: '/nodal-node.svg' }
  }

  const content = tabsContent[active]
  const panel = (
    <motion.div
      key={active}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="grid md:grid-cols-2 gap-8 items-center"
    >
      {content.left}
      {content.right}
    </motion.div>
  )

  return (
    <div className="max-w-6xl mx-auto mt-12">
      <div className="flex flex-wrap gap-0 md:gap-6 justify-center mb-8" role="tablist" aria-label="Content tabs">
        {tabOrder.map((tab) => (
          <button
            key={tab}
            type="button"
            role="tab"
            aria-selected={active === tab}
            aria-controls={`panel-${tab}`}
            onClick={() => setActive(tab)}
            className={`px-2 md:px-8 py-4 rounded-lg text-sm font-medium transition-colors cursor-pointer border border-transparent flex flex-col items-center gap-2
              ${active === tab
                ? 'text-white !border-primary-500'
                : 'bg-white dark:bg-transparent text-zinc-700 dark:text-zinc-300 hover:border-zinc-200 hover:bg-zinc-100 dark:hover:bg-slate-900/50 dark:hover:border-primary-500'}`}
          >
            {tabMeta[tab].imageSrc ? (
              <img src={tabMeta[tab].imageSrc!} alt="" className="w-12 h-12 md:w-20 md:h-20 object-contain" />
            ) : ( 
              <span className="inline-flex items-center justify-center">{tabMeta[tab].icon}</span>
            )}
            <span>{tabMeta[tab].label}</span>
          </button>
        ))}
      </div>

      <motion.div
        initial={false}
        animate={{ height: 'auto' }}
        transition={{ duration: 0.2 }}
        className="mt-12 p-6 md:p-12 rounded-xl bg-white dark:bg-gray-950
        border border-dashed border-zinc-300 dark:border-zinc-400/40
        shadow-2xl shadow-zinc-400/20 dark:shadow-zinc-700/40"
      >
        <div id={`panel-${active}`} role="tabpanel">
          {panel}
        </div>
      </motion.div>
    </div>
  )
}