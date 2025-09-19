import { useEffect, useRef, useState } from 'react'
import demoVideo from '../assets/nodal-test.mp4'

interface Pos { x: number; y: number }

function DraggableNode({ initial, centerX = false, children }: { initial: Pos; centerX?: boolean; children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [pos, setPos] = useState<Pos>(initial)
  const [dragging, setDragging] = useState(false)
  const start = useRef<Pos>({ x: 0, y: 0 })

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    setDragging(true)
    start.current = { x: e.clientX - pos.x, y: e.clientY - pos.y }
    ref.current?.setPointerCapture(e.pointerId)
  }
  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragging) return
    const next = { x: e.clientX - start.current.x, y: e.clientY - start.current.y }
    setPos(next)
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
  return (
    <section className={`w-full ${fillParent ? 'h-full' : 'h-[80vh]'} bg-transparent relative overflow-hidden pointer-events-none ${className}`}>
      {/* Node 1 - centered top */}
      <DraggableNode initial={{ x: 0, y: 24 }} centerX>
        <div className="relative flex flex-col justify-start text-left p-3 bg-white dark:bg-gray-800 border border-transparent rounded-lg shadow-sm shadow-gray-400/20 dark:shadow-none group w-[260px] hover:shadow-md hover:border-gray-300 dark:hover:border-gray-600 transition">
          <div className="rf-handle-hit-32 absolute -top-2 left-1/2 -translate-x-1/2"></div>
          <div className="rf-handle-hit-32 absolute -bottom-2 left-1/2 -translate-x-1/2"></div>
          <div className="flex items-center gap-2 mb-1">
            <h3 className="text-sm font-medium text-gray-900 dark:text-white">hey! welcome to the board</h3>
          </div>
          <div className="text-xs text-gray-600 dark:text-gray-200 mb-2">
            I'm a node! well, like a little sample node - real nodes do all kinds of cool stuff.

            <div className="mt-4 font-bold">PS TRY TO DRAG US!</div>
          </div>
        </div>
      </DraggableNode>

      {/* Node 2 */}
      <DraggableNode initial={{ x: 700, y: 320 }}>
        <div className="relative flex flex-col justify-start text-left p-3 bg-white dark:bg-gray-800 border border-transparent rounded-lg shadow-sm shadow-gray-400/20 dark:shadow-none group w-[260px] hover:shadow-md hover:border-gray-300 dark:hover:border-gray-600 transition">
          <div className="rf-handle-hit-32 absolute -top-2 left-1/2 -translate-x-1/2"></div>
          <div className="rf-handle-hit-32 absolute -bottom-2 left-1/2 -translate-x-1/2"></div>
          <div className="flex items-center gap-2 mb-1">
            <h3 className="text-sm font-medium text-gray-900 dark:text-white">A kinder to-do list</h3>
          </div>
          <div className="text-xs text-gray-600 dark:text-gray-200 mb-2">
            Plan like you’re human. Fewer tasks, more momentum. Add one thing you can finish now.
          </div>
        </div>
      </DraggableNode>

      {/* Node 3 */}
      <DraggableNode initial={{ x: 940, y: 60 }}>
        <div className="relative flex flex-col justify-start text-left p-3 bg-white dark:bg-gray-800 border border-transparent rounded-lg shadow-sm shadow-gray-400/20 dark:shadow-none group w-[260px] hover:shadow-md hover:border-gray-300 dark:hover:border-gray-600 transition">
          <div className="rf-handle-hit-32 absolute -top-2 left-1/2 -translate-x-1/2"></div>
          <div className="rf-handle-hit-32 absolute -bottom-2 left-1/2 -translate-x-1/2"></div>
          <div className="relative w-full">
            <img src="/nodal.png" alt="Nodal" className="w-full pointer-events-none h-[160px] rounded-md object-cover" />
          </div>
          <div className="mt-2 flex items-center gap-2">
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium text-gray-900 dark:text-white truncate">Images? Of course.jpg</div>
              <div className="text-xs text-gray-500 dark:text-gray-400 truncate">420 KB • image/png</div>
            </div>
          </div>
        </div>
      </DraggableNode>

      {/* Node 4 */}
      <DraggableNode initial={{ x: 600, y: 460 }}>
        <div className="relative flex flex-col justify-start text-left p-3 bg-white dark:bg-gray-800 border border-transparent rounded-lg shadow-sm shadow-gray-400/20 dark:shadow-none group w-[260px] hover:shadow-md hover:border-gray-300 dark:hover:border-gray-600 transition">
          <div className="rf-handle-hit-32 absolute -top-2 left-1/2 -translate-x-1/2"></div>
          <div className="rf-handle-hit-32 absolute -bottom-2 left-1/2 -translate-x-1/2"></div>
          <div className="relative w-full">
            <video
              src={demoVideo}
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
      </DraggableNode>
    </section>
  )
}


