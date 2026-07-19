import { useState } from 'react'
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion'
import { getResumeUrl } from '../constants/site'
import { getPortfolioOptions } from '../data/portfolios'
import useActiveSection from '../hooks/useActiveSection'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

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

// 'intro' (the hero) is observed but has no nav link, so while it's in view no
// link is highlighted — clearing the active state at the top and on scroll-up.
const sectionIds = ['intro', ...navLinks.map((link) => link.href.replace('#', ''))]

/**
 * Pill toggle to switch between the Software and AI/ML portfolios.
 * Dev-only: recruiters get a direct URL per portfolio, so production hides
 * the switch (the ?type= query param itself keeps working everywhere).
 */
function PortfolioSwitcher({ activePortfolioKey, className = '' }) {
  if (!import.meta.env.DEV) return null

  return (
    <div
      className={`inline-flex items-center rounded-full border border-white/10 bg-surface p-1 font-mono text-xs ${className}`}
      role="group"
      aria-label="Switch portfolio"
    >
      {getPortfolioOptions().map((option) => {
        const isActive = option.key === activePortfolioKey
        return (
          <a
            key={option.key}
            href={option.key === 'software' ? '/' : option.href}
            aria-current={isActive ? 'page' : undefined}
            className={`rounded-full px-3 py-1.5 no-underline whitespace-nowrap transition-colors duration-200 ${
              isActive
                ? 'bg-aqua/15 text-aqua'
                : 'text-offwhite/55 hover:text-offwhite'
            }`}
          >
            {option.label}
          </a>
        )
      })}
    </div>
  )
}

export default function Navbar({ activePortfolioKey }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const activeId = useActiveSection(sectionIds)

  const { scrollYProgress } = useScroll()
  const progressScaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 26,
    restDelta: 0.001,
  })

  const closeMenu = () => setMenuOpen(false)
  const rootHref = activePortfolioKey === 'software' ? '/' : `?type=${activePortfolioKey}`
  const resumeUrl = getResumeUrl(activePortfolioKey)

  return (
    <header className="font-mono text-sm sticky top-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/8">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between gap-4">
        <div className="flex items-center gap-4 min-w-0">
          <a
            href={`${rootHref}#intro`}
            onClick={closeMenu}
            className="text-offwhite hover:text-aqua transition-colors duration-200 flex items-center gap-2.5 font-sans text-lg sm:text-xl font-bold no-underline min-w-0"
          >
            <span className="font-mono text-aqua flex-shrink-0 text-base sm:text-lg" aria-hidden="true">
              &lt;/&gt;
            </span>
            <span className="truncate">Rakesh Choudhary</span>
          </a>
          <PortfolioSwitcher
            activePortfolioKey={activePortfolioKey}
            className="hidden md:inline-flex"
          />
        </div>

        <div className="hidden lg:flex items-center gap-5">
          <ul className="flex items-center gap-5 list-none m-0 p-0">
            {navLinks.map((link) => {
              const isActive = activeId === link.href.replace('#', '')
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    aria-current={isActive ? 'true' : undefined}
                    className={`relative transition-colors duration-200 no-underline whitespace-nowrap text-sm ${
                      isActive ? 'text-aqua' : 'text-offwhite/75 hover:text-aqua'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute -bottom-1.5 left-0 right-0 h-0.5 rounded-full bg-aqua"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                </li>
              )
            })}

            {socialLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="text-offwhite/50 hover:text-aqua transition-colors duration-200 text-lg"
                >
                  <i className={link.icon} aria-hidden="true" />
                  <span className="sr-only">{link.label}</span>
                </a>
              </li>
            ))}

            <li>
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-glow cta-glow-magenta bg-magenta hover:bg-hotmag text-white font-mono px-4 py-2 rounded-lg transition-colors duration-200 no-underline inline-block text-sm"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>

        <button
          type="button"
          className="lg:hidden text-aqua text-2xl rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-aqua focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <i className={menuOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'} />
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="lg:hidden overflow-hidden bg-surface border-t border-white/8"
          >
            <ul className="flex flex-col gap-4 list-none p-0 m-0 px-6 pb-6 pt-4">
            {import.meta.env.DEV && (
              <li>
                <PortfolioSwitcher activePortfolioKey={activePortfolioKey} />
              </li>
            )}
            {navLinks.map((link) => {
              const isActive = activeId === link.href.replace('#', '')
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    aria-current={isActive ? 'true' : undefined}
                    className={`transition-colors duration-200 no-underline text-base block py-1 border-l-2 pl-3 ${
                      isActive
                        ? 'text-aqua border-aqua'
                        : 'text-offwhite/80 border-transparent hover:text-aqua'
                    }`}
                    onClick={closeMenu}
                  >
                    {link.label}
                  </a>
                </li>
              )
            })}
            <li className="flex gap-5 text-xl pt-2">
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="text-offwhite/50 hover:text-aqua transition-colors duration-200"
                  onClick={closeMenu}
                >
                  <i className={link.icon} aria-hidden="true" />
                  <span className="sr-only">{link.label}</span>
                </a>
              ))}
            </li>
            <li>
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-magenta hover:bg-hotmag text-white font-mono px-4 py-2 rounded-lg transition-colors duration-200 inline-block no-underline text-sm"
                onClick={closeMenu}
              >
                Resume
              </a>
            </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        aria-hidden="true"
        className="scroll-progress absolute bottom-0 left-0 right-0 h-0.5"
        style={{ scaleX: progressScaleX }}
      />
    </header>
  )
}
