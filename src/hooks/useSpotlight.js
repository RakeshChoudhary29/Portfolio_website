import { useRef } from 'react'

/**
 * Returns props to spread onto any element to give it a cursor-following
 * radial glow. Pair with the `.spotlight-card` CSS class.
 *
 *   const spotlight = useSpotlight()
 *   <div className="spotlight-card" {...spotlight}>…</div>
 */
export default function useSpotlight(glow = 'rgba(94, 234, 212, 0.14)') {
  const ref = useRef(null)

  // Written straight to CSS variables on the node — pointer moves must never
  // setState, or every mousemove re-renders the whole card subtree.
  const onMouseMove = (event) => {
    const node = ref.current
    if (!node) return
    const rect = node.getBoundingClientRect()
    node.style.setProperty('--spot-x', `${((event.clientX - rect.left) / rect.width) * 100}%`)
    node.style.setProperty('--spot-y', `${((event.clientY - rect.top) / rect.height) * 100}%`)
  }

  const setGlowOpacity = (value) => {
    ref.current?.style.setProperty('--spot-opacity', value)
  }

  return {
    ref,
    onMouseMove,
    onMouseEnter: () => setGlowOpacity('1'),
    onMouseLeave: () => setGlowOpacity('0'),
    style: { '--spot-color': glow },
  }
}
