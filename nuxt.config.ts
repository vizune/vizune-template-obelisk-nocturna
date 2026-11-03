// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2026-11-03',
  devtools: { enabled: true },
  modules: ["@nuxtjs/google-fonts", "@nuxt/image"],
  css: [
    // Font Awesome: core + the icon styles in use (add 'regular.min.css' if you need it)
    '@fortawesome/fontawesome-free/css/fontawesome.min.css',
    '@fortawesome/fontawesome-free/css/brands.min.css',
    '@fortawesome/fontawesome-free/css/solid.min.css',
    '~/assets/scss/style.scss',
  ],
  components: [
    {
      path: '~/components',
      pathPrefix: true,
    },
  ],
  googleFonts: {
    display: 'swap',
    families: {
      Mulish: {
        wght: [400, 700],
        ital: [400]
      },
      'Cormorant+Garamond': {
        wght: [500, 600],
        ital: [500]
      },
      // Only used for the "Vizune" lettering in the header, to match the logo
      Forum: true,
    }
  },
  postcss: {
    plugins: {
      autoprefixer: {},
      cssnano:
        process.env.NODE_ENV === 'production'
         ? { preset: ['default', { discardComments: { removeAll: true } }] }
            : false, // disable cssnano when not in production
     },
  }
})