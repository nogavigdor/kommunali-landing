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
    <!-- Day/Night Toggle Switch -->
    <div class="ml-auto">
      <DayNightSwitch />
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

const currentSection = ref("hero");
const isBlogPage = ref(false);

const route = useRoute();

const handleScroll = () => {
  updateScrollLogic();
};

const updateScrollLogic = () => {
  const navBarHeight = document.querySelector("nav")?.offsetHeight || 0;

  // Check if the user is on the blog page
  isBlogPage.value = route.path.startsWith("/blog");

  // Scroll event listener to detect active section
  if (!isBlogPage.value) {
    window.addEventListener("scroll", () => {
      const sections = {
        hero: document.getElementById("hero")?.getBoundingClientRect().top ?? 0,
        about:
          document.getElementById("about")?.getBoundingClientRect().top ?? 0,
        faq: document.getElementById("faq")?.getBoundingClientRect().top ?? 0,
        signup:
          document.getElementById("signup")?.getBoundingClientRect().top ?? 0,
      };

      const scrollTop = window.scrollY + navBarHeight;
      const screenHeight = window.innerHeight;

      // Logging scroll details
      console.log("the sections top are:", sections);
      console.log(`Scroll Position: ${window.scrollY}`);
      console.log(`Scroll Top (with navbar height): ${scrollTop}`);
      console.log(`Screen Height: ${screenHeight}`);

      if (sections.hero < navBarHeight && sections.about > navBarHeight) {
        currentSection.value = "hero";
        console.log("Active Section: Hero");
      } else if (sections.about < navBarHeight && sections.faq > navBarHeight) {
        currentSection.value = "about";
        console.log("Active Section: About");
      } else if (
        sections.faq < navBarHeight &&
        sections.signup > navBarHeight
      ) {
        currentSection.value = "faq";
        console.log("Active Section: FAQ");
      } else if (sections.signup < navBarHeight) {
        currentSection.value = "signup";
        console.log("Active Section: Signup");
      }
    });
  }
};

// Run scroll logic when component is mounted
onMounted(() => {
  updateScrollLogic();
  // Add scroll event listener
  window.addEventListener("scroll", handleScroll);
});

// Cleanup scroll listener when component is unmounted
onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});

// Watch for route changes and update scroll logic dynamically
watch(route, () => {
  updateScrollLogic();
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
