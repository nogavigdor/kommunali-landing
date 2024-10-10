<template>
  <div>
    <!-- Hamburger button using Heroicons Bars3Icon -->
    <button @click="toggleMenu" class="p-4">
      <Bars3Icon class="h-8 w-8 text-gray-700" />
    </button>

    <!-- Mobile navigation links with transition -->
    <transition name="slide-fade">
      <div
        v-if="isOpen"
        class="fixed top-0 left-0 bg-white w-full z-10 h-screen flex flex-col items-center justify-center"
      >
        <ul class="text-center space-y-8">
          <li @click="handleClick('#hero')">
            <a href="#hero" class="text-xl font-semibold">Home</a>
          </li>
          <li @click="handleClick('#about')">
            <a href="#about" class="text-xl font-semibold">About</a>
          </li>
          <li @click="handleClick('#faq')">
            <a href="#faq" class="text-xl font-semibold">FAQ</a>
          </li>
          <li @click="handleClick('#signup')">
            <a href="#signup" class="text-xl font-semibold">Sign Up</a>
          </li>
          <li @click="handleBlogClick">
            <NuxtLink to="/blog" class="text-xl font-semibold">Blog</NuxtLink>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router'; // Import useRoute to detect current route
import { Bars3Icon } from '@heroicons/vue/24/outline'; // Importing from Heroicons v2

const nuxtApp = useNuxtApp();

const isOpen = ref(false);
const route = useRoute(); // Get the current route

// Toggle menu visibility
const toggleMenu = () => {
  console.log('Toggling menu');
  isOpen.value = !isOpen.value;
};

// Smooth scrolling to sections and closing the menu with transition
const handleClick = (target) => {
  // If not on the blog page, perform smooth scrolling
  if (!route.path.startsWith('/blog')) {
    nuxtApp.$scrollTo(target, { duration: 800, easing: 'ease-in-out' }); // Smooth scrolling with ease
  }
  // Close the menu after clicking
  isOpen.value = false;
};

// Handle the blog click and close the menu
const handleBlogClick = () => {
  isOpen.value = false;
};
</script>

<style scoped>
/* Transition for the mobile menu */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}
.slide-fade-enter, .slide-fade-leave-to /* .slide-fade-leave-active in <2.1.8 */ {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
