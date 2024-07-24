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
      backgroundImage: {
        'header': "url('/header.jpg')"
      },
      colors: {
        'midnight': '#020006',
        'charcoal': '#030309',
        'ocean': '#90c2f5',
        'carmine': '#cb1140',
        'peach': '#ffac85',
        'ice': '#bbffff'
      },
      fontFamily: {
        kanit: ['"Kanit"', "sans-serif"],
        forum: ['"Forum"', "serif"]
      },
    },
  },
  plugins: [],
}