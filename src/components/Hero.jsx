export default function Hero({ data }) {
  return (
    <section
      id="intro"
      className="hero-bg relative max-w-6xl mx-auto px-4 sm:px-6 pt-20 pb-24 md:pt-24 md:pb-28"
    >
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_340px] lg:items-start">
        <div>
          <p className="section-label animate-fade-in-up">{data.sectionLabel}</p>

          <p className="font-mono text-offwhite/70 text-base md:text-lg mb-3 animate-fade-in-up animation-delay-200">
            {data.intro}
          </p>

          <h1 className="font-sans text-aqua text-5xl sm:text-6xl md:text-7xl font-bold mb-4 leading-tight animate-fade-in-up animation-delay-400">
            {data.name}
          </h1>

          <p className="text-offwhite text-2xl md:text-3xl font-semibold leading-tight max-w-2xl mb-5 animate-fade-in-up animation-delay-400">
            {data.title}
          </p>

          <p className="text-offwhite/70 text-lg md:text-xl leading-relaxed max-w-3xl mb-10 animate-fade-in-up animation-delay-600">
            {data.description}
          </p>

          <div className="flex flex-wrap gap-4 animate-fade-in-up animation-delay-800">
            <a
              href="#projects"
              className="bg-magenta hover:bg-hotmag text-white font-mono px-7 py-3 rounded-md transition-colors duration-200 inline-flex items-center no-underline text-base"
            >
              View Projects
              <i className="fa-solid fa-arrow-right ml-2 text-sm" aria-hidden="true" />
            </a>
            <a
              href="#contact"
              className="border border-aqua text-aqua hover:bg-aqua/10 font-mono px-7 py-3 rounded-md transition-colors duration-200 inline-flex items-center no-underline text-base"
            >
              Get In Touch
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-3 animate-fade-in-up animation-delay-800">
            {data.chips.map((chip) => (
              <span
                key={chip}
                className="border border-white/10 bg-white/5 text-offwhite/70 rounded-full px-4 py-2 text-sm"
              >
                {chip}
              </span>
            ))}
          </div>
        </div>

        <aside className="surface-card rounded-[1.5rem] p-5 md:p-6 animate-fade-in-up animation-delay-600">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-[1rem] bg-white p-2.5 shadow-lg">
              <img
                src={data.card.logo}
                alt={data.card.logoAlt}
                className="max-h-full max-w-full object-contain"
                fetchpriority="high"
              />
            </div>
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
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-aqua flex-shrink-0" />
                <p className="text-offwhite/72 text-sm leading-6">{item}</p>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </section>
  )
}
