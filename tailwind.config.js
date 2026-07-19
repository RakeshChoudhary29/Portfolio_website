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
    },
  },
  plugins: [],
}
