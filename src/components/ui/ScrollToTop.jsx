import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import Icon from './Icon'

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // An explicit behavior:'smooth' overrides the reduced-motion CSS override,
  // so branch on the preference to keep the jump instant when requested.
  const scrollTop = () =>
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' })

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={scrollTop}
          aria-label="Scroll to top"
          initial={{ opacity: 0, scale: 0.6, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 12 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          transition={{ duration: 0.2 }}
          className="fixed bottom-5 right-5 sm:bottom-8 sm:right-8 z-50 flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-cyan text-black shadow-lg shadow-cyan/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-aqua focus-visible:ring-offset-2 focus-visible:ring-offset-black"
        >
          <Icon name="arrow-up" size={18} />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
