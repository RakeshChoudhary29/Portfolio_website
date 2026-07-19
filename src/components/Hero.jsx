import { motion } from 'framer-motion'
import MagneticButton from './ui/MagneticButton'
import TiltCard from './ui/TiltCard'
import Typewriter from './ui/Typewriter'

export default function Hero({ data }) {
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

      <div className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(280px,340px)] lg:items-start lg:gap-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <p className="section-label">{data.sectionLabel}</p>

          <motion.p
            className="font-mono text-offwhite/60 text-sm sm:text-base mb-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.4 }}
          >
            {data.intro}
          </motion.p>

          <motion.h1
            className="font-sans text-offwhite text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-[1.1]"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <span className="text-gradient-animated">{data.name}</span>
          </motion.h1>

          <motion.p
            className="text-offwhite text-xl sm:text-2xl md:text-3xl font-semibold leading-snug max-w-2xl mb-5"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            {data.roles ? (
              <span className="font-mono">
                <span className="text-aqua select-none" aria-hidden="true">
                  {'> '}
                </span>
                <Typewriter words={data.roles} className="text-offwhite" />
              </span>
            ) : (
              data.title
            )}
          </motion.p>

          <motion.p
            className="text-offwhite/65 text-base sm:text-lg leading-relaxed max-w-3xl mb-8"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            {data.description}
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-3 sm:gap-4"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <MagneticButton
              href="#projects"
              className="cta-glow bg-cyan text-black hover:bg-cyan/90 font-mono px-6 sm:px-7 py-2.5 sm:py-3 rounded-full no-underline text-sm sm:text-base font-semibold"
            >
              View Projects
              <i className="fa-solid fa-arrow-right ml-2 text-sm" aria-hidden="true" />
            </MagneticButton>
            <a
              href="#contact"
              className="btn-outline-premium border border-white/15 text-offwhite hover:border-aqua/40 hover:text-aqua font-mono px-6 sm:px-7 py-2.5 sm:py-3 rounded-full inline-flex items-center no-underline text-sm sm:text-base"
            >
              Get In Touch
            </a>
          </motion.div>

          <motion.div
            className="mt-8 flex flex-wrap gap-2.5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.65, duration: 0.5 }}
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
          className="spotlight-card rounded-2xl p-5 md:p-6"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5, ease: 'easeOut' }}
        >
          <div className="flex items-center gap-4">
            <TiltCard>
              <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-xl bg-surface-elevated p-2 border border-white/10">
                {data.card.icon ? (
                  <i
                    className={`${data.card.icon} text-aqua text-xl sm:text-2xl`}
                    aria-hidden="true"
                  />
                ) : (
                  <img
                    src={data.card.logo}
                    alt={data.card.logoAlt}
                    className="max-h-full max-w-full object-contain"
                    fetchpriority="high"
                  />
                )}
              </div>
            </TiltCard>
            <div className="min-w-0">
              <p className="font-mono text-[0.7rem] sm:text-xs uppercase tracking-[0.14em] text-aqua/80">
                {data.card.eyebrow}
              </p>
              <p className="text-offwhite text-sm sm:text-base font-semibold leading-snug">
                {data.card.title}
              </p>
              <p className="text-offwhite/55 text-xs sm:text-sm mt-1">
                {data.card.subtitle}
              </p>
            </div>
          </div>

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
        className="hidden md:flex mx-auto mt-14 w-fit flex-col items-center gap-2 text-offwhite/40 hover:text-aqua transition-colors duration-200 no-underline"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.5 }}
      >
        <span className="font-mono text-[0.7rem] uppercase tracking-[0.2em]">Scroll</span>
        <i className="fa-solid fa-chevron-down scroll-cue text-sm" aria-hidden="true" />
      </motion.a>
    </section>
  )
}
