// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/google-fonts", "@nuxt/image"],
  css: ['~/assets/scss/style.scss'],
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
      tailwindcss: {},
      autoprefixer: {},
      cssnano:
        process.env.NODE_ENV === 'production'
         ? { preset: ['default', { discardComments: { removeAll: true } }] }
            : false, // disable cssnano when not in production
     },
  }
})