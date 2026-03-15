export default function Hero() {
  return (
    <section
      id="intro"
      className="hero-bg relative max-w-6xl mx-auto px-4 pt-24 pb-28 md:pt-28 md:pb-32"
    >
      <p className="section-label animate-fade-in-up">00. Hello World</p>

      <p className="font-mono text-offwhite/70 text-lg md:text-xl mb-3 animate-fade-in-up animation-delay-200">
        Hi, my name is
      </p>

      <p className="font-sans text-aqua text-5xl md:text-7xl font-bold mb-4 leading-tight animate-fade-in-up animation-delay-400">
        Rakesh Choudhary
      </p>

      <p className="text-offwhite/70 text-lg md:text-2xl leading-relaxed max-w-3xl mb-10 animate-fade-in-up animation-delay-600">
        Full Stack Developer with 1+ year of experience building scalable web
        applications using <span className="text-aqua">React</span>,{' '}
        <span className="text-aqua">Node.js</span>,{' '}
        <span className="text-aqua">MongoDB</span>, and{' '}
        <span className="text-aqua">Next.js</span>.
      </p>

      <div className="flex flex-wrap gap-4 animate-fade-in-up animation-delay-800">
        <a
          href="#projects"
          className="bg-magenta hover:bg-hotmag text-white font-mono px-7 py-3 rounded-md transition-colors duration-200 inline-block no-underline text-base"
        >
          View Projects
          <i className="fa-solid fa-arrow-right ml-2 text-sm" aria-hidden="true" />
        </a>
        <a
          href="#contact"
          className="border border-aqua text-aqua hover:bg-aqua/10 font-mono px-7 py-3 rounded-md transition-colors duration-200 inline-block no-underline text-base"
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
    </section>
  )
}
