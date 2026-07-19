import { CONTACT_EMAIL, SOCIAL_LINKS } from '../constants/site'

const socialLinks = [
  {
    href: SOCIAL_LINKS.linkedin,
    icon: 'fa-brands fa-linkedin',
    label: 'LinkedIn',
  },
  {
    href: SOCIAL_LINKS.github,
    icon: 'fa-brands fa-square-github',
    label: 'GitHub',
  },
  {
    href: `mailto:${CONTACT_EMAIL}`,
    icon: 'fa-solid fa-envelope',
    label: 'Email',
  },
]

export default function Footer({ subtitle }) {
  return (
    <footer className="bg-black text-center px-4 pt-10 pb-16 sm:py-12 border-t border-white/8">
      <p className="text-offwhite font-sans text-base sm:text-lg font-semibold mb-1">
        Rakesh Choudhary
      </p>
      <p className="text-offwhite/45 font-mono text-xs sm:text-sm mb-5">
        {subtitle}
      </p>

      <ul className="flex justify-center gap-6 sm:gap-8 list-none p-0 m-0 text-xl sm:text-2xl mb-6">
        {socialLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="text-offwhite/45 hover:text-aqua transition-colors duration-200"
            >
              <i className={link.icon} aria-hidden="true" />
              <span className="sr-only">{link.label}</span>
            </a>
          </li>
        ))}
      </ul>

      <p className="text-offwhite/35 font-mono text-xs tracking-wide">
        Designed &amp; Built by <span className="text-aqua/70">Rakesh Choudhary</span> | &copy;{' '}
        {new Date().getFullYear()}
      </p>
      <p className="mt-2 text-offwhite/25 font-mono text-[0.65rem] tracking-wide">
        React &middot; Vite &middot; Tailwind &middot; Framer Motion
      </p>
    </footer>
  )
}
