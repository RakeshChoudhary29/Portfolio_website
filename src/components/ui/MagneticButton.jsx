import { useRef, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function MagneticButton({ children, href, className = "", as = "a" }) {
  const ref = useRef(null)
  const [isHovered, setIsHovered] = useState(false)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  // Spring physics for snappy magnetic pull and return
  const springConfig = { stiffness: 150, damping: 15, mass: 0.1 }
  const mouseXSpring = useSpring(x, springConfig)
  const mouseYSpring = useSpring(y, springConfig)

  const handleMouseMove = (e) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height

    const mouseX = e.clientX - rect.left - width / 2
    const mouseY = e.clientY - rect.top - height / 2

    // Pull intensity
    x.set(mouseX * 0.3)
    y.set(mouseY * 0.3)
  }

  const handleMouseEnter = () => setIsHovered(true)

  const handleMouseLeave = () => {
    setIsHovered(false)
    x.set(0)
    y.set(0)
  }

  const Component = as === "a" ? motion.a : motion.button

  return (
    <Component
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      href={href}
      style={{
        x: mouseXSpring,
        y: mouseYSpring,
      }}
      className={`relative inline-flex items-center justify-center ${className}`}
    >
      {children}
    </Component>
  )
}
