import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'framer-motion'

export default function TiltCard({ children, className = '', max = 14, style, ...rest }) {
  const ref = useRef(null)
  const reduceMotion = useReducedMotion()

  const px = useMotionValue(0.5)
  const py = useMotionValue(0.5)
  const springConfig = { stiffness: 200, damping: 20, mass: 0.5 }
  const rotateX = useSpring(useTransform(py, [0, 1], [max, -max]), springConfig)
  const rotateY = useSpring(useTransform(px, [0, 1], [-max, max]), springConfig)

  const handleMouseMove = (event) => {
    if (reduceMotion || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    px.set((event.clientX - rect.left) / rect.width)
    py.set((event.clientY - rect.top) / rect.height)
  }

  const reset = () => {
    px.set(0.5)
    py.set(0.5)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      style={{ rotateX, rotateY, transformPerspective: 600, transformStyle: 'preserve-3d', ...style }}
      className={`relative w-full will-change-transform ${className}`}
      {...rest}
    >
      {children}
    </motion.div>
  )
}
