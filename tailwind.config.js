/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: '#0a0a0a',
        surface: '#121212',
        dkblue: '#0d314b',
        plum: '#4b0d49',
        hotmag: '#ff17e4',
        magenta: '#e310cb',
        aqua: '#00f2fe',
        cyan: '#4facfe',
        offwhite: '#fafafa',
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
