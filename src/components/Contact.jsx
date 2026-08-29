import { motion } from 'framer-motion'
import useSpotlight from '../hooks/useSpotlight'
import ContactForm, { hasContactForm } from './ContactForm'
import SectionHeader from './SectionHeader'
import Icon from './ui/Icon'
import { fadeUp } from '../constants/motion'
import { CONTACT_EMAIL, SOCIAL_LINKS } from '../constants/site'

const directLinks = [
  {
    href: `mailto:${CONTACT_EMAIL}`,
    icon: 'mail',
    label: 'Email',
    value: CONTACT_EMAIL,
  },
  {
    href: SOCIAL_LINKS.linkedin,
    icon: 'linkedin',
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
        <Icon name={link.icon} size={18} />
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
      <div className={`mx-auto ${hasContactForm ? 'max-w-5xl' : 'max-w-2xl'}`}>
        <motion.div
          {...spotlight}
          className="spotlight-card rounded-2xl p-6 sm:p-8 md:p-10 text-center"
          {...fadeUp()}
        >
          <SectionHeader
            index={5}
            label={data.sectionLabel}
            title={data.title}
            description={data.description}
            labelClassName="!text-offwhite/45 mb-3"
            numberClassName="text-offwhite/25"
            titleClassName="mb-5"
            descriptionClassName="text-offwhite/65 text-base sm:text-lg leading-relaxed mb-8 sm:mb-10 max-w-2xl mx-auto"
          />

          {hasContactForm ? (
            <div className="grid grid-cols-1 gap-8 text-left md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:gap-10">
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
                href={`mailto:${CONTACT_EMAIL}`}
                whileTap={{ scale: 0.97 }}
                className="cta-glow bg-cyan text-black hover:bg-cyan/90 font-mono px-7 py-3 rounded-full inline-flex items-center justify-center no-underline text-sm sm:text-base font-semibold"
              >
                <Icon name="mail" size={17} className="mr-2" />
                Email Me
              </motion.a>
              <motion.a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileTap={{ scale: 0.97 }}
                className="btn-outline-premium border border-white/15 text-offwhite hover:border-aqua/35 hover:text-aqua font-mono px-7 py-3 rounded-full inline-flex items-center justify-center no-underline text-sm sm:text-base"
              >
                <Icon name="linkedin" size={17} className="mr-2" />
                LinkedIn
              </motion.a>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
