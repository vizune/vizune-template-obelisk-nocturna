/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        'midnight': '#020006',
        'charcoal': '#030309',
        'ocean': '#90c2f5',
        'carmine': '#9e3a72',
        'peach': '#ffac85',
        'purple': '#4b3aa8',
        'ice': '#bbffff',
        'white': '#f2f2f2'
      },
      fontFamily: {
        body: ['"Mulish"', "system-ui", "sans-serif"],
        display: ['"Cormorant Garamond"', "Georgia", "serif"],
        logo: ['"Forum"', "Georgia", "serif"]
      },
    },
  },
  plugins: [],
}