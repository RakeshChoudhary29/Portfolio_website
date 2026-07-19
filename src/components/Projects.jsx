import { motion } from 'framer-motion'
import useSpotlight from '../hooks/useSpotlight'

// Accent colors cycle per card so each has its own identity without needing images.
const ACCENTS = [
  { text: 'text-cyan', bar: 'bg-cyan' },
  { text: 'text-magenta', bar: 'bg-magenta' },
  { text: 'text-aqua', bar: 'bg-aqua' },
  { text: 'text-hotmag', bar: 'bg-hotmag' },
]

function LinkButton({ link }) {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-surface-elevated px-3.5 py-1.5 text-offwhite/70 hover:text-aqua hover:border-aqua/25 transition-colors duration-200 font-mono text-[0.7rem] uppercase tracking-[0.1em] no-underline"
    >
      <i className={link.icon} aria-hidden="true" />
      {link.label}
    </a>
  )
}

/** Non-interactive status tag for client/production work with no public link. */
function StatusBadge({ status }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 font-mono text-[0.65rem] uppercase tracking-[0.12em] text-offwhite/50">
      <span className="h-1.5 w-1.5 rounded-full bg-aqua/80 animate-pulse" aria-hidden="true" />
      {status}
    </span>
  )
}

function ProjectCard({ project, index }) {
  const spotlight = useSpotlight()
  const accent = ACCENTS[index % ACCENTS.length]

  return (
    <motion.article
      {...spotlight}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.45, ease: 'easeOut', delay: (index % 2) * 0.08 }}
      whileHover={{ y: -4 }}
      className="spotlight-card group relative flex h-full flex-col overflow-hidden rounded-2xl p-6 sm:p-7"
    >
      {/* Accent top bar */}
      <span
        aria-hidden="true"
        className={`absolute inset-x-0 top-0 h-0.5 ${accent.bar} opacity-70`}
      />

      <div className="flex items-start justify-between gap-4">
        <i
          className={`fa-regular fa-folder-open text-3xl sm:text-4xl ${accent.text} transition-transform duration-300 group-hover:-translate-y-0.5`}
          aria-hidden="true"
        />
        <span className="font-mono text-2xl sm:text-3xl font-bold text-white/[0.06] leading-none select-none">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      <p className="mt-5 font-mono text-[0.7rem] uppercase tracking-[0.14em] text-aqua/70">
        {project.label}
      </p>

      <h3 className="mt-1.5 text-xl sm:text-2xl font-bold leading-snug text-offwhite transition-colors duration-200 group-hover:text-cyan">
        {project.title}
      </h3>

      <p className="mt-3 text-sm sm:text-[0.95rem] text-offwhite/65 leading-relaxed">
        {project.description}
      </p>

      <ul className="mt-5 flex flex-wrap gap-2 list-none p-0 font-mono text-[0.65rem] uppercase tracking-[0.1em] text-offwhite/50">
        {project.techs.map((tech) => (
          <li
            key={tech}
            className="rounded-full border border-white/10 bg-surface-elevated px-2.5 py-1 transition-colors duration-200 hover:border-aqua/30 hover:text-offwhite/75"
          >
            {tech}
          </li>
        ))}
      </ul>

      <div className="mt-auto flex flex-wrap items-center gap-2.5 pt-5">
        {project.links.length > 0 ? (
          project.links.map((link) => <LinkButton key={link.url} link={link} />)
        ) : (
          <StatusBadge status={project.status || 'In Production'} />
        )}
      </div>
    </motion.article>
  )
}

export default function Projects({ data }) {
  return (
    <section id="projects" className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-24">
      <motion.div
        className="max-w-2xl mb-10 md:mb-14"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.45 }}
      >
        <p className="section-label !text-aqua/70">
          <span className="text-offwhite/30 mr-2">04.</span>
          {data.sectionLabel}
        </p>
        <h2 className="text-offwhite font-sans text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          {data.title}
        </h2>
        <p className="text-offwhite/60 text-base md:text-lg mt-3 sm:mt-4 leading-relaxed">
          {data.description}
        </p>
      </motion.div>

      <div className="grid gap-5 sm:gap-6 md:grid-cols-2">
        {data.items.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  )
}
