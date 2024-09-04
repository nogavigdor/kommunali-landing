export default defineNuxtConfig({
  css: ['@/assets/css/tailwind.css'],

  modules: [
    '@nuxt/ui',
    '@nuxt/content'
  ],

  typescript: {
    typeCheck: true
  },

  alias: {
    '@': './',
  },

  content: {},

  plugins: [
    '~/plugins/vue-scrollto.ts'
  ],

  compatibilityDate: '2024-09-04',
})