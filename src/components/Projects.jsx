import { motion } from 'framer-motion'
import useSpotlight from '../hooks/useSpotlight'
import { fadeUp, EASE_OUT } from '../constants/motion'

// Accent colors cycle per card so each has its own identity without needing images.
const ACCENTS = [
  { text: 'text-cyan', bar: 'bg-cyan', soft: 'bg-cyan/25', rgb: '56, 189, 248' },
  { text: 'text-magenta', bar: 'bg-magenta', soft: 'bg-magenta/25', rgb: '227, 16, 203' },
  { text: 'text-aqua', bar: 'bg-aqua', soft: 'bg-aqua/25', rgb: '94, 234, 212' },
  { text: 'text-hotmag', bar: 'bg-hotmag', soft: 'bg-hotmag/25', rgb: '255, 23, 228' },
]

const VISUAL_VARIANTS = ['dashboard', 'stream', 'chart', 'terminal', 'graph']

function SkeletonDashboard({ accent }) {
  return (
    <div className="flex h-full gap-2.5">
      <div className="w-9 space-y-1.5 rounded-md bg-white/[0.05] p-1.5">
        <span className={`block h-1.5 w-full rounded-full ${accent.soft}`} />
        <span className="block h-1.5 w-full rounded-full bg-white/10" />
        <span className="block h-1.5 w-full rounded-full bg-white/10" />
      </div>
      <div className="flex-1 space-y-2">
        <div className="h-5 rounded-md bg-white/[0.06]" />
        <div className="grid grid-cols-3 gap-2">
          <div className={`h-9 rounded-md ${accent.soft}`} />
          <div className="h-9 rounded-md bg-white/[0.06]" />
          <div className="h-9 rounded-md bg-white/[0.06]" />
        </div>
        <div className="h-8 rounded-md bg-white/[0.05]" />
      </div>
    </div>
  )
}

function SkeletonStream({ accent }) {
  return (
    <div className="flex h-full flex-col gap-2">
      <div className="relative grid flex-1 place-items-center rounded-md bg-white/[0.05]">
        <span className="absolute left-2 top-2 h-1.5 w-10 rounded-full bg-white/10" />
        <span className={`grid h-9 w-9 place-items-center rounded-full ${accent.soft}`}>
          <i className={`fa-solid fa-play pl-0.5 text-[0.6rem] ${accent.text}`} aria-hidden="true" />
        </span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
        <span className={`block h-full w-2/3 rounded-full ${accent.bar} opacity-60`} />
      </div>
    </div>
  )
}

function SkeletonChart({ accent }) {
  const heights = [35, 55, 40, 72, 58, 90, 48]
  return (
    <div className="flex h-full items-end gap-2 px-1 pb-1">
      {heights.map((height, i) => (
        <span
          key={i}
          style={{ height: `${height}%` }}
          className={`flex-1 rounded-t-md ${i === 5 ? `${accent.bar} opacity-50` : 'bg-white/[0.07]'}`}
        />
      ))}
    </div>
  )
}

function SkeletonTerminal({ accent }) {
  const widths = ['w-24', 'w-36', 'w-16', 'w-28']
  return (
    <div className="flex h-full flex-col justify-center gap-2.5 px-1">
      {widths.map((width, i) => (
        <div key={i} className="flex items-center gap-2.5">
          <span className={`font-mono text-[0.65rem] leading-none ${i % 2 === 0 ? accent.text : 'text-white/25'}`}>
            $
          </span>
          <span className={`h-1.5 ${width} rounded-full ${i === 0 ? accent.soft : 'bg-white/10'}`} />
        </div>
      ))}
    </div>
  )
}

function SkeletonGraph({ accent }) {
  const nodes = [
    { left: '12%', top: '58%', hot: true },
    { left: '34%', top: '22%', hot: false },
    { left: '52%', top: '64%', hot: false },
    { left: '72%', top: '30%', hot: true },
    { left: '88%', top: '60%', hot: false },
  ]
  const edges = [
    { left: '14%', top: '46%', width: '24%', angle: -32 },
    { left: '36%', top: '42%', width: '20%', angle: 40 },
    { left: '55%', top: '48%', width: '22%', angle: -34 },
    { left: '74%', top: '44%', width: '17%', angle: 36 },
  ]
  return (
    <div className="relative h-full">
      {edges.map((edge, i) => (
        <span
          key={`e-${i}`}
          style={{ left: edge.left, top: edge.top, width: edge.width, transform: `rotate(${edge.angle}deg)` }}
          className="absolute h-px origin-left bg-white/15"
        />
      ))}
      {nodes.map((node, i) => (
        <span
          key={`n-${i}`}
          style={{ left: node.left, top: node.top }}
          className={`absolute h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full ${
            node.hot ? accent.bar : 'bg-white/20'
          }`}
        />
      ))}
    </div>
  )
}

const SKELETONS = {
  dashboard: SkeletonDashboard,
  stream: SkeletonStream,
  chart: SkeletonChart,
  terminal: SkeletonTerminal,
  graph: SkeletonGraph,
}

/**
 * Stylized app-window mockup: gives text-only projects a visual identity.
 * If a project ever gets a real screenshot, set `project.image` and it
 * replaces the skeleton. `tall` stretches the window to fill flagship cards.
 */
function ProjectVisual({ project, accent, index, tall = false }) {
  const variant = project.visual || VISUAL_VARIANTS[index % VISUAL_VARIANTS.length]
  const Skeleton = SKELETONS[variant] || SkeletonDashboard

  return (
    <div
      aria-hidden="true"
      className={`relative overflow-hidden rounded-xl border border-white/10 bg-black/40 ${
        tall ? 'mb-6 flex flex-col md:mb-0 md:h-full' : 'mb-6'
      }`}
    >
      <div className="flex items-center gap-1.5 border-b border-white/8 bg-white/[0.04] px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-white/15" />
        <span className="h-2 w-2 rounded-full bg-white/15" />
        <span className="h-2 w-2 rounded-full bg-white/15" />
        <span className="ml-2 min-w-0 flex-1 truncate rounded-md bg-white/[0.06] px-2.5 py-0.5 font-mono text-[0.6rem] text-offwhite/40">
          ~/projects/{project.id}
        </span>
      </div>

      <div
        className={`relative p-4 ${tall ? 'h-44 md:h-auto md:min-h-[230px] md:flex-1' : 'h-36 sm:h-40'}`}
        style={{
          background: `radial-gradient(120% 110% at 85% 0%, rgba(${accent.rgb}, 0.14) 0%, transparent 55%), radial-gradient(90% 90% at 10% 100%, rgba(${accent.rgb}, 0.07) 0%, transparent 60%)`,
        }}
      >
        {project.image ? (
          <img
            src={project.image}
            alt=""
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover object-top"
          />
        ) : (
          <div className="h-full transition-transform duration-500 ease-out group-hover:scale-[1.04]">
            <Skeleton accent={accent} />
          </div>
        )}
        <span className="pointer-events-none absolute bottom-1 right-3 select-none font-mono text-4xl font-bold leading-none text-white/[0.06]">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>
    </div>
  )
}

function LinkButton({ link }) {
  return (
    <motion.a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      whileTap={{ scale: 0.97 }}
      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-surface-elevated px-3.5 py-1.5 text-offwhite/70 hover:text-aqua hover:border-aqua/25 transition-colors duration-200 font-mono text-[0.7rem] uppercase tracking-[0.1em] no-underline"
    >
      <i className={link.icon} aria-hidden="true" />
      {link.label}
    </motion.a>
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

function ProjectCard({ project, index, featured = false, portfolioKey }) {
  const spotlight = useSpotlight()
  const accent = ACCENTS[index % ACCENTS.length]

  // Canonical per-project deep link (?project=<id>, +?type= for non-default
  // portfolios). Matches public/sitemap.xml and feeds project-specific SEO.
  const params = new URLSearchParams()
  if (portfolioKey && portfolioKey !== 'software') params.set('type', portfolioKey)
  params.set('project', project.id)
  const projectHref = `/?${params.toString()}`

  return (
    <div className={`dim-item h-full ${featured ? 'md:col-span-2' : ''}`}>
      <motion.article
        {...spotlight}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.45, ease: EASE_OUT, delay: (index % 2) * 0.08 }}
        whileHover={{ y: -4 }}
        className={`spotlight-card group relative flex h-full flex-col overflow-hidden rounded-2xl p-6 sm:p-7 ${
          featured ? 'md:grid md:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] md:gap-8' : ''
        }`}
      >
        {/* Accent top bar. !absolute: .spotlight-card > * forces position:relative
            on children, which would otherwise pull this bar into the grid flow. */}
        <span
          aria-hidden="true"
          className={`!absolute inset-x-0 top-0 h-0.5 ${accent.bar} opacity-70`}
        />

        <ProjectVisual project={project} accent={accent} index={index} tall={featured} />

        <div className="flex min-w-0 flex-1 flex-col">
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-aqua/70">
            {project.label}
          </p>

          <h3
            className={`mt-1.5 font-bold leading-snug text-offwhite ${
              featured ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-2xl'
            }`}
          >
            <a
              href={projectHref}
              className="no-underline text-inherit transition-colors duration-200 group-hover:text-cyan"
            >
              {project.title}
              <i
                className="fa-solid fa-arrow-right ml-2 text-sm text-offwhite/40 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-cyan"
                aria-hidden="true"
              />
            </a>
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
        </div>
      </motion.article>
    </div>
  )
}

export default function Projects({ data, portfolioKey }) {
  return (
    <section id="projects" className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-24">
      <motion.div className="max-w-2xl mb-10 md:mb-14" {...fadeUp()}>
        <p className="section-label !text-aqua/70">
          <span className="text-offwhite/30 mr-2">04.</span>
          {data.sectionLabel}
        </p>
        <h2 className="text-offwhite font-display text-fluid-h2 font-bold">
          {data.title}
        </h2>
        <p className="text-offwhite/60 text-base md:text-lg mt-3 sm:mt-4 leading-relaxed">
          {data.description}
        </p>
      </motion.div>

      <div className="dim-siblings grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2">
        {data.items.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            featured={index === 0}
            portfolioKey={portfolioKey}
          />
        ))}
      </div>
    </section>
  )
}
