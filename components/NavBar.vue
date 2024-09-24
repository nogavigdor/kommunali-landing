<template>
  <nav class="fixed z-50 flex justify-between bg-gray-100 py-4 px-6">
    <!-- Smooth scroll links for sections if on index page -->
    <a
      v-if="!isBlogPage"
      href="#hero"
      @click.prevent="goToHandler"
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
import { ref, onMounted, onBeforeUnmount, watch } from "vue";
import { useRoute } from "vue-router";

const currentSection = ref("hero");
const isBlogPage = ref(false);
const activeLink = ref("hero"); // Tracks which link is active
const route = useRoute();

const goToHandler = (event) => {
  const target = event.target.getAttribute("href");
  const el = document.querySelector(target);

  if (!isBlogPage.value && el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
};

const setActiveLink = (section) => {
  activeLink.value = section;
};

const handleScroll = () => {
  if (!isBlogPage.value) {
    updateScrollLogic();
  }
};

const updateScrollLogic = () => {
  const navBarHeight = document.querySelector('nav')?.offsetHeight || 0;

  // Check if the user is on the blog page
  isBlogPage.value = route.path.startsWith("/blog");

  if (!isBlogPage.value) {
    const sections = {
      hero: document.getElementById("hero")?.getBoundingClientRect().top ?? 0,
      about: document.getElementById("about")?.getBoundingClientRect().top ?? 0,
      faq: document.getElementById("faq")?.getBoundingClientRect().top ?? 0,
      signup: document.getElementById("signup")?.getBoundingClientRect().top ?? 0,
    };

    const scrollTop = window.scrollY + navBarHeight;

    if (sections.hero < navBarHeight && sections.about > navBarHeight) {
      currentSection.value = "hero";
    } else if (sections.about < navBarHeight && sections.faq > navBarHeight) {
      currentSection.value = "about";
    } else if (sections.faq < navBarHeight && sections.signup > navBarHeight) {
      currentSection.value = "faq";
    } else if (sections.signup < navBarHeight) {
      currentSection.value = "signup";
    }

    // Update active link based on current section
    activeLink.value = currentSection.value;
  }
};

// Watch for route changes and update scroll logic dynamically
watch(route, () => {
  // Check if on the blog page and update active link accordingly
  isBlogPage.value = route.path.startsWith("/blog");

  if (isBlogPage.value) {
    activeLink.value = "blog"; // Set blog as active when navigating to blog page
  } else {
    // Reset active link based on scroll position
    updateScrollLogic();
  }
});

// Run scroll logic when component is mounted
onMounted(() => {
  updateScrollLogic();
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
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
