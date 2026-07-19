import { useRef, useState } from 'react'

/**
 * Returns props to spread onto any element to give it a cursor-following
 * radial glow. Pair with the `.spotlight-card` CSS class.
 *
 *   const spotlight = useSpotlight()
 *   <div className="spotlight-card" {...spotlight}>…</div>
 */
export default function useSpotlight(glow = 'rgba(94, 234, 212, 0.14)') {
  const ref = useRef(null)
  const [pos, setPos] = useState({ x: 50, y: 50 })
  const [active, setActive] = useState(false)

  const onMouseMove = (event) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    setPos({
      x: ((event.clientX - rect.left) / rect.width) * 100,
      y: ((event.clientY - rect.top) / rect.height) * 100,
    })
  }

  return {
    ref,
    onMouseMove,
    onMouseEnter: () => setActive(true),
    onMouseLeave: () => setActive(false),
    style: {
      '--spot-x': `${pos.x}%`,
      '--spot-y': `${pos.y}%`,
      '--spot-color': glow,
      '--spot-opacity': active ? 1 : 0,
    },
  }
}
