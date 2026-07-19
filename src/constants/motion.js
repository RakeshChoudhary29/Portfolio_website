// Shared motion tokens — one easing/duration language across every section.
export const EASE_OUT = [0.23, 1, 0.32, 1]

export const DUR = {
  ui: 0.25,
  section: 0.45,
  hero: 0.6,
}

export const VIEWPORT_ONCE = { once: true, margin: '-60px' }

/** Scroll-triggered fade-up for section content. Spread onto a motion element. */
export const fadeUp = (delay = 0, y = 16) => ({
  initial: { opacity: 0, y },
  whileInView: { opacity: 1, y: 0 },
  viewport: VIEWPORT_ONCE,
  transition: { duration: DUR.section, ease: EASE_OUT, delay },
})

/** Page-load choreography for hero elements. Spread onto a motion element. */
export const heroItem = (delay = 0, y = 16) => ({
  initial: { opacity: 0, y },
  animate: { opacity: 1, y: 0 },
  transition: { duration: DUR.hero, ease: EASE_OUT, delay },
})
