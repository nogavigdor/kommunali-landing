<template>
  <div>
    <!-- Hero Section -->
    <section id="hero">
      <HeroSection />
    </section>

    <!-- About Section -->
    <section id="about">
      <AboutSection />
    </section>

    <!-- FAQ Section -->
    <section id="faq">
      <FaqSection />
    </section>

    <!-- Signup Section -->
    <section id="signup">
      <SignupSection />
    </section>

    <button
      v-scroll-to="'#hero'"
      class="fixed bottom-4 right-4 p-4 bg-blue-500 text-white rounded-full"
    >
      Scroll to Top
    </button>
  </div>
</template>

<script setup lang="ts"></script>
