import { useState, useRef, useEffect, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Airplane, Book, Trophy, Lightbulb, ArrowRight, CaretLeft, CaretRight } from '@phosphor-icons/react'
import templateCell from '../assets/template-cell.png'
import codeDesk from '../assets/code-desk.png'
import templatePenguin from '../assets/template-penguin.png'
import templateGarden from '../assets/template-garden.png'

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

export default function TemplatesSection({ }: TemplatesSectionProps) {

  const templates: Template[] = [
    {
      id: 'vacation',
      title: 'Something about cells',
      subtitle: 'Healthcare',
      description: 'A background on some cellular stuff, Shelby will fill this in.',
      icon: Airplane,
      color: 'primary',
      preview: templateCell,
      features: ['Pre-planned itinerary', 'Budget tracker', 'Packing checklist', 'Local recommendations']
    },
    {
      id: 'research',
      title: 'My Research Paper',
      subtitle: 'Academic Structure',
      description: 'Sections outlined with sources placeholder nodes.',
      icon: Book,
      color: 'secondary',
      preview: codeDesk,
      features: ['Chapter outlines', 'Citation management', 'Research timeline', 'Source organization']
    },
    {
      id: 'fantasy',
      title: 'Fantasy Football Draft',
      subtitle: 'Sports Strategy',
      description: 'Player tiers, strategy notes, and live update space.',
      icon: Trophy,
      color: 'tertiary',
      preview: templatePenguin,
      features: ['Player rankings', 'Draft strategy', 'Team analysis', 'Trade tracker']
    },
    {
      id: 'brainstorm',
      title: 'Brainstorm Board',
      subtitle: 'Free Thinking',
      description: 'Empty but structured for free‑flow thinking.',
      icon: Lightbulb,
      color: 'primary',
      preview: templateGarden,
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

  // Build 10 carousel items by repeating the base templates
  const carouselItems: Template[] = Array.from({ length: 10 }, (_, i) => {
    const base = templates[i % templates.length]
    return { ...base, id: `${base.id}-${i}` }
  })

  // Looping carousel driven by translateX
  const M = carouselItems.length
  const calcItemsPerView = (w: number) => (w >= 1024 ? 4 : w >= 768 ? 2 : 1)
  const initialItemsPerView = typeof window !== 'undefined' ? calcItemsPerView(window.innerWidth) : 1
  const [itemsPerView, setItemsPerView] = useState(initialItemsPerView)
  const clones = useMemo(() => Math.min(itemsPerView, M), [itemsPerView, M])
  const displayedItems = useMemo(() => {
    if (M === 0) return [] as Template[]
    // Create uniquely-keyed clones to avoid duplicate React keys
    const head = carouselItems
      .slice(0, clones)
      .map((t, i) => ({ ...t, id: `head-${i}-${t.id}` }))
    const tail = carouselItems
      .slice(M - clones)
      .map((t, i) => ({ ...t, id: `tail-${i}-${t.id}` }))
    return [...tail, ...carouselItems, ...head]
  }, [M, clones, carouselItems])
  const [current, setCurrent] = useState(() => clones) // index on displayed items
  const [disableTransition, setDisableTransition] = useState(false)
  const dragging = useRef(false)
  const dragStartX = useRef(0)
  const dragDelta = useRef(0)
  const trackRef = useRef<HTMLDivElement | null>(null)
  const GAP_PX = 24 // matches gap-6

  const [slideWidth, setSlideWidth] = useState(0)
  const stepPx = slideWidth + 24 // card width + gap
  const translatePx = -current * stepPx

  useEffect(() => {
    // Reset position when itemsPerView changes
    setDisableTransition(true)
    setCurrent(clones)
    const id = requestAnimationFrame(() => setDisableTransition(false))
    return () => cancelAnimationFrame(id)
  }, [clones])

  // Measure slide width whenever layout may change
  const measure = () => {
    const track = trackRef.current
    if (!track) return
    const el = track.children[clones] as HTMLElement | undefined
    if (el) {
      const w = el.getBoundingClientRect().width
      if (w && Math.abs(w - slideWidth) > 0.5) setSlideWidth(w)
    }
  }

  useEffect(() => {
    measure()
  }, [itemsPerView])

  useEffect(() => {
    const onResize = () => measure()
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  // Responsively set how many cards are fully visible and compute widths
  useEffect(() => {
    const onResize = () => setItemsPerView(calcItemsPerView(window.innerWidth))
    onResize()
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const onTransitionEnd = () => {
    // Jump seamlessly when hitting clones (double RAF to avoid visible flicker)
    if (current >= M + clones) {
      setDisableTransition(true)
      requestAnimationFrame(() => {
        setCurrent(current - M)
        requestAnimationFrame(() => setDisableTransition(false))
      })
    } else if (current < clones) {
      setDisableTransition(true)
      requestAnimationFrame(() => {
        setCurrent(current + M)
        requestAnimationFrame(() => setDisableTransition(false))
      })
    }
  }

  const prev = () => setCurrent((c) => c - 1)
  const next = () => setCurrent((c) => c + 1)

  // Touch / drag handlers
  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    dragging.current = true
    dragStartX.current = e.clientX
    dragDelta.current = 0
    setDisableTransition(true)
      ; (e.currentTarget as HTMLDivElement).setPointerCapture(e.pointerId)
  }
  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragging.current) return
    dragDelta.current = e.clientX - dragStartX.current
    const offset = translatePx + dragDelta.current
    if (trackRef.current) {
      trackRef.current.style.transform = `translate3d(${offset}px, 0, 0)`
    }
  }
  const settleDrag = () => {
    setDisableTransition(false)
    const threshold = stepPx * 0.25
    if (Math.abs(dragDelta.current) > threshold) {
      if (dragDelta.current < 0) next()
      else prev()
    } else {
      // snap back
      if (trackRef.current) {
        trackRef.current.style.transform = `translate3d(${translatePx}px, 0, 0)`
      }
    }
    dragging.current = false
    dragDelta.current = 0
  }
  const onPointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragging.current) return
    settleDrag()
      ; (e.currentTarget as HTMLDivElement).releasePointerCapture(e.pointerId)
  }
  const onPointerCancel = () => {
    if (!dragging.current) return
    settleDrag()
  }

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 transition-colors duration-200">
      <div className="max-w-3xl mx-auto mb-16">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-medium font-heading text-zinc-900 dark:text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            templates &amp; starters
          </motion.h2>

          <motion.p
            className="text-2xl text-zinc-700 dark:text-zinc-200 mb-4 font-light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            some templates mostly to get an idea of what nodals all about. the hope is to grow this section MASSIVELY with user galleries, submissions, learning stuff - all kinds of good stuff.
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
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Carousel */}
        <div className="relative mb-12" role="region" aria-roledescription="carousel" aria-label="Templates carousel">
          {/* Progress indicator */}
          <div className="absolute -top-8 left-0 text-sm font-medium text-zinc-500 dark:text-zinc-400" aria-live="polite">
            {((current - clones + M) % M) + 1}/{M}
          </div>

          {/* Controls */}
          <div className="absolute -top-12 right-0 flex items-center gap-2">
            <button
              type="button"
              onClick={prev}
              className="w-9 h-9 rounded-full bg-zinc-800 text-white/90 hover:text-white dark:bg-zinc-700 flex items-center justify-center"
              aria-label="Previous slide"
              disabled={false}
            >
              <CaretLeft weight="duotone" className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={next}
              className="w-9 h-9 rounded-full bg-zinc-800 text-white/90 hover:text-white dark:bg-zinc-700 flex items-center justify-center"
              aria-label="Next slide"
              disabled={false}
            >
              <CaretRight weight="duotone" className="w-5 h-5" />
            </button>
          </div>

          <div className="overflow-hidden pb-2" aria-live="polite">
            <div
              ref={trackRef}
              onTransitionEnd={onTransitionEnd}
              className={`flex gap-6 will-change-transform ${disableTransition ? 'transition-none' : 'transition-transform duration-300 ease-out'}`}
              style={{ transform: `translate3d(${translatePx}px, 0, 0)` }}
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={onPointerUp}
              onPointerCancel={onPointerCancel}
              role="list"
              tabIndex={0}
              aria-label={`Slide ${(current - clones + M) % M + 1} of ${M}`}
              onKeyDown={(e) => {
                if (e.key === 'ArrowLeft') prev()
                if (e.key === 'ArrowRight') next()
              }}
            >
              {displayedItems.map((template) => {
                const colors = getColorClasses(template.color)

                return (
                  <div
                    key={template.id}
                    className={`flex-none relative bg-white dark:bg-zinc-800 rounded-2xl 
                    shadow-lg overflow-hidden ${colors.border}`}
                    style={{
                      width: `calc((100% - ${(itemsPerView - 1) * GAP_PX}px) / ${itemsPerView})`
                    }}
                    role="listitem"
                    aria-label={`${template.title} ${template.subtitle}`}
                  >
                    {/* Preview Image Section */}
                    <div className="relative overflow-hidden py-4">
                      <img src={template.preview} alt={`${template.title} preview`} className="w-full" />
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
                        <div
                          className={`w-10 h-10 ${colors.bg} rounded-lg flex items-center justify-center flex-shrink-0`}
                        >
                          <template.icon className="w-5 h-5 text-white" />
                        </div>
                      </div>

                      <p className="text-zinc-600 dark:text-zinc-300 mb-4 text-sm leading-relaxed">
                        {template.description}
                      </p>

                      {/* Features List */}
                      <div className="space-y-2 mb-4">
                        {template.features.map((feature, featureIndex) => (
                          <div
                            key={featureIndex}
                            className="flex items-center gap-2"
                          >
                            <div className={`w-1.5 h-1.5 ${colors.bg} rounded-full flex-shrink-0`} />
                            <span className="text-xs text-zinc-500 dark:text-zinc-400">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Use Template Button */}
                      <button
                        className={`
                      w-full ${colors.button} text-white font-semibold py-3 px-4 rounded-lg 
                      flex items-center justify-center gap-2 shadow-lg
                    `}
                      >
                        <span>Use This Template</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
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