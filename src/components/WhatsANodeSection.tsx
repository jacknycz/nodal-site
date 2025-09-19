import { motion } from 'framer-motion'
import { useState, type ReactNode } from 'react'
import demoVideo from '../assets/nodal-test.mp4'
import pdfDrag from '../assets/pdf-drag.mp4'
import videoNode from '../assets/video-node.mp4'
import { FileText, PlayCircle, ImageSquare, CheckSquare } from '@phosphor-icons/react'

interface WhatsANodeSectionProps {
  isDark: boolean;
}

export default function WhatsANodeSection({ }: WhatsANodeSectionProps) {
  // Use three public SVGs and repeat them for now
  const images = ['/document-node.svg', '/image-node.svg', '/nodal-node.svg']

  const nodeTypes = [
    { 
      img: images[2], 
      label: 'it contains content', 
      description: 'seriously - think it and throw it in a node',
      delay: 0 
    },
    { 
      img: images[1], 
      label: 'picture perfect', 
      description: 'bring all kinds of imagery goodness to the board',
      delay: 0.2 
    },
    { 
      img: images[0], 
      label: 'got documents?', 
      description: 'load them up and throw them in a node - Nobot\'s ready to talk about it',
      delay: 0.4 
    },
    { 
      img: images[0], 
      label: 'of course, tasks', 
      description: 'lorem ipsum dolor sit amet consectutar',
      delay: 0.6 
    },
    { 
      img: images[1], 
      label: 'a PDF', 
      description: 'lorem ipsum dolor sit amet consectutar',
      delay: 0.8 
    },
    { 
      img: images[2], 
      label: 'or a full‑blown concept', 
      description: 'lorem ipsum dolor sit amet consectutar',
      delay: 1.0 
    }
  ]

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
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-heading font-medium font-bold text-zinc-900 dark:text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            meet the nodes
          </motion.h2>
          {/* <motion.p 
            className="text-2xl md:text-3xl text-zinc-700 dark:text-zinc-200 mb-4 font-light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            it's whatever you want it to be
          </motion.p> */}
        </div>
      </div>

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
        <video
          src={demoVideo}
          muted
          playsInline
          loop
          autoPlay
          className="w-full h-56 md:h-64 lg:h-72 rounded-xl object-cover border border-zinc-300/60 dark:border-zinc-700/60"
        />
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
        <video
          src={pdfDrag}
          muted
          playsInline
          loop
          autoPlay
          className="w-full h-56 md:h-64 lg:h-72 rounded-xl object-cover border border-zinc-300/60 dark:border-zinc-700/60"
        />
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
        <video
          src={videoNode}
          muted
          playsInline
          loop
          autoPlay
          className="w-full h-56 md:h-64 lg:h-72 rounded-xl object-cover border border-zinc-300/60 dark:border-zinc-700/60"
        />
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
              <img src={tabMeta[tab].imageSrc!} alt="" className="w-24 h-24 object-contain" />
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