export default defineNuxtConfig({
  css: ["@/assets/css/tailwind.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: ["@nuxt/ui", "@nuxt/content"],
  typescript: {
    typeCheck: true,
  },

  plugins: ["@/plugins/vue-scrollto.ts"],
  compatibilityDate: "2024-09-04",
});
