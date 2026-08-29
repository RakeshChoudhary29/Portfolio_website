import SectionHeader from './SectionHeader'
import { Timeline, TimelineItem } from './ui/Timeline'

function EducationCard({ item, index }) {
  return (
    <TimelineItem accent="cyan" glow="rgba(56, 189, 248, 0.14)" index={index}>
      <div className="mb-5 md:mb-0">
        <p className="font-mono text-xs sm:text-sm text-aqua mb-3">{item.period}</p>
        <div className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-xl bg-white p-2 shadow-sm">
          {/* No width/height here: the wrapper is a fixed 64/80px box, so it
              already reserves the space, and the two logos differ in intrinsic
              size — any single pair of attributes would be a lie. */}
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

        <div className="mt-5 pt-4 border-t border-white/8 flex items-center gap-3 flex-wrap">
          <p className="text-offwhite/50 text-xs sm:text-sm uppercase tracking-[0.1em]">
            Academic Performance
          </p>
          <p className="inline-flex items-center rounded-full border border-magenta/20 bg-magenta/10 px-3.5 py-1.5 text-magenta font-semibold text-sm">
            {item.score}
          </p>
        </div>
      </div>
    </TimelineItem>
  )
}

export default function Education({ data }) {
  return (
    <section id="education" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          index={3}
          label={data.sectionLabel}
          title={data.title}
          description={data.description}
          className="max-w-3xl mb-10 md:mb-12"
        />

        <Timeline accent="cyan">
          {data.items.map((item, index) => (
            <EducationCard key={item.institution} item={item} index={index} />
          ))}
        </Timeline>
      </div>
    </section>
  )
}
