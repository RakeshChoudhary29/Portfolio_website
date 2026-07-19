import SectionHeader from './SectionHeader'
import TechChips from './TechChips'
import { Timeline, TimelineItem } from './ui/Timeline'

function ExperienceCard({ item, index }) {
  return (
    <TimelineItem accent="aqua" index={index}>
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

        <TechChips items={item.techs} />
      </div>
    </TimelineItem>
  )
}

export default function Experience({ data }) {
  return (
    <section id="experience" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          index={2}
          label={data.sectionLabel}
          title={data.title}
          description={data.description}
          className="max-w-3xl mb-10 md:mb-12"
        />

        <Timeline accent="aqua">
          {data.items.map((item, index) => (
            <ExperienceCard key={`${item.company}-${item.role}`} item={item} index={index} />
          ))}
        </Timeline>
      </div>
    </section>
  )
}
