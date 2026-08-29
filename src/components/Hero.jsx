import { motion } from 'framer-motion'
import Icon from './ui/Icon'
import MagneticButton from './ui/MagneticButton'
import TiltCard from './ui/TiltCard'
import RotatingText from './ui/RotatingText'
import useSpotlight from '../hooks/useSpotlight'
import { heroItem, EASE_OUT, DUR } from '../constants/motion'

export default function Hero({ data }) {
  const spotlight = useSpotlight()

  return (
    <section
      id="intro"
      className="hero-bg relative overflow-hidden max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-20 md:pt-20 md:pb-24"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <span className="hero-grid" />
        <span className="aurora-blob aurora-a hidden sm:block h-72 w-72 bg-aqua/25 -top-16 right-10" />
        <span className="aurora-blob aurora-b hidden sm:block h-80 w-80 bg-cyan/20 top-40 -left-16" />
        <span className="aurora-blob aurora-a hidden md:block h-64 w-64 bg-magenta/10 bottom-0 right-1/3" />
      </div>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(280px,340px)] lg:items-start lg:gap-12">
        <motion.div {...heroItem(0)}>
          <p className="section-label">{data.sectionLabel}</p>

          <motion.p
            className="font-mono text-offwhite/60 text-sm sm:text-base mb-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.4, ease: EASE_OUT }}
          >
            {data.intro}
          </motion.p>

          <motion.h1
            className="font-display text-fluid-hero font-bold mb-4"
            {...heroItem(0.2)}
          >
            <span className="text-gradient-animated">{data.name}</span>
          </motion.h1>

          <motion.p
            className="text-offwhite text-fluid-lead font-semibold max-w-2xl mb-5"
            {...heroItem(0.3)}
          >
            {data.roles ? (
              <span className="font-display inline-flex items-center">
                <span
                  aria-hidden="true"
                  className="mr-3 inline-block h-[1.05em] w-1 flex-shrink-0 rounded-full bg-gradient-to-b from-aqua to-cyan"
                />
                <RotatingText words={data.roles} />
              </span>
            ) : (
              data.title
            )}
          </motion.p>

          <motion.p
            className="text-offwhite/65 text-base sm:text-lg leading-relaxed max-w-3xl mb-8"
            {...heroItem(0.4)}
          >
            {data.description}
          </motion.p>

          <motion.div className="flex flex-wrap gap-3 sm:gap-4" {...heroItem(0.5)}>
            <MagneticButton
              href="#projects"
              className="cta-glow bg-cyan text-black hover:bg-cyan/90 font-mono px-6 sm:px-7 py-2.5 sm:py-3 rounded-full no-underline text-sm sm:text-base font-semibold"
            >
              View Projects
              <Icon name="arrow-right" size={16} className="ml-2" />
            </MagneticButton>
            <motion.a
              href="#contact"
              whileTap={{ scale: 0.97 }}
              className="btn-outline-premium border border-white/15 text-offwhite hover:border-aqua/40 hover:text-aqua font-mono px-6 sm:px-7 py-2.5 sm:py-3 rounded-full inline-flex items-center no-underline text-sm sm:text-base"
            >
              Get In Touch
            </motion.a>
          </motion.div>

          <motion.div
            className="mt-8 flex flex-wrap gap-2.5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.65, duration: DUR.hero, ease: EASE_OUT }}
          >
            {data.chips.map((chip) => (
              <span
                key={chip}
                className="border border-white/10 bg-surface text-offwhite/65 rounded-full px-3.5 py-1.5 text-xs sm:text-sm"
              >
                {chip}
              </span>
            ))}
          </motion.div>
        </motion.div>

        <motion.aside
          {...spotlight}
          className="spotlight-card rounded-2xl p-5 md:p-6"
          {...heroItem(0.4)}
        >
          <div className="flex items-center gap-3">
            <TiltCard>
              <div className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-surface-elevated p-2 border border-white/10">
                <Icon name={data.card.icon} size={22} className="text-aqua" />
              </div>
            </TiltCard>
            <p className="flex items-center gap-2 font-mono text-[0.7rem] sm:text-xs uppercase tracking-[0.14em] text-aqua/80">
              <span className="h-1.5 w-1.5 rounded-full bg-aqua animate-pulse" aria-hidden="true" />
              {data.card.eyebrow}
            </p>
          </div>

          <p className="mt-4 text-offwhite text-base sm:text-lg font-semibold leading-snug">
            {data.card.title}
          </p>
          <p className="text-offwhite/55 text-xs sm:text-sm mt-1">
            {data.card.subtitle}
          </p>

          <div className="mt-5 space-y-2.5">
            {data.card.highlights.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-xl border border-white/8 bg-surface-elevated px-3.5 py-3"
              >
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan flex-shrink-0" />
                <p className="text-offwhite/70 text-sm leading-6">{item}</p>
              </div>
            ))}
          </div>
        </motion.aside>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to about section"
        className="hidden md:flex mx-auto mt-8 w-fit flex-col items-center gap-2 text-offwhite/40 hover:text-aqua transition-colors duration-200 no-underline"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.5 }}
      >
        <span className="font-mono text-[0.7rem] uppercase tracking-[0.2em]">Scroll</span>
        <Icon name="chevron-down" size={16} className="scroll-cue" />
      </motion.a>
    </section>
  )
}
