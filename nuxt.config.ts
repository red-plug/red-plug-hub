export default defineNuxtConfig({
  // https://github.com/nuxt-themes/docus
  extends: ['@nuxt-themes/docus'],
  devtools: { enabled: true },

  modules: [
    '@nuxt/fonts'
  ],
  compatibilityDate: '2024-10-24',
  app: {
    head: {
      meta: [
        { name: 'robots', content: 'noindex' }
      ]
    }
  },
  css: [
    '~/assets/css/red-plug.css'
  ],
  content: {
    highlight: {
        langs: [
            'js',
            'typescript',
            'html',
            'php',
            'sql',
            'vue-html',
            'vue',
            'bash',
            'blade'
        ]
    }
  },
})