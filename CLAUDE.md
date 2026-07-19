# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start the Vite dev server
- `npm run build` — production build to `dist/`
- `npm run preview` — serve the production build locally

There is no test runner, linter, or type-check configured. `.jsx` files are plain React (no TypeScript despite `@types/react` being present).

## Architecture

A single-page React portfolio (Vite + Tailwind + Framer Motion). There is no router. The entry is `src/main.jsx` → `src/App.jsx`, which renders every section on one page.

### Two portfolios, one build (the core concept)

The site serves **two distinct portfolios** — `software` and `aiml` — selected at runtime from the URL query string (`?type=aiml`, with aliases like `?type=ai`, `?type=data`). All content for both lives in **`src/data/portfolios.js`** in the `portfolioRegistry` object. There is no CMS or backend; editing content means editing this file.

- `getPortfolioFromSearch(search)` resolves `?type=` (via `portfolioAliases`) to a registry entry, defaulting to `software`.
- `App.jsx` reads `window.location.search`, picks the portfolio, and threads its sections (`hero`, `about`, `experience`, `education`, `projects`, `contact`, `footerSubtitle`) down as props. Components are presentational — they render whatever data object they receive.
- Deep-linking a single project uses `?project=<id>`; `getProjectFromSearch` looks the id up within the active portfolio's `projects.items`.
- `sharedExperienceItems`, `sharedEducation`, and `sharedContact` are defined once and reused across both portfolios — edit them in one place to change both.

When adding a section or field, update the shape in **both** the `software` and `aiml` entries (or add to the shared objects), then consume it in the corresponding component.

### SEO (client-rendered, per-portfolio)

This is a static SPA, so all meta tags are injected at runtime. `buildMetadata(portfolio, project)` in `portfolios.js` produces the metadata object; **`src/components/Seo.jsx`** imperatively upserts `<title>`, description/OG/Twitter meta tags, canonical link, and JSON-LD `Person` schema into `<head>` on mount. `index.html` ships a static baseline of these tags plus GA (`gtag`); `Seo.jsx` removes the un-`id`'d static JSON-LD block to avoid duplication and replaces it with `#person-schema`. Site-wide constants (URLs, social links, resume paths, default keywords) live in **`src/constants/site.js`**.

### Styling & interaction primitives

- Tailwind with a custom dark theme in `tailwind.config.js`: brand colors (`hotmag`, `magenta`, `aqua`, `cyan`, `plum`, surface tones) and font families (`font-display` = Outfit, `font-sans` = Inter, `font-mono` = Oxygen Mono). Fonts load via Google Fonts in `index.html`.
- Global custom classes (`gradient-divider`, `section-alt`, `spotlight-card`, etc.) live in `src/index.css` — check there before adding new utility CSS.
- Reusable interaction components are in `src/components/ui/`: `MagneticButton`, `TiltCard`, `SpotlightCard`, `ScrollToTop`.
- Hooks in `src/hooks/`: `useActiveSection` (IntersectionObserver-driven navbar highlighting) and `useSpotlight` (cursor-following radial glow — returns props to spread onto an element with the `.spotlight-card` class).

### Notes

- Static assets served from `public/` (favicons, `og-banner.png`, `sitemap.xml`, `resume/<key>/resume.pdf`); imported image assets live in `src/assets/`. When project ids change, update `public/sitemap.xml` to match.
- The navbar's portfolio switcher is dev-only (`import.meta.env.DEV`); production visitors reach the AI/ML portfolio only via a direct `?type=aiml` URL.
