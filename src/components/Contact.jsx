export default function Contact() {
  return (
    <section id="contact" className="bg-plum w-full py-28 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <p className="section-label !text-offwhite/50 mb-4">05. What&apos;s Next?</p>

        <h2 className="text-offwhite text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Get In Touch
        </h2>

        <p className="text-offwhite/70 text-lg leading-relaxed mb-10">
          I&apos;m always interested in hearing about new opportunities, full
          stack roles, and meaningful collaborations.
          <br />
          Whether you have a question or just want to say hi, my inbox is open!
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="mailto:rakeshtheone29@gmail.com"
            className="bg-transparent border-2 border-offwhite text-offwhite hover:bg-offwhite hover:text-plum font-mono px-10 py-4 rounded-md transition-all duration-300 inline-block no-underline text-base tracking-wide"
          >
            <i className="fa-solid fa-envelope mr-2" aria-hidden="true" />
            Email Me
          </a>
          <a
            href="https://www.linkedin.com/in/rakesh-choudhary-035235233"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-offwhite/10 border-2 border-offwhite/20 text-offwhite hover:bg-offwhite hover:text-plum font-mono px-10 py-4 rounded-md transition-all duration-300 inline-block no-underline text-base tracking-wide"
          >
            <i className="fa-brands fa-linkedin mr-2" aria-hidden="true" />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}
