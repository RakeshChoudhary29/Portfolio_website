import { useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

export default function TiltCard({ children, className = "" }) {
  const ref = useRef(null)
  const [isHovered, setIsHovered] = useState(false)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  // Spring physics for smooth return
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 })
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 })

  // Max tilt angle (degrees)
  const maxTilt = 10

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [maxTilt, -maxTilt])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-maxTilt, maxTilt])

  const handleMouseMove = (e) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height

    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top

    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5

    x.set(xPct)
    y.set(yPct)

    // Update custom properties for spotlight effect
    ref.current.style.setProperty('--mouse-x', `${mouseX}px`)
    ref.current.style.setProperty('--mouse-y', `${mouseY}px`)
  }

  const handleMouseEnter = () => setIsHovered(true)
  
  const handleMouseLeave = () => {
    setIsHovered(false)
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`relative w-full ${className}`}
    >
      {/* Glare effect */}
      <motion.div 
        className="pointer-events-none absolute inset-0 z-50 rounded-[inherit] bg-gradient-to-tr from-white/0 via-white/10 to-white/0 opacity-0 mix-blend-overlay transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          backgroundPosition: `calc(50% + ${useTransform(mouseXSpring, [-0.5, 0.5], [-100, 100]).get()}px) calc(50% + ${useTransform(mouseYSpring, [-0.5, 0.5], [-100, 100]).get()}px)`
        }}
      />
      <div 
        style={{ transform: "translateZ(30px)", transformStyle: "preserve-3d" }}
        className="w-full h-full"
      >
        {children}
      </div>
    </motion.div>
  )
}
