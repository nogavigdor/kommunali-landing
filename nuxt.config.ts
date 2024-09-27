export default defineNuxtConfig({
  css: ["@/assets/css/tailwind.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: ["@nuxt/ui", "@nuxt/content", '@nuxt/image',   'nuxt-gtag', ],
  typescript: {
    typeCheck: true,
  },

  plugins: ["@/plugins/vue-scrollto.ts"],
 
  gtag: {
    id: 'GTM-P22RFRV6', // Replace with your actual Google Tag ID
  },
  compatibilityDate: "2024-09-04",
});
