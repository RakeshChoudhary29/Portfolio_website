import { motion } from 'framer-motion'
import useSpotlight from '../hooks/useSpotlight'
import ContactForm, { hasContactForm } from './ContactForm'
import { fadeUp } from '../constants/motion'

const directLinks = [
  {
    href: 'mailto:rakeshtheone29@gmail.com',
    icon: 'fa-solid fa-envelope',
    label: 'Email',
    value: 'rakeshtheone29@gmail.com',
  },
  {
    href: 'https://www.linkedin.com/in/rakeshchoudhary29/',
    icon: 'fa-brands fa-linkedin',
    label: 'LinkedIn',
    value: 'in/rakeshchoudhary29',
  },
]

function DirectLink({ link }) {
  const external = !link.href.startsWith('mailto:')
  return (
    <motion.a
      href={link.href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      whileTap={{ scale: 0.98 }}
      className="group flex items-center gap-4 rounded-xl border border-white/10 bg-surface-elevated px-4 py-3.5 no-underline transition-colors duration-200 hover:border-aqua/30"
    >
      <span className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-lg border border-white/10 bg-black/30 text-aqua">
        <i className={link.icon} aria-hidden="true" />
      </span>
      <span className="min-w-0">
        <span className="block font-mono text-[0.65rem] uppercase tracking-[0.12em] text-offwhite/45">
          {link.label}
        </span>
        <span className="block truncate text-sm font-medium text-offwhite transition-colors duration-200 group-hover:text-aqua">
          {link.value}
        </span>
      </span>
    </motion.a>
  )
}

export default function Contact({ data }) {
  const spotlight = useSpotlight('rgba(56, 189, 248, 0.16)')

  return (
    <section id="contact" className="bg-plum border-t border-white/8 w-full py-16 sm:py-20 md:py-24 px-4 sm:px-6">
      <div className={`mx-auto ${hasContactForm ? 'max-w-5xl' : 'max-w-4xl'}`}>
        <motion.div
          {...spotlight}
          className="spotlight-card rounded-2xl p-6 sm:p-8 md:p-10 text-center"
          {...fadeUp()}
        >
          <p className="section-label !text-offwhite/45 mb-3">
            <span className="text-offwhite/25 mr-2">05.</span>
            {data.sectionLabel}
          </p>

          <h2 className="text-offwhite font-display text-fluid-h2 font-bold mb-5">
            {data.title}
          </h2>

          <p className="text-offwhite/65 text-base sm:text-lg leading-relaxed mb-8 sm:mb-10 max-w-2xl mx-auto">
            {data.description}
          </p>

          {hasContactForm ? (
            <div className="grid gap-8 text-left md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:gap-10">
              <div className="space-y-3">
                <p className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-aqua/70">
                  Direct channels
                </p>
                {directLinks.map((link) => (
                  <DirectLink key={link.href} link={link} />
                ))}
              </div>
              <ContactForm />
            </div>
          ) : (
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4">
              <motion.a
                href="mailto:rakeshtheone29@gmail.com"
                whileTap={{ scale: 0.97 }}
                className="cta-glow bg-cyan text-black hover:bg-cyan/90 font-mono px-7 py-3 rounded-full inline-flex items-center justify-center no-underline text-sm sm:text-base font-semibold"
              >
                <i className="fa-solid fa-envelope mr-2" aria-hidden="true" />
                Email Me
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/rakeshchoudhary29/"
                target="_blank"
                rel="noopener noreferrer"
                whileTap={{ scale: 0.97 }}
                className="btn-outline-premium border border-white/15 text-offwhite hover:border-aqua/35 hover:text-aqua font-mono px-7 py-3 rounded-full inline-flex items-center justify-center no-underline text-sm sm:text-base"
              >
                <i className="fa-brands fa-linkedin mr-2" aria-hidden="true" />
                LinkedIn
              </motion.a>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
