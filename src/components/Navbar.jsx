import { useState } from 'react'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

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

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="font-mono text-sm sticky top-0 z-50 bg-black/95 backdrop-blur-sm border-b border-white/10">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo / Name */}
        <a
          href="#"
          onClick={closeMenu}
          className="text-offwhite hover:text-magenta transition-colors duration-200 flex items-center gap-2 font-sans text-xl font-bold no-underline"
        >
          <i className="fa-solid fa-link text-aqua" aria-hidden="true" />
          Rakesh Choudhary
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-offwhite hover:text-magenta transition-colors duration-200 no-underline"
              >
                {link.label}
              </a>
            </li>
          ))}

          {/* Social icons */}
          {socialLinks.map((s) => (
            <li key={s.href}>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="text-aqua hover:text-magenta transition-colors duration-200 text-xl"
              >
                <i className={s.icon} aria-hidden="true" />
                <span className="sr-only">{s.label}</span>
              </a>
            </li>
          ))}

          {/* Resume button */}
          <li>
            <a
              href="https://drive.google.com/uc?export=download&id=1nY9EfwwBUiw8LSBWmO3LOy5JJzKs7c1Z"
              download
              className="bg-magenta hover:bg-hotmag text-white font-mono px-4 py-2 rounded-md transition-colors duration-200 no-underline inline-block"
            >
              Resume
            </a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          id="mobile-menu-btn"
          className="md:hidden text-aqua text-2xl focus:outline-none"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <i className={menuOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'} />
        </button>
      </nav>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="md:hidden bg-dkblue px-6 pb-6 pt-2">
          <ul className="flex flex-col gap-5 list-none p-0 m-0">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-offwhite hover:text-magenta transition-colors duration-200 no-underline text-lg block py-1"
                  onClick={closeMenu}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="flex gap-6 text-2xl pt-1">
              {socialLinks.map((s) => (
                <a
                  key={s.href}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="text-aqua hover:text-magenta transition-colors duration-200"
                  onClick={closeMenu}
                >
                  <i className={s.icon} aria-hidden="true" />
                  <span className="sr-only">{s.label}</span>
                </a>
              ))}
            </li>
            <li>
              <a
                href="https://drive.google.com/uc?export=download&id=1nY9EfwwBUiw8LSBWmO3LOy5JJzKs7c1Z"
                download
                className="bg-magenta hover:bg-hotmag text-white font-mono px-4 py-2 rounded-md transition-colors duration-200 inline-block no-underline"
                onClick={closeMenu}
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
