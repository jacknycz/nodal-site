import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plane, BookOpen, Trophy, Lightbulb, ArrowRight, Play } from 'lucide-react'

interface TemplatesSectionProps {
  isDark: boolean;
}

interface Template {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: any;
  color: string;
  preview: string;
  features: string[];
}

export default function TemplatesSection({ isDark }: TemplatesSectionProps) {
  const [hoveredTemplate, setHoveredTemplate] = useState<string | null>(null)

  const templates: Template[] = [
    {
      id: 'vacation',
      title: 'Vacation to Greece',
      subtitle: '✈️ Travel Planning',
      description: 'Itinerary, must‑see spots, and packing list ready to customize.',
      icon: Plane,
      color: 'primary',
      preview: '/api/placeholder/400/250',
      features: ['Pre-planned itinerary', 'Budget tracker', 'Packing checklist', 'Local recommendations']
    },
    {
      id: 'research',
      title: 'My Research Paper',
      subtitle: '📚 Academic Structure',
      description: 'Sections outlined with sources placeholder nodes.',
      icon: BookOpen,
      color: 'secondary',
      preview: '/api/placeholder/400/250',
      features: ['Chapter outlines', 'Citation management', 'Research timeline', 'Source organization']
    },
    {
      id: 'fantasy',
      title: 'Fantasy Football Draft',
      subtitle: '🏈 Sports Strategy',
      description: 'Player tiers, strategy notes, and live update space.',
      icon: Trophy,
      color: 'tertiary',
      preview: '/api/placeholder/400/250',
      features: ['Player rankings', 'Draft strategy', 'Team analysis', 'Trade tracker']
    },
    {
      id: 'brainstorm',
      title: 'Brainstorm Board',
      subtitle: '🧠 Free Thinking',
      description: 'Empty but structured for free‑flow thinking.',
      icon: Lightbulb,
      color: 'primary',
      preview: '/api/placeholder/400/250',
      features: ['Idea clusters', 'Mind mapping zones', 'Priority matrix', 'Action items']
    }
  ]

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return {
          bg: 'bg-primary-500',
          border: 'border-primary-200 dark:border-primary-800',
          hover: 'hover:border-primary-400 dark:hover:border-primary-600',
          button: 'bg-primary-500 hover:bg-primary-600',
          text: 'text-primary-600 dark:text-primary-400'
        }
      case 'secondary':
        return {
          bg: 'bg-secondary-500',
          border: 'border-secondary-200 dark:border-secondary-800',
          hover: 'hover:border-secondary-400 dark:hover:border-secondary-600',
          button: 'bg-secondary-500 hover:bg-secondary-600',
          text: 'text-secondary-600 dark:text-secondary-400'
        }
      case 'tertiary':
        return {
          bg: 'bg-tertiary-500',
          border: 'border-tertiary-200 dark:border-tertiary-800',
          hover: 'hover:border-tertiary-400 dark:hover:border-tertiary-600',
          button: 'bg-tertiary-500 hover:bg-tertiary-600',
          text: 'text-tertiary-600 dark:text-tertiary-400'
        }
      default:
        return {
          bg: 'bg-primary-500',
          border: 'border-primary-200',
          hover: 'hover:border-primary-400',
          button: 'bg-primary-500 hover:bg-primary-600',
          text: 'text-primary-600'
        }
    }
  }

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-white dark:bg-zinc-950 transition-colors duration-200">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Templates & Starters
          </motion.h2>
          
          <motion.p 
            className="text-2xl text-zinc-700 dark:text-zinc-200 mb-4 font-light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Jump in with a head start.
          </motion.p>
          
          <motion.p 
            className="text-xl text-zinc-600 dark:text-zinc-300 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Nodal comes with pre‑made boards so you can focus on ideas, not setup:
          </motion.p>
        </div>

        {/* Templates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {templates.map((template, index) => {
            const colors = getColorClasses(template.color)
            const isHovered = hoveredTemplate === template.id

            return (
              <motion.div
                key={template.id}
                className={`
                  relative bg-white dark:bg-zinc-800 rounded-2xl shadow-lg border-2 transition-all duration-300 overflow-hidden group cursor-pointer
                  ${colors.border} ${colors.hover}
                  ${isHovered ? 'scale-[1.02] shadow-2xl' : 'hover:scale-[1.01]'}
                `}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onHoverStart={() => setHoveredTemplate(template.id)}
                onHoverEnd={() => setHoveredTemplate(null)}
                whileHover={{ y: -5 }}
              >
                {/* Preview Image Section */}
                <div className="relative h-48 overflow-hidden">
                  {/* FPO Image */}
                  <div className="w-full h-full bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-700 dark:to-zinc-800 flex items-center justify-center">
                    <div className="text-center">
                      <div className={`w-16 h-16 ${colors.bg} rounded-2xl flex items-center justify-center mx-auto mb-3`}>
                        <template.icon className="w-8 h-8 text-white" />
                      </div>
                      <p className="text-sm text-zinc-500 dark:text-zinc-400 font-medium">
                        [FPO - Template Preview]
                      </p>
                      <p className="text-xs text-zinc-400 dark:text-zinc-500 mt-1">
                        {template.title} Board Layout
                      </p>
                    </div>
                  </div>

                  {/* Play button overlay */}
                  <AnimatePresence>
                    {isHovered && (
                      <motion.div
                        className="absolute inset-0 bg-black/20 flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        <motion.div
                          className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg"
                          initial={{ scale: 0.8 }}
                          animate={{ scale: 1 }}
                          exit={{ scale: 0.8 }}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Play className="w-7 h-7 text-zinc-700 ml-1" />
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Live indicator */}
                  <div className="absolute top-4 right-4 flex items-center gap-2 bg-black/60 px-3 py-1 rounded-full">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-white text-xs font-medium">Live Preview</span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-1">
                        {template.title}
                      </h3>
                      <p className={`text-sm font-medium ${colors.text}`}>
                        {template.subtitle}
                      </p>
                    </div>
                    <motion.div
                      className={`w-10 h-10 ${colors.bg} rounded-lg flex items-center justify-center flex-shrink-0`}
                      whileHover={{ rotate: 5 }}
                    >
                      <template.icon className="w-5 h-5 text-white" />
                    </motion.div>
                  </div>

                  <p className="text-zinc-600 dark:text-zinc-300 mb-4 text-sm leading-relaxed">
                    {template.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-2 mb-4">
                    {template.features.slice(0, isHovered ? 4 : 2).map((feature, featureIndex) => (
                      <motion.div 
                        key={featureIndex}
                        className="flex items-center gap-2"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: featureIndex * 0.1 }}
                      >
                        <div className={`w-1.5 h-1.5 ${colors.bg} rounded-full flex-shrink-0`} />
                        <span className="text-xs text-zinc-500 dark:text-zinc-400">
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Use Template Button */}
                  <AnimatePresence>
                    {isHovered && (
                      <motion.button
                        className={`
                          w-full ${colors.button} text-white font-semibold py-3 px-4 rounded-lg 
                          flex items-center justify-center gap-2 transition-all duration-200 shadow-lg
                        `}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <span>Use This Template</span>
                        <ArrowRight className="w-4 h-4" />
                      </motion.button>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom Text */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-xl text-zinc-600 dark:text-zinc-300 max-w-3xl mx-auto">
            Start with a template, or 
            <span className="text-primary-500 font-medium"> remix one into your own creation</span>.
          </p>
        </motion.div>
      </div>
    </section>
  )
}