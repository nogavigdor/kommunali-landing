<template>
  <button
    @click="toggleDarkMode"
    class="p-2 rounded-full border-2 border-gray-300 dark:border-gray-600 transition-colors duration-300"
  >
    {{ isDarkMode ? "☀️" : "🌙" }}
  </button>
</template>

<script setup>
import { useState } from "nuxt/app";

const isDarkMode = useState("isDarkMode", () => false);

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
  document.documentElement.classList.toggle("dark", isDarkMode.value);
};
</script>

<style scoped></style>
