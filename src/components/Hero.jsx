import { motion } from 'framer-motion'
import MagneticButton from './ui/MagneticButton'
import TiltCard from './ui/TiltCard'

export default function Hero({ data }) {
  return (
    <section
      id="intro"
      className="hero-bg relative max-w-6xl mx-auto px-4 sm:px-6 pt-20 pb-24 md:pt-24 md:pb-28"
    >
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_340px] lg:items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <p className="section-label">{data.sectionLabel}</p>

          <motion.p 
            className="font-mono text-offwhite/70 text-base md:text-lg mb-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {data.intro}
          </motion.p>

          <motion.h1 
            className="font-sans text-transparent bg-clip-text bg-gradient-to-r from-aqua to-cyan text-5xl sm:text-6xl md:text-7xl font-bold mb-4 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {data.name}
          </motion.h1>

          <motion.p 
            className="text-offwhite text-2xl md:text-3xl font-semibold leading-tight max-w-2xl mb-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {data.title}
          </motion.p>

          <motion.p 
            className="text-offwhite/70 text-lg md:text-xl leading-relaxed max-w-3xl mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            {data.description}
          </motion.p>

          <motion.div 
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <MagneticButton
              href="#projects"
              className="bg-cyan text-black hover:bg-cyan/90 font-mono px-7 py-3 rounded-full transition-colors duration-200 no-underline text-base font-bold shadow-[0_0_20px_rgba(79,172,254,0.3)]"
            >
              View Projects
              <i className="fa-solid fa-arrow-right ml-2 text-sm" aria-hidden="true" />
            </MagneticButton>
            <a
              href="#contact"
              className="border border-aqua text-aqua hover:bg-aqua/10 font-mono px-7 py-3 rounded-md transition-colors duration-200 inline-flex items-center no-underline text-base"
            >
              Get In Touch
            </a>
          </motion.div>

          <motion.div 
            className="mt-10 flex flex-wrap gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            {data.chips.map((chip) => (
              <span
                key={chip}
                className="border border-white/10 bg-white/5 text-offwhite/70 rounded-full px-4 py-2 text-sm"
              >
                {chip}
              </span>
            ))}
          </motion.div>
        </motion.div>

        <motion.aside 
          className="surface-card rounded-[1.5rem] p-5 md:p-6"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.6, ease: 'easeOut' }}
        >
          <div className="flex items-center gap-4">
            <TiltCard>
              <div className="flex h-16 w-16 items-center justify-center rounded-[1rem] bg-black/50 p-2.5 shadow-lg border border-white/10">
                <img
                  src={data.card.logo}
                  alt={data.card.logoAlt}
                  className="max-h-full max-w-full object-contain filter brightness-200"
                  fetchpriority="high"
                />
              </div>
            </TiltCard>
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-aqua/80">
                {data.card.eyebrow}
              </p>
              <p className="text-white text-base font-semibold leading-snug">
                {data.card.title}
              </p>
              <p className="text-offwhite/60 text-sm mt-1">
                {data.card.subtitle}
              </p>
            </div>
          </div>

          <div className="mt-6 space-y-3">
            {data.card.highlights.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-xl border border-white/8 bg-black/15 px-4 py-3"
              >
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-cyan flex-shrink-0 shadow-[0_0_8px_rgba(79,172,254,0.8)]" />
                <p className="text-offwhite/72 text-sm leading-6">{item}</p>
              </div>
            ))}
          </div>
        </motion.aside>
      </div>
    </section>
  )
}
