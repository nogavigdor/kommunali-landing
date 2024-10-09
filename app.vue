<template>
  <div>
    <div class="flex content-between">
      <NavBar class="hidden md:block"  />
    <!-- Hamburger Menu for Mobile -->
      <HamburgerMenu class="md:hidden"/>
   
     
    </div>
    
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>

    <TheFooter />
  </div>
</template>

<script setup>
import DarkLightSwitch from './components/DarkLightSwitch.vue';
</script>

<style scoped></style>
