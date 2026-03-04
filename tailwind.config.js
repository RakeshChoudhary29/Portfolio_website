/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: '#171321',
        dkblue: '#0d314b',
        plum: '#4b0d49',
        hotmag: '#ff17e4',
        magenta: '#e310cb',
        aqua: '#86fbfb',
        offwhite: '#f7f8fa',
      },
      fontFamily: {
        sans: ['Oxygen', 'sans-serif'],
        mono: ['"Oxygen Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
