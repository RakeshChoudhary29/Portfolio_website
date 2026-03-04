import ticketImg from '../assets/Ticket3.jpg'
import shortestPathImg from '../assets/ShortestPath.png'
import titanicImg from '../assets/Titanic3.jpg'

const projects = [
  {
    id: 'movie-ticket',
    label: 'Latest Project',
    title: 'Movie Ticket Booking System',
    description:
      'Developed a movie ticket booking system to facilitate the seamless purchase of tickets and effective management of ticket details. Introduced an innovative feature that vividly depicts booking statuses — sold seats are distinctly highlighted in red, while available seats are presented in a striking green.',
    links: [
      { url: 'https://github.com/RakeshChoudhary29/Movie-Ticket-Booking-System', label: 'SourceCode' },
    ],
    techs: ['C++', 'File Handling', 'OOPS'],
    image: ticketImg,
    imageAlt: 'Movie Ticket Booking System',
    reverse: false,
  },
  {
    id: 'shortest-path',
    label: 'Latest Project',
    title: 'Shortest Path',
    description:
      'Successfully constructed a project that calculates the shortest path between user-selected nodes. Provided users with detailed distance information for each path, contributing to informed decision-making.',
    links: [
      { url: 'https://github.com/RakeshChoudhary29/Shortest-Path', label: 'Source Code' },
      { url: 'https://rakeshchoudhary29.github.io/Shortest-Path/', label: 'WebsiteLink' },
    ],
    techs: ['HTML', 'CSS', 'JavaScript'],
    image: shortestPathImg,
    imageAlt: 'Shortest Path Screenshot',
    reverse: true,
  },
  {
    id: 'titanic',
    label: 'Latest Project',
    title: 'Titanic Survival Analysis',
    description:
      'Titanic Dataset Analysis System providing insights into the factors influencing passenger survival. Enables users to explore survival patterns with intuitive visualizations — survivors highlighted in green and non-survivors in red.',
    links: [
      { url: 'https://github.com/RakeshChoudhary29/Titanic', label: 'SourceCode' },
    ],
    techs: ['Python', 'Google Colab', 'Statistics'],
    image: titanicImg,
    imageAlt: 'Titanic Survival Analysis',
    reverse: false,
  },
]

function ProjectCard({ project }) {
  const { label, title, description, links, techs, image, imageAlt, reverse } = project

  return (
    <article className="mb-24 md:mb-40">
      {/* ── Mobile layout ── */}
      <div className="md:hidden flex flex-col gap-6">
        <div>
          <h4 className="font-mono text-base text-offwhite/70 mb-1">{label}</h4>
          <h3 className="text-aqua text-3xl font-bold">{title}</h3>
        </div>
        
        <div className="relative">
          <img src={image} alt={imageAlt} className="project-img !m-0 shadow-lg" />
        </div>

        <div className="black-box !bg-black/95 backdrop-blur-sm border border-white/5 space-y-4 shadow-xl">
          <p className="text-offwhite text-base leading-relaxed">
            {description}
            <br />
            {links.map((link, i) => (
              <span key={link.url} className="inline-block mt-4 mr-4">
                {link.label} <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-magenta hover:text-hotmag underline ml-1">Link</a>
                {i < links.length - 1 && <br />}
              </span>
            ))}
          </p>
        </div>

        <div>
          <h4 className="font-mono text-sm text-offwhite/80 mb-3 font-semibold uppercase tracking-wider">Technologies used include:</h4>
          <ul className="flex flex-wrap gap-x-6 gap-y-3 list-none p-0 m-0 font-sans text-base text-offwhite/90">
            {techs.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* ── Desktop layout (10-column overlapping grid) ── */}
      <div className={`hidden md:grid grid-cols-10 gap-0 items-center`}>

        {!reverse ? (
          <>
            {/* Image: cols 1-6 */}
            <div className="col-start-1 col-end-7 row-start-1 group cursor-pointer transition-transform duration-500 hover:scale-[1.01]">
              <img src={image} alt={imageAlt} className="project-img !m-0 shadow-2xl transition-all duration-300 group-hover:border-magenta/50" />
            </div>
            {/* Text: cols 5-11 */}
            <div className="col-start-5 col-end-11 row-start-1 text-right z-10 pointer-events-none">
              <div className="pointer-events-auto">
                <h4 className="font-mono text-base text-offwhite/70 mb-0 tracking-tight">{label}</h4>
                <h3 className="text-aqua text-[34px] font-bold mb-6">{title}</h3>
                
                <div className="black-box !px-10 !py-8 shadow-2xl border border-white/5 relative group transition-all duration-300 hover:border-aqua/20">
                  <p className="text-left leading-relaxed text-[17px] text-offwhite/90">
                    {description}
                    <br />
                    {links.map((link) => (
                      <span key={link.url} className="inline-block mt-4 mr-6">
                        {link.label} <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-magenta hover:text-hotmag underline ml-1">Link</a>
                      </span>
                    ))}
                  </p>
                </div>

                <div className="mt-8">
                  <h4 className="font-mono text-sm text-offwhite/70 mb-4 uppercase tracking-widest font-bold">Technologies used include:</h4>
                  <ul className="flex flex-wrap gap-x-8 gap-y-2 list-none p-0 m-0 font-sans text-base text-offwhite/90 justify-end">
                    {techs.map((t) => (
                      <li key={t} className="hover:text-aqua transition-colors cursor-default">{t}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Text: cols 1-7 */}
            <div className="col-start-1 col-end-7 row-start-1 text-left z-10 pointer-events-none">
              <div className="pointer-events-auto">
                <h4 className="font-mono text-base text-offwhite/70 mb-0 tracking-tight">{label}</h4>
                <h3 className="text-aqua text-[34px] font-bold mb-6">{title}</h3>
                
                <div className="black-box !px-10 !py-8 shadow-2xl border border-white/5 relative group transition-all duration-300 hover:border-aqua/20">
                  <p className="text-left leading-relaxed text-[17px] text-offwhite/90">
                    {description}
                    <br />
                    {links.map((link) => (
                      <span key={link.url} className="inline-block mt-4 mr-6">
                        {link.label} <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-magenta hover:text-hotmag underline ml-1">Link</a>
                      </span>
                    ))}
                  </p>
                </div>

                <div className="mt-8">
                  <h4 className="font-mono text-sm text-offwhite/70 mb-4 uppercase tracking-widest font-bold">Technologies used include:</h4>
                  <ul className="flex flex-wrap gap-x-8 gap-y-2 list-none p-0 m-0 font-sans text-base text-offwhite/90 justify-start">
                    {techs.map((t) => (
                      <li key={t} className="hover:text-aqua transition-colors cursor-default">{t}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            {/* Image: cols 5-11 */}
            <div className="col-start-5 col-end-11 row-start-1 group cursor-pointer transition-transform duration-500 hover:scale-[1.01]">
              <img src={image} alt={imageAlt} className="project-img !m-0 shadow-2xl transition-all duration-300 group-hover:border-magenta/50" />
            </div>
          </>
        )}
      </div>
    </article>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-4 py-24">
      <h2 className="text-white font-sans text-[40px] font-bold mb-20 text-center md:text-left">
        Projects I am Proud of
      </h2>
      <div className="space-y-12 md:space-y-24">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}
