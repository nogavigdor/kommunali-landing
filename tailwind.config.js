/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  //darkMode: "class", // 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#FF5722', // Vibrant Orange for energy, action, and enthusiasm
        secondary: '#3F51B5', // Bold Indigo for creativity and trust
        accent: '#FFEB3B', // Bright Yellow for positivity and highlights
        error: '#E53935', // Bold Red for error messages with urgency
        warning: '#FB8C00', // Vibrant Orange for warnings
        success: '#00E676', // Bright Green for successful actions
        info: '#29B6F6', // Electric Blue for informational messages
        background: '#F0F4F8', // Soft Light Gray for a modern, clean background
        card: '#FFFFFF', // Crisp White for card backgrounds
        textPrimary: '#212121', // Almost Black for sharp, readable text
        textSecondary: '#757575', // Medium Gray for secondary text
      },
    },
  },
  plugins: [],
};
