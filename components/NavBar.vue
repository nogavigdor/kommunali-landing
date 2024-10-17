<template>
  <nav
    class="fixed z-50 flex space-x-12 w-full bg-gray-100 py-4 px-6 font-bold"
  >
    <!-- Smooth scroll links for sections if on index page -->
    <a
      v-if="!isBlogPage"
      href="#hero"
      @click.prevent="$scrollTo('#hero')"
      :class="{ active: currentSection === 'hero' }"
      class="nav-link"
    >
      Home
    </a>
    <NuxtLink
      v-else
      to="/#hero"
      :class="{ active: currentSection === 'hero' }"
      class="nav-link"
      >Home</NuxtLink
    >

    <a
      v-if="!isBlogPage"
      href="#about"
      @click.prevent="$scrollTo('#about')"
      :class="{ active: currentSection === 'about' }"
      class="nav-link"
    >
      About
    </a>
    <NuxtLink
      v-else
      to="/#about"
      :class="{ active: currentSection === 'about' }"
      class="nav-link"
      >About</NuxtLink
    >

    <a
      v-if="!isBlogPage"
      href="#faq"
      @click.prevent="$scrollTo('#faq')"
      :class="{ active: currentSection === 'faq' }"
      class="nav-link"
    >
      FAQ
    </a>
    <NuxtLink
      v-else
      to="/#faq"
      :class="{ active: currentSection === 'faq' }"
      class="nav-link"
      >FAQ</NuxtLink
    >

    <a
      v-if="!isBlogPage"
      href="#signup"
      @click.prevent="$scrollTo('#signup')"
      :class="{ active: currentSection === 'signup' }"
      class="nav-link"
    >
      Sign Up
    </a>
    <NuxtLink
      v-else
      to="/#signup"
      :class="{ active: currentSection === 'signup' }"
      class="nav-link"
      >Sign Up</NuxtLink
    >

    <!-- Blog link -->
    <NuxtLink to="/blog" :class="{ active: isBlogPage }" class="nav-link"
      >Blog</NuxtLink
    >

    <!-- Hamburger Menu for Mobile -->
    <div class="md:hidden">
      <HamburgerMenu />
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

const currentSection = useState("currentSection", "hero");

// const currentSection = ref("hero");
const isBlogPage = computed(() => route.path.startsWith("/blog"));

const route = useRoute();


watch(isBlogPage, () => {
  if (isBlogPage.value) {
    currentSection.value = "blog";
  }
});
</script>

<style scoped>
.nav-link {
  text-decoration: none;
  color: #333;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 4px;
}

.nav-link.active {
  color: #ffffff;
  background-color: #1A237E;
}

.nav-link:hover {
  background-color: #1A237E;
  color: #ffffff;
}

.currentSection {
  color: #007bff;
}
</style>
