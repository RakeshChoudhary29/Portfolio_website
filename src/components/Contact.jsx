import { motion } from 'framer-motion'
import useSpotlight from '../hooks/useSpotlight'

export default function Contact({ data }) {
  const spotlight = useSpotlight('rgba(56, 189, 248, 0.16)')

  return (
    <section id="contact" className="bg-plum border-t border-white/8 w-full py-16 sm:py-20 md:py-24 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          {...spotlight}
          className="spotlight-card rounded-2xl p-6 sm:p-8 md:p-10 text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.45 }}
        >
          <p className="section-label !text-offwhite/45 mb-3">
            <span className="text-offwhite/25 mr-2">05.</span>
            {data.sectionLabel}
          </p>

          <h2 className="text-offwhite text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-5 leading-tight">
            {data.title}
          </h2>

          <p className="text-offwhite/65 text-base sm:text-lg leading-relaxed mb-8 sm:mb-10 max-w-2xl mx-auto">
            {data.description}
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4">
            <a
              href="mailto:rakeshtheone29@gmail.com"
              className="cta-glow bg-cyan text-black hover:bg-cyan/90 font-mono px-7 py-3 rounded-full inline-flex items-center justify-center no-underline text-sm sm:text-base font-semibold"
            >
              <i className="fa-solid fa-envelope mr-2" aria-hidden="true" />
              Email Me
            </a>
            <a
              href="https://www.linkedin.com/in/rakeshchoudhary29/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-premium border border-white/15 text-offwhite hover:border-aqua/35 hover:text-aqua font-mono px-7 py-3 rounded-full inline-flex items-center justify-center no-underline text-sm sm:text-base"
            >
              <i className="fa-brands fa-linkedin mr-2" aria-hidden="true" />
              LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
