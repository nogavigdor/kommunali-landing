<template>
  <div  >
    <!-- Hero Section -->
    <section id="hero">
      <HeroSection v-intersection-observer="[intersectionHandler, { threshold: 0.4}]" />
    </section>

    <!-- About Section -->
    <section id="about">
      <AboutSection v-intersection-observer="[intersectionHandler, { threshold: 0.4}]" />
    </section>

    <!-- FAQ Section -->
    <section  id="faq">
      <FaqSection v-intersection-observer="[intersectionHandler, { threshold: 0.4}]" />
    </section>

    <!-- Signup Section -->
    <section id="signup">
      <SignupSection v-intersection-observer="[intersectionHandler, { threshold: 0.4}]" />
    </section>

    <button
      @click="$scrollTo('#hero', 1000, { easing: 'ease' })"
      class="fixed bottom-4 right-4 p-4 bg-accent text-gray-800 font-semibold rounded-full"
    >
      Scroll to Top
    </button>
  </div>
</template>

<script setup lang="ts">
import {vIntersectionObserver} from "@vueuse/components";

const currentSection = useState("currentSection");

// This function handles visibility changes for sections of the page using Intersection Observer.
// It checks if a section is visible in the viewport  and if so, updates the global state `currentSection` 
// with the ID of the visible section. This is used to track the current section and update the the active nav link 
//(highlight it).

const intersectionHandler = (([{target, isIntersecting}]: IntersectionObserverEntry[]) => {
  // console.log("entry", target);
  // console.log(`The ${target.parentNode?.id} section is ${isIntersecting ? 'visible' : 'not visible'}`);

  const section = (target.parentNode as HTMLElement)?.id;
  if (!section) return;
  if (isIntersecting) {
    currentSection.value = section;
  }
});
</script>
