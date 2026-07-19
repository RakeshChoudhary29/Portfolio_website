import { motion } from 'framer-motion'
import useSpotlight from '../../hooks/useSpotlight'
import { fadeUp } from '../../constants/motion'

// Full class strings per accent so Tailwind's scanner picks them up.
const ACCENTS = {
  aqua: { dot: 'border-aqua', rail: 'from-aqua/50' },
  cyan: { dot: 'border-cyan', rail: 'from-cyan/50' },
}

/** Vertical rail wrapper for a stack of TimelineItem children. */
export function Timeline({ accent = 'aqua', children }) {
  return (
    <div className="relative space-y-5 md:space-y-6 md:pl-8">
      <span
        aria-hidden="true"
        className={`hidden md:block absolute left-0 top-3 bottom-3 w-px bg-gradient-to-b ${ACCENTS[accent].rail} via-white/10 to-transparent`}
      />
      {children}
    </div>
  )
}

/**
 * Spotlight card with a dot aligned to the parent Timeline's rail.
 * The dot's -left-[37px] pairs with the Timeline's md:pl-8 (32px) plus the
 * rail/dot geometry — change them together.
 */
export function TimelineItem({ accent = 'aqua', index, glow, children }) {
  const spotlight = useSpotlight(glow)

  return (
    <div className="relative">
      <span
        aria-hidden="true"
        className={`hidden md:block absolute -left-[37px] top-8 h-2.5 w-2.5 rounded-full border-2 ${ACCENTS[accent].dot} bg-black`}
      />
      <motion.article
        {...spotlight}
        {...fadeUp(index * 0.08)}
        whileHover={{ y: -3 }}
        className="spotlight-card rounded-2xl p-5 sm:p-6 md:p-8 md:grid md:grid-cols-[200px_minmax(0,1fr)] md:gap-8"
      >
        {children}
      </motion.article>
    </div>
  )
}
