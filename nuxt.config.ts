// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/google-fonts"],
  css: ['~/assets/scss/style.scss'],
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
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
