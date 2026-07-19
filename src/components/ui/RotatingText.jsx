import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'

/**
 * Cycles through `words` with a masked slide-up reveal.
 * Reduced motion swaps the slide for a plain crossfade.
 */
export default function RotatingText({ words, interval = 2600, className = '' }) {
  const reduceMotion = useReducedMotion()
  const [index, setIndex] = useState(0)

  useEffect(() => {
    // Don't auto-rotate under reduced motion — a continuously self-updating
    // label with no pause control fails WCAG 2.2.2. Show a single role instead.
    if (reduceMotion || words.length < 2) return undefined
    const id = setInterval(() => setIndex((i) => (i + 1) % words.length), interval)
    return () => clearInterval(id)
  }, [reduceMotion, words.length, interval])

  return (
    <span className={`relative inline-flex overflow-hidden align-bottom ${className}`}>
      <span className="sr-only">{words.join(', ')}</span>
      {/* popLayout keeps the incoming word entering while the old one exits —
          mode="wait" would leave the line blank between words */}
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={words[index]}
          aria-hidden="true"
          initial={reduceMotion ? { opacity: 0 } : { y: '110%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={reduceMotion ? { opacity: 0 } : { y: '-110%', opacity: 0 }}
          transition={{ type: 'spring', duration: 0.55, bounce: 0.15 }}
          className="inline-block whitespace-nowrap"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}
