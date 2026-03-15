export default function Hero() {
  return (
    <section
      id="intro"
      className="hero-bg relative max-w-5xl mx-auto px-4 pt-24 pb-36"
    >
      {/* Numbered label */}
      <p className="section-label animate-fade-in-up">— Hello World</p>

      <p className="font-mono text-offwhite/70 text-xl mb-3 animate-fade-in-up animation-delay-200">
        Hi, my name is
      </p>

      <p className="font-sans text-aqua text-6xl md:text-7xl font-bold mb-4 leading-tight animate-fade-in-up animation-delay-400">
        Rakesh Choudhary
      </p>

      <p className="text-offwhite/70 text-xl md:text-2xl leading-relaxed max-w-2xl mb-10 animate-fade-in-up animation-delay-600">
        Aspiring Software Developer with a strong foundation in{' '}
        <span className="text-aqua">C++</span>,{' '}
        <span className="text-aqua">JavaScript</span>, and{' '}
        <span className="text-aqua">Data Structures</span> — passionate about
        building efficient, user-focused applications.
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
    </section>
  )
}
