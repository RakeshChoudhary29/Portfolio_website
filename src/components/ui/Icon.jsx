import {
  ArrowRight,
  ArrowUp,
  Bot,
  ChevronDown,
  CircleAlert,
  CircleCheck,
  ExternalLink,
  LoaderCircle,
  Mail,
  Menu,
  Play,
  Send,
  Terminal,
  X,
} from 'lucide-react'

/**
 * Every icon on the site, tree-shaken from lucide-react.
 *
 * This replaced Font Awesome, which shipped ~380 kB of webfonts and CSS to
 * draw the sixteen glyphs below. Icons are addressed by name so data files
 * (`portfolios.js`) can name one without importing a component.
 */

// lucide dropped its brand marks, so the two social glyphs are inline paths.
// GitHub's is Simple Icons (CC0); LinkedIn is the standard glyph geometry.
// Both are filled — brand marks read wrong as outlines next to lucide strokes.
function BrandGlyph({ path, viewBox = '0 0 24 24', size, className, ...rest }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox}
      width={size}
      height={size}
      fill="currentColor"
      className={className}
      {...rest}
    >
      <path d={path} />
    </svg>
  )
}

const GITHUB_PATH =
  'M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12'

const LINKEDIN_PATH =
  'M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.55V9h3.57v11.45z'

const Github = (props) => <BrandGlyph path={GITHUB_PATH} {...props} />
// Tighter viewBox so the wordless 'in' mark carries the same optical weight
// as the GitHub glyph beside it, which fills its box edge to edge.
const Linkedin = (props) => (
  <BrandGlyph path={LINKEDIN_PATH} viewBox="3.2 3.2 17.6 17.6" {...props} />
)

const icons = {
  'arrow-right': ArrowRight,
  'arrow-up': ArrowUp,
  'chevron-down': ChevronDown,
  'circle-alert': CircleAlert,
  'circle-check': CircleCheck,
  'external-link': ExternalLink,
  github: Github,
  linkedin: Linkedin,
  loader: LoaderCircle,
  mail: Mail,
  menu: Menu,
  play: Play,
  robot: Bot,
  send: Send,
  terminal: Terminal,
  x: X,
}

export default function Icon({ name, size = 16, className = '', ...rest }) {
  const Glyph = icons[name]
  if (!Glyph) return null

  return (
    <Glyph
      size={size}
      className={`inline-block flex-shrink-0 ${className}`}
      aria-hidden="true"
      focusable="false"
      {...rest}
    />
  )
}
