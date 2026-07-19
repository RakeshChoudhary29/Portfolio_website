const socialLinks = [
  {
    href: 'https://www.linkedin.com/in/rakeshchoudhary29/',
    icon: 'fa-brands fa-linkedin',
    label: 'LinkedIn',
  },
  {
    href: 'https://github.com/RakeshChoudhary29',
    icon: 'fa-brands fa-square-github',
    label: 'GitHub',
  },
  {
    href: 'mailto:rakeshtheone29@gmail.com',
    icon: 'fa-solid fa-envelope',
    label: 'Email',
  },
]

export default function Footer({ subtitle }) {
  return (
    <footer className="bg-black text-center py-10 sm:py-12 px-4 border-t border-white/8">
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
    </footer>
  )
}
