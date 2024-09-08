<template>
  <nav class="fixed flex justify-between bg-gray-100 py-4 px-6">
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
  </nav>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

const currentSection = ref("hero");
const isBlogPage = ref(false);

onMounted(() => {
  const route = useRoute();

  // Check if the user is on the blog page
  isBlogPage.value = route.path.startsWith("/blog");

  // Scroll event listener to detect active section
  window.addEventListener("scroll", () => {
    if (!isBlogPage.value) {
      const sections = {
        hero: document.getElementById("hero")?.getBoundingClientRect().top ?? 0,
        about:
          document.getElementById("about")?.getBoundingClientRect().top ?? 0,
        faq: document.getElementById("faq")?.getBoundingClientRect().top ?? 0,
        signup:
          document.getElementById("signup")?.getBoundingClientRect().top ?? 0,
      };

      const scrollTop = window.scrollY + 200;

      if (scrollTop >= sections.hero && scrollTop < sections.about) {
        currentSection.value = "hero";
      } else if (scrollTop >= sections.about && scrollTop < sections.faq) {
        currentSection.value = "about";
      } else if (scrollTop >= sections.faq && scrollTop < sections.signup) {
        currentSection.value = "faq";
      } else if (scrollTop >= sections.signup) {
        currentSection.value = "signup";
      }
    }
  });
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
  background-color: #007bff;
}

.nav-link:hover {
  background-color: #f0f0f0;
}

.currentSection {
  color: #007bff;
}
</style>
