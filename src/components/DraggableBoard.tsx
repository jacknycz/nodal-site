import { useEffect, useRef, useState } from 'react'
import demoVideo from '../assets/welcome-to-nodal-short.mp4'
import winstonChen from '../assets/nodal-winston-chen.jpg'

interface Pos { x: number; y: number }

type BreakpointKey = 'base' | 'md' | 'lg' | 'xl'
type ResponsiveInitial = Partial<Record<BreakpointKey, Pos>>
type ResponsiveY = Partial<Record<BreakpointKey, number>>

function DraggableNode({ initial, initialByWidth, initialYByWidth, centerX = false, children }: { initial?: Pos; initialByWidth?: ResponsiveInitial; initialYByWidth?: ResponsiveY; centerX?: boolean; children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [pos, setPos] = useState<Pos>(initial ?? { x: 0, y: 0 })
  const [dragging, setDragging] = useState(false)
  const [hasUserMoved, setHasUserMoved] = useState(false)
  const start = useRef<Pos>({ x: 0, y: 0 })

  const resolveBreakpoint = (w: number): BreakpointKey => (w >= 1280 ? 'xl' : w >= 1024 ? 'lg' : w >= 768 ? 'md' : 'base')
  const clampToBounds = (position: Pos): Pos => {
    const el = ref.current
    const parent = el?.parentElement
    if (!el || !parent) return position
    const maxX = Math.max(0, parent.clientWidth - el.offsetWidth)
    const maxY = Math.max(0, parent.clientHeight - el.offsetHeight)
    return {
      x: Math.min(Math.max(position.x, 0), maxX),
      y: Math.min(Math.max(position.y, 0), maxY)
    }
  }
  const resolveInitial = (): Pos => {
    if (initialByWidth && typeof window !== 'undefined') {
      const bp = resolveBreakpoint(window.innerWidth)
      const by = initialByWidth
      return by[bp] ?? by.base ?? initial ?? { x: 0, y: 0 }
    }
    return initial ?? { x: 0, y: 0 }
  }

  // Set initial position (and update on resize) until user drags
  useEffect(() => {
    if (!initialByWidth) return
    const apply = () => {
      if (hasUserMoved) return
      const next = resolveInitial()
      setPos(clampToBounds(next))
    }
    apply()
    window.addEventListener('resize', apply)
    return () => window.removeEventListener('resize', apply)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialByWidth, hasUserMoved])

  // Center horizontally (update on resize) until user drags
  useEffect(() => {
    if (!centerX || !ref.current || hasUserMoved) return
    const el = ref.current
    const parent = el.parentElement
    if (!parent) return

    const center = () => {
      if (hasUserMoved) return
      const parentWidth = parent.clientWidth
      const nodeWidth = el.offsetWidth
      setPos(prev => clampToBounds({ x: Math.max(0, (parentWidth - nodeWidth) / 2), y: prev.y }))
    }

    center()
    const ro = new ResizeObserver(center)
    ro.observe(parent)
    ro.observe(el)
    window.addEventListener('resize', center)
    return () => {
      ro.disconnect()
      window.removeEventListener('resize', center)
    }
  }, [centerX, hasUserMoved])

  // Responsive Y only (useful with centerX)
  useEffect(() => {
    if (!initialYByWidth) return
    const applyY = () => {
      if (hasUserMoved) return
      const bp = resolveBreakpoint(window.innerWidth)
      const y = initialYByWidth[bp] ?? initialYByWidth.base
      if (typeof y === 'number') setPos(prev => clampToBounds({ x: prev.x, y }))
    }
    applyY()
    window.addEventListener('resize', applyY)
    return () => window.removeEventListener('resize', applyY)
  }, [initialYByWidth, hasUserMoved])

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    setDragging(true)
    start.current = { x: e.clientX - pos.x, y: e.clientY - pos.y }
    ref.current?.setPointerCapture(e.pointerId)
  }
  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragging) return
    const next = { x: e.clientX - start.current.x, y: e.clientY - start.current.y }
    setPos(clampToBounds(next))
    if (!hasUserMoved) setHasUserMoved(true)
  }
  const onPointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    setDragging(false)
    ref.current?.releasePointerCapture(e.pointerId)
  }

  useEffect(() => {
    if (!centerX || !ref.current || !ref.current.parentElement) return
    const parent = ref.current.parentElement as HTMLElement
    const el = ref.current
    const center = () => {
      const w = parent.clientWidth
      const ew = el.offsetWidth
      setPos((p) => ({ x: Math.max(0, (w - ew) / 2), y: p.y }))
    }
    requestAnimationFrame(center)
    const ro = new ResizeObserver(center)
    ro.observe(parent)
    ro.observe(el)
    return () => ro.disconnect()
  }, [centerX])
  return (
    <div
      ref={ref}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
      style={{ transform: `translate(${pos.x}px, ${pos.y}px)` }}
      className="absolute cursor-grab active:cursor-grabbing touch-none pointer-events-auto"
    >
      {children}
    </div>
  )
}

export default function DraggableBoard({ className = '', fillParent = false }: { className?: string; fillParent?: boolean }) {
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)
  useEffect(() => {
    const check = () => {
      setIsMobile(window.innerWidth < 768)
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024)
    }
    check()
    window.addEventListener('resize', check)
    return () => {
      window.removeEventListener('resize', check)
    }
  }, [])
  return (
    <section className={`w-full ${fillParent ? 'h-[1000px]' : 'h-[1000px]'} bg-transparent relative overflow-hidden pointer-events-none ${className}`}>
      {/* Node 1 - centered top with responsive Y */}
      {/* <DraggableNode initial={{ x: 0, y: 40 }} initialYByWidth={{ base: 100, md: 20, lg: 20, xl: 20 }} centerX> */}
      {!isMobile && !isTablet && (  
      <DraggableNode initialByWidth={{ base: { x: 820, y: 380 }, md: { x: 520, y: 180 }, lg: { x: 16, y: 240 }, xl: { x: 20, y: 200 } }}>
        <div className="relative flex flex-col justify-start text-left p-3 bg-white dark:bg-gray-800 border border-transparent rounded-lg shadow-sm shadow-gray-400/20 dark:shadow-none group w-[260px] hover:shadow-md hover:border-gray-300 dark:hover:border-gray-600 transition">
          <div className="rf-handle-hit-32 absolute -top-2 left-1/2 -translate-x-1/2"></div>
          <div className="rf-handle-hit-32 absolute -bottom-2 left-1/2 -translate-x-1/2"></div>
          <div className="flex items-center gap-2 mb-1">
            <h3 className="text-sm font-medium text-gray-900 dark:text-white">sooo... what's a node?</h3>
          </div>
          <div className="text-xs text-gray-600 dark:text-gray-200 mb-1">
            I'm a node! well, I'm a sample node. I'm text, a task, an image, a video, a document.. you get it.

            <div className="mt-4 font-bold">I'm <em>draggable</em> - try me. do it.</div>
          </div>
        </div>
      </DraggableNode>
      )}

      {/* Node 2 */}
      {/* {!isMobile && !isTablet && (
        <DraggableNode initialByWidth={{ base: { x: 120, y: 720 }, md: { x: 460, y: 390 }, lg: { x: 30, y: 420 }, xl: { x: 50, y: 420 } }}>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">I'm a draggable headline node</h2>
        </DraggableNode>
      )} */}

      {/* Node 3 - hide on mobile */}
      {!isMobile && !isTablet && (
        <DraggableNode initialByWidth={{ base: { x: -600, y: 740 }, md: { x: 660, y: 60 }, lg: { x: 1040, y: 80 }, xl: { x: 1800, y: 100 } }}>
          <div className="relative flex flex-col justify-start text-left p-3 bg-white dark:bg-gray-800 border border-transparent rounded-lg shadow-sm shadow-gray-400/20 dark:shadow-none group w-[260px] hover:shadow-md hover:border-gray-300 dark:hover:border-gray-600 transition">
            <div className="rf-handle-hit-32 absolute -top-2 left-1/2 -translate-x-1/2"></div>
            <div className="rf-handle-hit-32 absolute -bottom-2 left-1/2 -translate-x-1/2"></div>
            <div className="relative w-full">
              <img src={winstonChen} alt="Winston Chen" className="w-full pointer-events-none h-[160px] rounded-md object-cover" />
            </div>
            <div className="mt-2 flex items-center gap-2">
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium text-gray-900 dark:text-white truncate">images? that too.jpg</div>
                <div className="text-xs text-gray-500 dark:text-gray-400 truncate">420 KB • image/png</div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-2">drag and drop, link, whatever is easiest</div>
              </div>
            </div>
          </div>
        </DraggableNode>
      )}

      {/* Node 4 - hide on mobile */}
      {!isMobile && !isTablet && (
        <DraggableNode initial={{ x: 0, y: 40 }} initialYByWidth={{ base: 100, md: 20, lg: 700, xl: 600 }} centerX>
          <div className="relative flex flex-col justify-start text-left p-3 bg-white dark:bg-gray-800 border border-transparent rounded-lg shadow-sm shadow-gray-400/20 dark:shadow-none group w-full hover:shadow-md hover:border-gray-300 dark:hover:border-gray-600 transition">
            <div className="rf-handle-hit-32 absolute -top-2 left-1/2 -translate-x-1/2"></div>
            <div className="rf-handle-hit-32 absolute -bottom-2 left-1/2 -translate-x-1/2"></div>
            <div className="relative w-full">
              <video
                src={demoVideo}
                muted
                playsInline
                loop
                autoPlay
                className="w-[640px] h-full rounded-md object-cover"
              />
            </div>
            <div className="mt-2">
              <div className="text-sm font-medium text-gray-900 dark:text-white">add (and drag) your videos</div>
              <div className="text-xs text-gray-500 dark:text-gray-400 truncate">https://youtu.be/just-an-example</div>
              <div className="text-xs text-gray-500 dark:text-gray-400 mt-2">link to videos or upload your own. watch content in-frame while using your board. </div>
            </div>
          </div>
        </DraggableNode>
      )}
    </section>
  )
}


