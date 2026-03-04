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
    <footer className="bg-black text-center py-10 px-4 border-t border-white/10">
      <h2 className="text-offwhite text-xl font-bold mb-4">
        Rakesh Choudhary &middot; Learner
      </h2>
      <ul className="flex justify-center gap-8 list-none p-0 m-0 text-3xl mb-4">
        {socialLinks.map((s) => (
          <li key={s.href}>
            <a
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="text-aqua hover:text-magenta transition-colors duration-200"
            >
              <i className={s.icon} aria-hidden="true" />
              <span className="sr-only">{s.label}</span>
            </a>
          </li>
        ))}
      </ul>
      <p className="text-offwhite/50 text-sm">
        &copy; {new Date().getFullYear()} Rakesh Choudhary. All Rights Reserved.
      </p>
    </footer>
  )
}
