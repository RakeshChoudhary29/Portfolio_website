import { motion } from 'framer-motion'
import useSpotlight from '../hooks/useSpotlight'

function EducationCard({ item, index }) {
  const spotlight = useSpotlight('rgba(56, 189, 248, 0.14)')

  return (
    <div className="relative">
      {/* Timeline dot, aligned with the rail in the parent container */}
      <span
        aria-hidden="true"
        className="hidden md:block absolute -left-[37px] top-8 h-2.5 w-2.5 rounded-full border-2 border-cyan bg-black"
      />

      <motion.article
        {...spotlight}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.4, delay: index * 0.08 }}
        whileHover={{ y: -3 }}
        className="spotlight-card rounded-2xl p-5 sm:p-6 md:p-8 md:grid md:grid-cols-[200px_minmax(0,1fr)] md:gap-8"
      >
        <div className="mb-5 md:mb-0">
          <p className="font-mono text-xs sm:text-sm text-aqua mb-3">{item.period}</p>
          <div className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-xl bg-white p-2 shadow-sm">
            <img
              src={item.logo}
              alt={item.logoAlt}
              className="max-h-full max-w-full object-contain"
              loading="lazy"
            />
          </div>
        </div>

        <div className="min-w-0">
          <h3 className="text-cyan text-xl sm:text-2xl font-bold leading-snug">
            {item.institution}
          </h3>
          <p className="text-offwhite/70 mt-2 leading-7 text-sm sm:text-base">{item.degree}</p>

          <div className="mt-5 pt-4 border-t border-white/8 flex items-center justify-between gap-4 flex-wrap">
            <p className="text-offwhite/50 text-xs sm:text-sm uppercase tracking-[0.1em]">
              Academic Performance
            </p>
            <p className="inline-flex items-center rounded-full border border-magenta/20 bg-magenta/10 px-3.5 py-1.5 text-magenta font-semibold text-sm">
              {item.score}
            </p>
          </div>
        </div>
      </motion.article>
    </div>
  )
}

export default function Education({ data }) {
  return (
    <section id="education" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-10 md:mb-12">
          <p className="section-label">
            <span className="text-offwhite/30 mr-2">03.</span>
            {data.sectionLabel}
          </p>
          <h2 className="text-offwhite font-display text-fluid-h2 font-bold">
            {data.title}
          </h2>
          <p className="text-offwhite/60 text-base md:text-lg mt-4 leading-relaxed">
            {data.description}
          </p>
        </div>

        <div className="relative space-y-5 md:space-y-6 md:pl-8">
          {/* Timeline rail */}
          <span
            aria-hidden="true"
            className="hidden md:block absolute left-0 top-3 bottom-3 w-px bg-gradient-to-b from-cyan/50 via-white/10 to-transparent"
          />
          {data.items.map((item, index) => (
            <EducationCard key={item.institution} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
