const socialLinks = [
  {
    href: 'http://www.linkedin.com/in/rakesh-choudhary-035235233',
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

export default function Footer() {
  return (
    <footer className="bg-black text-center py-12 px-4 border-t border-white/10">
      <p className="text-offwhite font-sans text-lg font-semibold mb-1">
        Rakesh Choudhary
      </p>
      <p className="text-offwhite/40 font-mono text-sm mb-5">
        Mathematics &amp; Scientific Computing · NIT Warangal
      </p>

      <ul className="flex justify-center gap-8 list-none p-0 m-0 text-2xl mb-6">
        {socialLinks.map((s) => (
          <li key={s.href}>
            <a
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="text-offwhite/50 hover:text-aqua transition-colors duration-200"
            >
              <i className={s.icon} aria-hidden="true" />
              <span className="sr-only">{s.label}</span>
            </a>
          </li>
        ))}
      </ul>

      <p className="text-offwhite/30 font-mono text-xs tracking-wide">
        Designed &amp; Built by{' '}
        <span className="text-aqua/60">Rakesh Choudhary</span>
        {' '}·{' '}
        &copy; {new Date().getFullYear()}
      </p>
    </footer>
  )
}
