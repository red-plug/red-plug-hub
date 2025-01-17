export default defineNuxtConfig({
  // https://github.com/nuxt-themes/docus
  extends: ['@nuxt-themes/docus'],
  devtools: { enabled: true },

  modules: [// Remove it if you don't use Plausible analytics
  // https://github.com/nuxt-modules/plausible
  '@nuxtjs/plausible', '@nuxt/fonts'],
  compatibilityDate: '2024-10-24',
  css: [
    '~/assets/css/red-plug.css'
  ],
  content: {
    highlight: {
        langs: [
            'js',
            'html',
            'php',
            'sql',
            'vue-html',
            'vue',
            'bash'
        ]
    }
  },
})