import { useRef, useState } from 'react'
import demoVideo from '../assets/nodal-test.mp4'

interface Pos { x: number; y: number }

function DraggableNode({ initial, children }: { initial: Pos; children: React.ReactNode }) {
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
      {/* Node 1 */}
      <DraggableNode initial={{ x: 40, y: 40 }}>
        <div className="relative flex flex-col justify-start text-left p-3 bg-white dark:bg-gray-800 border border-transparent rounded-lg shadow-sm shadow-gray-400/20 dark:shadow-none group w-[260px] hover:shadow-md hover:border-gray-300 dark:hover:border-gray-600 transition">
          <div className="rf-handle-hit-32 absolute -top-2 left-1/2 -translate-x-1/2"></div>
          <div className="rf-handle-hit-32 absolute -bottom-2 left-1/2 -translate-x-1/2"></div>
          <div className="flex items-center gap-2 mb-1">
            <h3 className="text-sm font-medium text-gray-900 dark:text-white">How to tame your inner raccoon</h3>
          </div>
          <div className="text-xs text-gray-600 dark:text-gray-200 mb-2">
            Raccoons are just night pandas with more opinions. Start small: close tabs. Hydrate. Wear softer pants.
          </div>
        </div>
      </DraggableNode>

      {/* Node 2 */}
      <DraggableNode initial={{ x: 340, y: 160 }}>
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
      <DraggableNode initial={{ x: 340, y: 360 }}>
        <div className="relative flex flex-col justify-start text-left p-3 bg-white dark:bg-gray-800 border border-transparent rounded-lg shadow-sm shadow-gray-400/20 dark:shadow-none group w-[260px] hover:shadow-md hover:border-gray-300 dark:hover:border-gray-600 transition">
          <div className="rf-handle-hit-32 absolute -top-2 left-1/2 -translate-x-1/2"></div>
          <div className="rf-handle-hit-32 absolute -bottom-2 left-1/2 -translate-x-1/2"></div>
          <div className="relative w-full">
            <img src="/nodal.png" alt="Nodal" className="w-full h-[160px] rounded-md object-cover" />
          </div>
          <div className="mt-2 flex items-center gap-2">
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium text-gray-900 dark:text-white truncate">brand_magic.png</div>
              <div className="text-xs text-gray-500 dark:text-gray-400 truncate">420 KB • image/png</div>
            </div>
          </div>
        </div>
      </DraggableNode>

      {/* Node 4 */}
      <DraggableNode initial={{ x: 40, y: 260 }}>
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
            <div className="text-sm font-medium text-gray-900 dark:text-white truncate">How to not get eaten on demo day</div>
            <div className="text-xs text-gray-500 dark:text-gray-400 truncate">https://youtu.be/please‑dont‑run</div>
          </div>
        </div>
      </DraggableNode>
    </section>
  )
}


