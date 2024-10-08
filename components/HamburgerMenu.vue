<!-- components/HamburgerMenu.vue -->
<template>
  <div>
    <button @click="toggleMenu" class="focus:outline-none">
      <!-- Hamburger Icon -->
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        class="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16m-7 6h7"
        />
      </svg>
    </button>

    <!-- Sliding Menu -->
    <transition name="slide-fade">
      <div
        v-if="isMenuOpen"
        class="fixed inset-0 z-40 bg-gray-800 bg-opacity-75"
      >
        <div class="flex flex-col space-y-6 p-6 bg-white w-64 h-full">
          <a href="#hero" @click.prevent="closeMenu">Home</a>
          <a href="#about" @click.prevent="closeMenu">About</a>
          <a href="#faq" @click.prevent="closeMenu">FAQ</a>
          <a href="#signup" @click.prevent="closeMenu">Sign Up</a>
          <NuxtLink to="/blog" @click="closeMenu">Blog</NuxtLink>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};
</script>

<style scoped>
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease;
}

.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
</style>
