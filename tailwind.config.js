/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  important: true,
  content: [
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  theme: {
    colors: {
      'primary': '#6D8B74',
      'secondary': '#5F7161',
      'tertiandry': '#919194',
      'base': '#FFFFFF',
    },
    extend: {},
  },
  plugins: [],
}
