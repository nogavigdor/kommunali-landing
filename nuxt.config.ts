export default defineNuxtConfig({
  css: ["@/assets/css/tailwind.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: [
    "@nuxt/ui",
    "@nuxt/content",
    "@nuxt/image",
    "nuxt-gtag",
    // "@nuxt-themes/tokens",
  ],
  /*
  colorMode: {
    preference: "system", // 'light' | 'dark' | 'system'
    fallback: "light",
    classPrefix: "",
    classSuffix: "",
  },
  */
  typescript: {
    typeCheck: true,
  },

  plugins: ["@/plugins/vue-scrollto.ts"],

  gtag: {
    id: "GTM-P22RFRV6",
  },

  compatibilityDate: "2024-09-04",
});
