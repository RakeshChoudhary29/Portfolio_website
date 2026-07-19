import { motion } from 'framer-motion'
import useSpotlight from '../hooks/useSpotlight'

function ExperienceCard({ item, index }) {
  const spotlight = useSpotlight()

  return (
    <div className="relative">
      {/* Timeline dot, aligned with the rail in the parent container */}
      <span
        aria-hidden="true"
        className="hidden md:block absolute -left-[37px] top-8 h-2.5 w-2.5 rounded-full border-2 border-aqua bg-black"
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
          <p className="font-mono text-xs sm:text-sm text-aqua mb-2">{item.period}</p>
          <p className="text-offwhite font-semibold text-base sm:text-lg leading-snug">{item.company}</p>
          <p className="text-offwhite/55 text-sm mt-1">{item.location}</p>
        </div>

        <div>
          <h3 className="text-cyan text-xl sm:text-2xl font-bold mb-3 sm:mb-4">{item.role}</h3>
          <ul className="space-y-2.5 text-offwhite/70 text-sm sm:text-base list-none p-0 m-0">
            {item.points.map((point) => (
              <li key={point} className="flex gap-3">
                <span className="text-aqua font-mono select-none flex-shrink-0" aria-hidden="true">
                  ▹
                </span>
                <span>{point}</span>
              </li>
            ))}
          </ul>

          {item.techs?.length ? (
            <ul className="mt-5 flex flex-wrap gap-2 list-none p-0 m-0 font-mono text-[0.65rem] uppercase tracking-[0.1em] text-offwhite/50">
              {item.techs.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full border border-white/10 bg-surface-elevated px-2.5 py-1 transition-colors duration-200 hover:border-aqua/30 hover:text-offwhite/75"
                >
                  {tech}
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </motion.article>
    </div>
  )
}

export default function Experience({ data }) {
  return (
    <section id="experience" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-10 md:mb-12">
          <p className="section-label">
            <span className="text-offwhite/30 mr-2">02.</span>
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
            className="hidden md:block absolute left-0 top-3 bottom-3 w-px bg-gradient-to-b from-aqua/50 via-white/10 to-transparent"
          />
          {data.items.map((item, index) => (
            <ExperienceCard key={`${item.company}-${item.role}`} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
