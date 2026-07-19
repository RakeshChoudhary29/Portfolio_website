import { useEffect, useRef } from 'react'
import { animate, useInView, useReducedMotion } from 'framer-motion'

/**
 * Counts from 0 to `value` when scrolled into view. Renders the final value
 * immediately for users who prefer reduced motion.
 */
export default function CountUp({ value, decimals = 0, suffix = '', duration = 1.6, className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    if (!ref.current) return undefined

    if (reduceMotion) {
      ref.current.textContent = `${value.toFixed(decimals)}${suffix}`
      return undefined
    }

    if (!inView) return undefined

    const controls = animate(0, value, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => {
        if (ref.current) {
          ref.current.textContent = `${latest.toFixed(decimals)}${suffix}`
        }
      },
    })

    return () => controls.stop()
  }, [inView, reduceMotion, value, decimals, suffix, duration])

  return (
    <span ref={ref} className={className}>
      0{suffix}
    </span>
  )
}
