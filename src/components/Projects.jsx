function LinkButton({ link }) {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-offwhite/75 hover:text-aqua hover:border-aqua/30 transition-colors duration-200 font-mono text-xs uppercase tracking-[0.12em] no-underline"
    >
      <i className={link.icon} aria-hidden="true" />
      {link.label}
    </a>
  )
}

function ProjectVisual({ project }) {
  if (project.image) {
    return (
      <div className="rounded-[1.75rem] border border-aqua/15 bg-black/20 p-3 shadow-2xl">
        <img
          src={project.image}
          alt={project.imageAlt}
          className="w-full rounded-[1.1rem] object-cover aspect-[16/10]"
          loading="lazy"
          decoding="async"
        />
      </div>
    )
  }

  return (
    <div className="rounded-[1.75rem] border border-aqua/15 bg-[linear-gradient(135deg,rgba(75,13,73,0.95),rgba(13,49,75,0.9))] p-3 shadow-2xl">
      <div className="aspect-[16/10] w-full rounded-[1.1rem] border border-white/10 bg-black/10 flex flex-col items-center justify-center text-center px-8">
        <div className="h-16 w-16 rounded-2xl border border-white/15 bg-white/10 flex items-center justify-center text-white text-xl font-bold tracking-[0.18em]">
          {project.placeholder}
        </div>
        <p className="text-white/90 text-lg font-semibold mt-6">{project.title}</p>
        <p className="text-white/60 text-sm mt-2">Portfolio snapshot</p>
      </div>
    </div>
  )
}

function ProjectCard({ project, portfolioKey }) {
  const contentOrder = project.reverse ? 'lg:order-1' : 'lg:order-2'
  const imageOrder = project.reverse ? 'lg:order-2' : 'lg:order-1'
  const params = new URLSearchParams()

  if (portfolioKey !== 'software') {
    params.set('type', portfolioKey)
  }

  params.set('project', project.id)

  const projectHref = `/?${params.toString()}`

  return (
    <article className="grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-12 lg:items-center">
      <div className={imageOrder}>
        <ProjectVisual project={project} />
      </div>

      <div className={`${contentOrder} text-left`}>
        <p className="font-mono text-sm text-aqua/80 mb-2 tracking-widest uppercase">{project.label}</p>
        <h3 className="text-aqua text-2xl md:text-3xl font-bold mb-5 leading-snug">
          <a href={projectHref} className="text-aqua no-underline hover:text-magenta transition-colors duration-200">
            {project.title}
          </a>
        </h3>

        <div className="black-box border border-white/8 shadow-2xl">
          <p className="text-base text-offwhite/85 leading-relaxed">{project.description}</p>
        </div>

        {project.links.length > 0 ? (
          <div className="flex gap-3 mt-5 flex-wrap">
            {project.links.map((link) => (
              <LinkButton key={link.url} link={link} />
            ))}
          </div>
        ) : null}

        <ul className="flex flex-wrap gap-3 list-none p-0 m-0 font-mono text-xs text-offwhite/60 mt-5 uppercase tracking-[0.12em]">
          {project.techs.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-2"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}

export default function Projects({ data, portfolioKey }) {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-4 sm:px-6 py-24">
      <div className="max-w-2xl mb-14 md:mb-16">
        <p className="section-label !text-aqua/70 mb-3">{data.sectionLabel}</p>
        <h2 className="text-white font-sans text-5xl md:text-6xl font-bold leading-tight">
          {data.title}
        </h2>
        <p className="text-offwhite/65 text-base md:text-lg mt-4 leading-8">
          {data.description}
        </p>
      </div>

      <div className="flex flex-col gap-16 md:gap-20">
        {data.items.map((project, index) => (
          <div
            key={project.id}
            className={index === 0 ? '' : 'border-t border-white/10 pt-16 md:pt-20'}
          >
            <ProjectCard project={project} portfolioKey={portfolioKey} />
          </div>
        ))}
      </div>
    </section>
  )
}
