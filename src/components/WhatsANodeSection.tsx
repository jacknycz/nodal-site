import { motion } from 'framer-motion'
import { FileText, Image, CheckSquare, Lightbulb, FileQuestion, Layers } from 'lucide-react'

interface WhatsANodeSectionProps {
  isDark: boolean;
}

export default function WhatsANodeSection({ }: WhatsANodeSectionProps) {
  const nodeTypes = [
    { icon: Lightbulb, label: 'a thought', color: 'primary', delay: 0 },
    { icon: CheckSquare, label: 'a plan', color: 'secondary', delay: 0.2 },
    { icon: FileQuestion, label: 'a question', color: 'tertiary', delay: 0.4 },
    { icon: Image, label: 'an image', color: 'primary', delay: 0.6 },
    { icon: FileText, label: 'a PDF', color: 'secondary', delay: 0.8 },
    { icon: Layers, label: 'or a full‑blown concept', color: 'tertiary', delay: 1.0 }
  ]

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return 'bg-primary-500 hover:bg-primary-400 shadow-primary-200 dark:shadow-primary-900/20'
      case 'secondary':
        return 'bg-secondary-500 hover:bg-secondary-400 shadow-secondary-200 dark:shadow-secondary-900/20'
      case 'tertiary':
        return 'bg-tertiary-500 hover:bg-tertiary-400 shadow-tertiary-200 dark:shadow-tertiary-900/20'
      default:
        return 'bg-primary-500 hover:bg-primary-400 shadow-primary-200'
    }
  }

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-white dark:bg-zinc-950 transition-colors duration-200">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            What's a Node?
          </motion.h2>
          <motion.p 
            className="text-2xl md:text-3xl text-zinc-700 dark:text-zinc-200 mb-4 font-light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            One idea, one node.
          </motion.p>
          <motion.p 
            className="text-xl text-zinc-600 dark:text-zinc-300 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A node in Nodal is whatever you want it to be:
          </motion.p>
        </div>

        {/* Node Types Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {nodeTypes.map((nodeType) => (
            <motion.div
              key={nodeType.label}
              className="flex flex-col items-center text-center group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: nodeType.delay,
                type: "spring",
                stiffness: 300,
                damping: 25
              }}
              whileHover={{ y: -5 }}
            >
              {/* Icon Container */}
              <motion.div
                className={`
                  w-20 h-20 rounded-2xl flex items-center justify-center mb-4 shadow-lg
                  ${getColorClasses(nodeType.color)}
                  transition-all duration-300
                `}
                whileHover={{ 
                  scale: 1.05,
                  rotate: [0, -2, 2, 0],
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <nodeType.icon className="w-10 h-10 text-white" />
                
                {/* Pulse effect on hover */}
                <motion.div
                  className={`absolute w-20 h-20 rounded-2xl ${getColorClasses(nodeType.color)} opacity-0`}
                  whileHover={{
                    scale: [1, 1.2, 1],
                    opacity: [0, 0.3, 0],
                    transition: { 
                      duration: 1,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }}
                />
              </motion.div>

              {/* Label */}
              <motion.p 
                className="text-lg font-medium text-zinc-700 dark:text-zinc-200 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
              >
                {nodeType.label}
              </motion.p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Text */}
        <motion.div 
          className="text-center max-w-4xl mx-auto"
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
      </div>
    </section>
  )
}