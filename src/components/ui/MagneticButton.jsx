import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion'

export default function MagneticButton({
  children,
  href,
  className = '',
  as = 'a',
  strength = 0.4,
  ...rest
}) {
  const Component = as === 'a' ? motion.a : motion.button
  const ref = useRef(null)
  const reduceMotion = useReducedMotion()

  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 250, damping: 18, mass: 0.4 })
  const springY = useSpring(y, { stiffness: 250, damping: 18, mass: 0.4 })

  const handleMouseMove = (event) => {
    if (reduceMotion || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const relX = event.clientX - (rect.left + rect.width / 2)
    const relY = event.clientY - (rect.top + rect.height / 2)
    x.set(relX * strength)
    y.set(relY * strength)
  }

  const reset = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <Component
      ref={ref}
      href={href}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      style={{ x: springX, y: springY }}
      whileHover={{ scale: reduceMotion ? 1 : 1.04 }}
      whileTap={{ scale: 0.97 }}
      className={`inline-flex items-center justify-center will-change-transform ${className}`}
      {...rest}
    >
      {children}
    </Component>
  )
}
