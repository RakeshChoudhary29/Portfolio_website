import nitwLogo from '../assets/nitw-logo.png'

const highlights = [
  'Responsive UI and component-based frontend work',
  'MERN stack development with production experience',
  'Google Cloud Platform and performance-focused delivery',
]

export default function Hero() {
  return (
    <section
      id="intro"
      className="hero-bg relative max-w-6xl mx-auto px-4 sm:px-6 pt-20 pb-24 md:pt-24 md:pb-28"
    >
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_360px] lg:items-start">
        <div>
          <p className="section-label animate-fade-in-up">Introduction</p>

          <p className="font-mono text-offwhite/70 text-base md:text-lg mb-3 animate-fade-in-up animation-delay-200">
            Hi, my name is
          </p>

          <h1 className="font-sans text-aqua text-5xl sm:text-6xl md:text-7xl font-bold mb-4 leading-tight animate-fade-in-up animation-delay-400">
            Rakesh Choudhary
          </h1>

          <p className="text-offwhite text-2xl md:text-3xl font-semibold leading-tight max-w-2xl mb-5 animate-fade-in-up animation-delay-400">
            Full Stack Developer crafting scalable and clean web experiences.
          </p>

          <p className="text-offwhite/70 text-lg md:text-xl leading-relaxed max-w-3xl mb-10 animate-fade-in-up animation-delay-600">
            I work with <span className="text-aqua">React</span>,{' '}
            <span className="text-aqua">Next.js</span>,{' '}
            <span className="text-aqua">Node.js</span>, and{' '}
            <span className="text-aqua">MongoDB</span> to build responsive,
            user-focused applications with strong performance and practical UI.
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
            <span className="border border-white/10 bg-white/5 text-offwhite/70 rounded-full px-4 py-2 text-sm">
              1+ year experience
            </span>
            <span className="border border-white/10 bg-white/5 text-offwhite/70 rounded-full px-4 py-2 text-sm">
              MERN Stack
            </span>
            <span className="border border-white/10 bg-white/5 text-offwhite/70 rounded-full px-4 py-2 text-sm">
              Google Cloud Platform
            </span>
          </div>
        </div>

        <aside className="surface-card rounded-[1.5rem] p-6 md:p-7 animate-fade-in-up animation-delay-600">
          <div className="flex items-center gap-4">
            <div className="flex h-20 w-20 items-center justify-center rounded-[1.25rem] bg-white p-3 shadow-lg">
              <img
                src={nitwLogo}
                alt="NIT Warangal logo"
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-aqua/80">
                Currently
              </p>
              <p className="text-white text-lg font-semibold leading-snug">
                MSc Mathematics and Scientific Computing
              </p>
              <p className="text-offwhite/60 text-sm mt-1">
                National Institute of Technology, Warangal
              </p>
            </div>
          </div>

          <div className="mt-8 space-y-3">
            {highlights.map((item) => (
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
