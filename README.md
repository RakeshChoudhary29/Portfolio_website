# Rakesh Choudhary — Portfolio

Personal portfolio at [rakeshchoudhary.dev](https://rakeshchoudhary.dev/), built as a single-page React app with Vite, Tailwind CSS, and Framer Motion.

## Two portfolios, one build

The site serves two portfolios from the same bundle, selected by URL:

| URL | Portfolio |
| --- | --- |
| `/` | Software Developer (default) |
| `/?type=aiml` (aliases: `?type=ai`, `?type=data`) | AI/ML & Data Engineer |

All content for both lives in `src/data/portfolios.js` — there is no CMS; editing content means editing that file. Individual projects deep-link via `?project=<id>`.

## Commands

```bash
npm install       # install dependencies
npm run dev       # start the Vite dev server
npm run build     # production build to dist/
npm run preview   # serve the production build locally
```

> After changing `tailwind.config.js`, restart the dev server — new utility classes are only generated on startup.

## Contact form

The contact form posts to [Web3Forms](https://web3forms.com) and needs an access key:

```bash
cp .env.example .env   # then paste your key into VITE_WEB3FORMS_KEY
```

The key is public-safe (it only routes submissions to an inbox). Without it the Contact section automatically falls back to direct email/LinkedIn buttons. Set the same variable in your hosting provider's environment settings for production.

## Structure

```
src/
├── App.jsx               # picks the portfolio from the URL, renders all sections
├── data/portfolios.js    # ALL content for both portfolios + SEO metadata builder
├── constants/
│   ├── site.js           # site-wide constants (URLs, socials, resume paths)
│   └── motion.js         # shared Framer Motion easing/duration tokens
├── components/           # one component per section + Seo.jsx (runtime meta tags)
│   └── ui/               # MagneticButton, TiltCard, SpotlightCard, RotatingText…
└── hooks/                # useActiveSection (scroll-spy), useSpotlight (cursor glow)
```

Deeper architectural notes (data shapes, SEO wiring, styling conventions, known gotchas) are in [CLAUDE.md](CLAUDE.md).
