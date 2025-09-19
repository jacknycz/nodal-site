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
    <section className="relative py-20 px-4 md:px-8 lg:px-16 bg-white dark:bg-zinc-950 transition-colors duration-200">
      <motion.h2
        className="text-4xl text-center md:text-5xl font-heading font-medium text-zinc-900 dark:text-white mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        meet the nodes
      </motion.h2>

      <motion.img
        src={nobotPeek}
        alt="Nobot peeking"
        className="pointer-events-none select-none absolute right-0 top-1/2 -translate-y-1/2 w-40 md:w-48 lg:w-56"
        initial={{ x: 120, opacity: 0 }}
        whileInView={{ x: [-20, 8, 0], opacity: [1, 1, 1] }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 1.8, ease: 'easeOut' }}
      />

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
  type TabKey = 'Default' | 'Docs' | 'Video' | 'Image' | 'Task'

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
          const x = e.clientX - startRef.current.x
          const y = e.clientY - startRef.current.y
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
          <h3 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white mb-3">
            The Humble Node
          </h3>
          <div className="text-zinc-600 dark:text-zinc-300 space-y-2">
            <p>
              "Nodes are the building blocks of your thoughts" is something that would probably be said in a board room. We don't have a a board room.
            </p>
            <p>So, nodes are flexible little building blocks that you can use on the board to build out ideas, make lists, or just connect them to other nodes.</p>
            <p>We like things flexible around here.</p>
          </div>
        </div>
      ),
      right: (
        <div className="flex flex-col gap-6 items-center justify-center rounded-xl p-6 md:p-12
        border border-dashed border-zinc-300 dark:border-zinc-700/40
        shadow-2xl shadow-zinc-400/20 dark:shadow-zinc-700/40">
          <DraggableWrapper>
            <div data-node className="relative flex flex-col justify-start text-left p-3 bg-white dark:bg-gray-800 border border-transparent rounded-lg shadow-sm shadow-gray-400/20 dark:shadow-none group w-[260px] hover:shadow-md hover:border-gray-300 dark:hover:border-gray-600 transition">
              <div className="rf-handle-hit-32 absolute -top-2 left-1/2 -translate-x-1/2"></div>
              <div className="rf-handle-hit-32 absolute -bottom-2 left-1/2 -translate-x-1/2"></div>
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-sm font-medium text-gray-900 dark:text-white">Hey! I'm a regular ole' node</h3>
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-200 mb-2">
                ...but I am pretty cool. I hold whatever you throw at me - I just have some text here to show you, but you can text edit with images up in me too.
              </div>
            </div>
          </DraggableWrapper>

          {/* <video
            src={demoVideo}
            muted
            playsInline
            loop
            autoPlay
            className="w-full h-56 md:h-64 lg:h-72 rounded-xl object-cover border border-zinc-300/60 dark:border-zinc-700/60"
          /> */}
        </div>
      )
    },
    Docs: {
      left: (
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white mb-3">Bring Your Documents</h3>
          <div className="text-zinc-600 dark:text-zinc-300 space-y-2">
            <p>Attach PDFs and docs to the board</p>
            <ul>
              <li>The board "reads" the docs and you can the reference them wherever you want</li>
              <li>You can also just drag and drop the docs onto the board and we'll make them into nodes for you</li>
            </ul>
          </div>
        </div>
      ),
      right: (
        <div className="flex flex-col gap-6 items-center justify-center rounded-xl p-6 md:p-12
        border border-dashed border-zinc-300 dark:border-zinc-700/40
        shadow-2xl shadow-zinc-400/20 dark:shadow-zinc-700/40">
          <DraggableWrapper>
            <div className="relative flex flex-col justify-start text-left p-3 bg-white dark:bg-gray-800 border border-transparent rounded-lg shadow-sm shadow-gray-400/20 dark:shadow-none group w-[320px] hover:shadow-md hover:border-gray-300 dark:hover:border-gray-600 transition">
              <div className="rf-handle-hit-32 absolute -top-2 left-1/2 -translate-x-1/2"></div>
              <div className="rf-handle-hit-32 absolute -bottom-2 left-1/2 -translate-x-1/2"></div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-11 h-11 flex items-center justify-center text-red-600"><FilePdf size={32} weight="duotone" /></div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-semibold text-gray-900 dark:text-white truncate">You can do docs and stuff too.pdf</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">1.8 MB • application/pdf</div>
                </div>
              </div>
              <div className="flex items-center gap-1 mb-2">
                <span className="inline-flex w-3 h-3 rounded-full bg-green-500"></span>
                <span className="text-xs text-gray-600 dark:text-gray-400">Ready</span>
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-700 rounded p-2">
                Extracted Text: “Yup. It extracts the text. You can use it for things. Talk to Nobot about it. Seriously that's an option, he loves PDFs.”
              </div>
            </div>
          </DraggableWrapper>
        </div>
      )
    },
    Video: {
      left: (
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white mb-3">Add Video for Context</h3>
          <div className="text-zinc-600 dark:text-zinc-300 space-y-2">
            <p>Simply add a YouTube URL and bam - you've got a video node.</p>
            <ul>
              <li>It's great for adding context to your ideas</li>
              <li>...and honestly it's pretty sweet dragging and dropping videos</li>
            </ul>
          </div>
        </div>
      ),
      right: (
        <div className="flex flex-col gap-6 items-center justify-center rounded-xl p-6 md:p-12
        border border-dashed border-zinc-300 dark:border-zinc-700/40
        shadow-2xl shadow-zinc-400/20 dark:shadow-zinc-700/40">
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
          <h3 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white mb-3">Ideas Need Images</h3>
          <div className="text-zinc-600 dark:text-zinc-300 space-y-2">
            <p>Moodboards, diagrams, and snapshots — visual thinking thrives when imagery is one node away.</p>
            <ul>
              <li>(there's more cool image stuff coming)</li>
            </ul>
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
          <h3 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white mb-3">Tasks Nodes</h3>
          <div className="text-zinc-600 dark:text-zinc-300 space-y-2">
            <p>Want to come back to that idea later? Add a task node and we'll remind you.</p>
            <ul>
              <li>You can also add a due date and we'll remind you</li>
              <li>It'll show up in your board room too so it's easy to keep track of (we mean so you don't forget)</li>
            </ul>
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

  const tabs = Object.keys(tabsContent) as TabKey[]
  const [active, setActive] = useState<TabKey>('Default')

  // Tab configuration for buttons (supports either icon or image)
  const tabOrder: TabKey[] = ['Default', 'Docs', 'Video', 'Image', 'Task']
  const tabMeta: Record<TabKey, { label: string; icon?: ReactNode; imageSrc?: string }> = {
    Default: { label: 'Default', imageSrc: '/nodal-node.svg' },
    Docs: { label: 'Docs', imageSrc: '/document-node.svg' },
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
      <div className="flex flex-wrap gap-6 justify-center mb-8" role="tablist" aria-label="Content tabs">
        {tabOrder.map((tab) => (
          <button
            key={tab}
            type="button"
            role="tab"
            aria-selected={active === tab}
            aria-controls={`panel-${tab}`}
            onClick={() => setActive(tab)}
            className={`px-8 py-4 rounded-lg text-sm font-medium transition-colors cursor-pointer border border-transparent flex flex-col items-center gap-2
              ${active === tab
                ? 'text-white !border-primary-500'
                : 'bg-white dark:bg-slate-900/50 text-zinc-700 dark:text-zinc-300 hover:border-zinc-200 hover:bg-zinc-100 dark:hover:bg-slate-900/50 dark:hover:border-primary-500'}`}
          >
            {tabMeta[tab].imageSrc ? (
              <img src={tabMeta[tab].imageSrc!} alt="" className="w-20 h-20 object-contain" />
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
        className="mt-16"
      >
        <div id={`panel-${active}`} role="tabpanel">
          {panel}
        </div>
      </motion.div>
    </div>
  )
}