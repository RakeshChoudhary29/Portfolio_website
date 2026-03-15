export default function Experience({ data }) {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mb-14">
          <p className="section-label mb-3">{data.sectionLabel}</p>
          <h2 className="text-white text-5xl md:text-6xl font-bold leading-tight">
            {data.title}
          </h2>
          <p className="text-offwhite/65 text-base md:text-lg mt-4 leading-8">
            {data.description}
          </p>
        </div>

        <div className="space-y-8">
          {data.items.map((item) => (
            <article
              key={`${item.company}-${item.role}`}
              className="surface-card rounded-[1.5rem] p-6 md:p-8 md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-8"
            >
              <div className="mb-6 md:mb-0">
                <p className="font-mono text-sm text-aqua mb-3">{item.period}</p>
                <p className="text-offwhite font-semibold text-lg leading-snug">{item.company}</p>
                <p className="text-offwhite/60 text-sm mt-1">{item.location}</p>
              </div>

              <div>
                <h3 className="text-aqua text-2xl font-bold mb-4">{item.role}</h3>
                <ul className="space-y-3 text-offwhite/75">
                  {item.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-aqua flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
