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

### Contact form

`src/components/ContactForm.jsx` posts to Web3Forms using `VITE_WEB3FORMS_KEY` (see `.env.example`; the key is public-safe). When the env var is absent, `Contact.jsx` hides the form and falls back to direct email/LinkedIn buttons — so the site works with or without it.

### Motion & type tokens

- Shared Framer Motion tokens (easing, durations, `fadeUp`/`heroItem` variant helpers) live in `src/constants/motion.js` — use them instead of ad-hoc `transition` objects.
- Fluid heading sizes are Tailwind tokens (`text-fluid-hero`, `text-fluid-h2`, `text-fluid-lead`) defined in `tailwind.config.js`; section `h2`s use `font-display text-fluid-h2`.
- Project cards render a CSS-drawn "app window" mockup (`ProjectVisual` in `Projects.jsx`); the skeleton style comes from each project's optional `visual` field in `portfolios.js` (`dashboard | stream | chart | terminal | graph`), and an optional `image` field replaces the skeleton with a real screenshot. The first project in each portfolio renders as a full-width "flagship" card (visual left, content right); order the `projects.items` array accordingly.
- Gotcha: `.spotlight-card > *` in `index.css` forces `position: relative` on direct card children (to sit above the glow pseudo-element) and it loads after Tailwind utilities — a plain `absolute` class on a direct child silently loses. Use `!absolute` inside spotlight cards.
- Responsive gotcha: always pair a `grid` with an explicit base `grid-cols-1` before any `md:`/`lg:` column override. Without it the implicit single track is `auto`-sized and won't shrink below its content's min-width, which can push a card past the viewport on narrow screens (this caused a real 320px overflow on the AI/ML page). `grid-cols-1` resolves to `minmax(0,1fr)`, which clamps. Verify responsiveness by scanning `document.documentElement.scrollWidth` vs `clientWidth` across widths — full-page screenshots are misleading because off-screen `whileInView` reveals stay at `opacity:0`.
- Mobile spacing: let media and cards fill their column on mobile; avoid `max-w-* mx-auto` caps that shrink an element away from the edges and leave side margins that grow with viewport width (the About photo used to float with ~48px side gaps at 414px). Constrain those elements at `md:`+ via the grid track instead (e.g. `md:grid-cols-[minmax(0,300px)_…]`), not a base `max-width`.
- `MotionConfig reducedMotion="user"` wraps the app in `App.jsx`; CSS-only animations are additionally gated in `src/index.css`.

### Notes

- Static assets served from `public/` (favicons, `og-banner.png`, `sitemap.xml`, `resume/<key>/resume.pdf`); imported image assets live in `src/assets/`. When project ids change, update `public/sitemap.xml` to match.
- The navbar's portfolio switcher is dev-only (`import.meta.env.DEV`); production visitors reach the AI/ML portfolio only via a direct `?type=aiml` URL.
