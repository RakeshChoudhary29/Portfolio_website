export default function Contact() {
  return (
    <section id="contact" className="bg-plum text-center py-16 px-4 w-full">
      <h2 className="text-3xl font-bold text-offwhite mt-5 mb-6">Contact Me</h2>
      <p className="text-offwhite/80 text-lg leading-relaxed max-w-md mx-auto mb-10">
        I&apos;m always interested in hearing about new opportunities or discussing
        potential collaborations and partnerships.
        <br />
        Let&apos;s connect and bring innovative ideas to life.
      </p>
      <a
        href="mailto:rakeshtheone29@gmail.com"
        className="bg-magenta hover:bg-hotmag text-white font-mono px-6 py-3 rounded-md transition-colors duration-200 inline-block no-underline text-base"
      >
        Email Me
      </a>
    </section>
  )
}
