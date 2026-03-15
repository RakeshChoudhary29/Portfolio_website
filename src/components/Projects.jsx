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
      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-offwhite/75 hover:text-aqua hover:border-aqua/30 transition-colors duration-200 font-mono text-xs uppercase tracking-[0.12em] no-underline"
    >
      <i className={link.icon} aria-hidden="true" />
      {link.label}
    </a>
  )
}

function ProjectCard({ project }) {
  const contentOrder = project.reverse ? 'lg:order-1' : 'lg:order-2'
  const imageOrder = project.reverse ? 'lg:order-2' : 'lg:order-1'

  return (
    <article className="grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-12 lg:items-center">
      <div className={imageOrder}>
        <div className="rounded-[1.75rem] border border-aqua/15 bg-black/20 p-3 shadow-2xl">
          <img
            src={project.image}
            alt={project.imageAlt}
            className="w-full rounded-[1.1rem] object-cover aspect-[16/10]"
          />
        </div>
      </div>

      <div className={`${contentOrder} text-left`}>
        <p className="font-mono text-sm text-aqua/80 mb-2 tracking-widest uppercase">{project.label}</p>
        <h3 className="text-aqua text-2xl md:text-3xl font-bold mb-5 leading-snug">
          {project.title}
        </h3>

        <div className="black-box border border-white/8 shadow-2xl">
          <p className="text-base text-offwhite/85 leading-relaxed">{project.description}</p>
        </div>

        <div className="flex gap-3 mt-5 flex-wrap">
          {project.links.map((link) => (
            <LinkButton key={link.url} link={link} />
          ))}
        </div>

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

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-4 sm:px-6 py-24">
      <div className="max-w-2xl mb-14 md:mb-16">
        <p className="section-label !text-aqua/70 mb-3">04. Work</p>
        <h2 className="text-white font-sans text-5xl md:text-6xl font-bold leading-tight">
          Featured Projects
        </h2>
        <p className="text-offwhite/65 text-base md:text-lg mt-4 leading-8">
          Selected work that reflects my problem solving, frontend work, and practical development experience.
        </p>
      </div>

      <div className="flex flex-col gap-16 md:gap-20">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={index === 0 ? '' : 'border-t border-white/10 pt-16 md:pt-20'}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </section>
  )
}
