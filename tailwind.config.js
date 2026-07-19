/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: '#111114',
        surface: '#1a1a1f',
        'surface-elevated': '#222228',
        'surface-muted': '#16161a',
        dkblue: '#151a24',
        plum: '#1c1526',
        hotmag: '#ff17e4',
        magenta: '#e310cb',
        aqua: '#5eead4',
        cyan: '#38bdf8',
        offwhite: '#e4e4e7',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
        mono: ['"Oxygen Mono"', 'monospace'],
      },
      // Fluid type: rem + vw (never pure vw) so browser zoom still works
      fontSize: {
        'fluid-hero': ['clamp(2.75rem, 1.7rem + 4.2vw, 5.75rem)', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        'fluid-h2': ['clamp(1.9rem, 1.3rem + 2.4vw, 3.5rem)', { lineHeight: '1.12', letterSpacing: '-0.022em' }],
        'fluid-lead': ['clamp(1.15rem, 1rem + 0.9vw, 1.75rem)', { lineHeight: '1.4' }],
      },
    },
  },
  plugins: [],
}
