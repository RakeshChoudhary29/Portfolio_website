import ticketImg from '../assets/Ticket3.jpg'
import shortestPathImg from '../assets/ShortestPath.png'
import titanicImg from '../assets/Titanic3.jpg'

const projects = [
  {
    id: 'movie-ticket',
    label: 'Featured Project',
    title: 'Movie Ticket Booking System',
    description:
      'A comprehensive movie ticket booking system that facilitates seamless purchase of tickets and efficient management of booking details. Features real-time seat availability with sold seats highlighted in red and available seats in green.',
    links: [
      {
        url: 'https://github.com/RakeshChoudhary29/Movie-Ticket-Booking-System',
        label: 'Source Code',
        icon: 'fa-brands fa-github',
      },
    ],
    techs: ['C++', 'File Handling', 'OOP'],
    image: ticketImg,
    imageAlt: 'Movie Ticket Booking System screenshot',
    reverse: false,
  },
  {
    id: 'shortest-path',
    label: 'Featured Project',
    title: 'Shortest Path Visualizer',
    description:
      "An interactive graph tool that calculates and visualizes the shortest path between user-selected nodes using Dijkstra's algorithm. Provides detailed distance breakdowns, helping users understand pathfinding step by step.",
    links: [
      {
        url: 'https://github.com/RakeshChoudhary29/Shortest-Path',
        label: 'Source Code',
        icon: 'fa-brands fa-github',
      },
      {
        url: 'https://rakeshchoudhary29.github.io/Shortest-Path/',
        label: 'Live Demo',
        icon: 'fa-solid fa-arrow-up-right-from-square',
      },
    ],
    techs: ['HTML', 'CSS', 'JavaScript'],
    image: shortestPathImg,
    imageAlt: 'Shortest Path visualizer screenshot',
    reverse: true,
  },
  {
    id: 'titanic',
    label: 'Featured Project',
    title: 'Titanic Survival Analysis',
    description:
      'A data analysis system that uncovers the factors influencing Titanic passenger survival. It uses intuitive visualizations to make pattern exploration in the dataset easier to understand.',
    links: [
      {
        url: 'https://github.com/RakeshChoudhary29/Titanic',
        label: 'Source Code',
        icon: 'fa-brands fa-github',
      },
    ],
    techs: ['Python', 'Google Colab', 'Statistics'],
    image: titanicImg,
    imageAlt: 'Titanic survival analysis screenshot',
    reverse: false,
  },
]

function LinkButton({ link }) {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 text-magenta hover:text-hotmag transition-colors duration-200 font-mono text-sm no-underline"
    >
      <i className={link.icon} aria-hidden="true" />
      {link.label}
    </a>
  )
}

function ProjectCard({ project }) {
  const { label, title, description, links, techs, image, imageAlt, reverse } = project

  const textBlock = (
    <div
      className={`row-start-1 z-10 ${
        reverse ? 'col-span-5 col-start-1 text-left' : 'col-span-5 col-start-8 text-right'
      }`}
    >
      <div className="rounded-xl">
        <p className="font-mono text-sm text-aqua/80 mb-2 tracking-widest uppercase">{label}</p>
        <h3 className="text-aqua text-3xl font-bold mb-5 leading-snug">{title}</h3>

        <div className="black-box shadow-2xl border border-white/5 hover:border-aqua/20 transition-colors duration-300">
          <p className="text-base text-offwhite/85 leading-relaxed">{description}</p>
          <div className={`flex gap-4 mt-5 flex-wrap ${reverse ? 'justify-start' : 'justify-end'}`}>
            {links.map((link) => (
              <LinkButton key={link.url} link={link} />
            ))}
          </div>
        </div>

        <div className="mt-5">
          <ul
            className={`flex flex-wrap gap-x-6 gap-y-2 list-none p-0 m-0 font-mono text-sm text-offwhite/60 ${
              reverse ? 'justify-start' : 'justify-end'
            }`}
          >
            {techs.map((tech) => (
              <li key={tech} className="hover:text-aqua transition-colors cursor-default">
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )

  const imageBlock = (
    <div
      className={`row-start-1 ${
        reverse ? 'col-span-7 col-start-6' : 'col-span-7 col-start-1'
      }`}
    >
      <img
        src={image}
        alt={imageAlt}
        className="project-img shadow-2xl hover:border-magenta/60 transition-colors duration-300"
      />
    </div>
  )

  return (
    <article className="relative">
      <div className="md:hidden flex flex-col gap-6">
        <div>
          <p className="font-mono text-xs text-aqua/80 mb-1 tracking-widest uppercase">{label}</p>
          <h3 className="text-aqua text-2xl font-bold">{title}</h3>
        </div>
        <img src={image} alt={imageAlt} className="project-img !m-0 shadow-lg" />
        <div className="black-box border border-white/5 shadow-xl">
          <p className="text-offwhite/85 text-base leading-relaxed">{description}</p>
          <div className="flex gap-4 mt-4 flex-wrap">
            {links.map((link) => (
              <LinkButton key={link.url} link={link} />
            ))}
          </div>
        </div>
        <ul className="flex flex-wrap gap-x-5 gap-y-2 list-none p-0 m-0 font-mono text-sm text-offwhite/60">
          {techs.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      </div>

      <div className="hidden md:grid grid-cols-12 gap-4 lg:gap-6 items-center">
        {reverse ? (
          <>
            {textBlock}
            {imageBlock}
          </>
        ) : (
          <>
            {imageBlock}
            {textBlock}
          </>
        )}
      </div>
    </article>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-4 py-24">
      <div className="max-w-2xl mb-14 md:mb-16">
        <p className="section-label !text-aqua/70 mb-3">04. Work</p>
        <h2 className="text-white font-sans text-4xl md:text-5xl font-bold leading-tight">
          Featured Projects
        </h2>
        <p className="text-offwhite/65 text-base md:text-lg mt-4 leading-8">
          Selected work that reflects my problem solving, frontend work, and practical development experience.
        </p>
      </div>

      <div className="flex flex-col gap-20 md:gap-28">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}
