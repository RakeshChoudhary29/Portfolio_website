export default function Education({ data }) {
  return (
    <section id="education" className="py-24 px-4 sm:px-6">
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

        <div className="grid gap-6 lg:grid-cols-2">
          {data.items.map((item) => (
            <article
              key={item.institution}
              className="surface-card rounded-[1.5rem] p-6 md:p-7 h-full"
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="flex h-20 w-20 items-center justify-center rounded-[1rem] bg-white p-2.5 shadow-lg">
                  <img
                    src={item.logo}
                    alt={item.logoAlt}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>

                <div className="min-w-0">
                  <p className="font-mono text-sm text-aqua mb-2">{item.period}</p>
                  <h3 className="text-offwhite text-xl md:text-2xl font-bold leading-snug">
                    {item.institution}
                  </h3>
                  <p className="text-offwhite/70 mt-2 leading-7">{item.degree}</p>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-white/8 flex items-center justify-between gap-4 flex-wrap">
                <p className="text-offwhite/55 text-sm uppercase tracking-[0.12em]">
                  Academic Performance
                </p>
                <p className="inline-flex items-center rounded-full border border-magenta/25 bg-magenta/10 px-4 py-2 text-magenta font-semibold">
                  {item.score}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
