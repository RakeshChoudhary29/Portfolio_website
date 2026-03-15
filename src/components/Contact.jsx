export default function Contact({ data }) {
  return (
    <section id="contact" className="bg-plum w-full py-24 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <div className="surface-card rounded-[1.75rem] p-8 md:p-10 text-center">
          <p className="section-label !text-offwhite/50 mb-4">{data.sectionLabel}</p>

          <h2 className="text-offwhite text-4xl md:text-6xl font-bold mb-6 leading-tight">
            {data.title}
          </h2>

          <p className="text-offwhite/70 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            {data.description}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:rakeshtheone29@gmail.com"
              className="bg-transparent border-2 border-offwhite text-offwhite hover:bg-offwhite hover:text-plum font-mono px-8 py-3.5 rounded-md transition-all duration-300 inline-flex items-center no-underline text-base tracking-wide"
            >
              <i className="fa-solid fa-envelope mr-2" aria-hidden="true" />
              Email Me
            </a>
            <a
              href="https://www.linkedin.com/in/rakeshchoudhary29/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-offwhite/10 border-2 border-offwhite/20 text-offwhite hover:bg-offwhite hover:text-plum font-mono px-8 py-3.5 rounded-md transition-all duration-300 inline-flex items-center no-underline text-base tracking-wide"
            >
              <i className="fa-brands fa-linkedin mr-2" aria-hidden="true" />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
