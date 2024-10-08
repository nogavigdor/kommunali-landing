<template>
  <div>
    <div class="flex content-between">
      <NavBar />
      <!-- Day/Night Toggle Switch -->
      <div class="ml-auto">
        <DarkLightSwitch />
      </div>
    </div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>

    <TheFooter />
  </div>
</template>

<script setup></script>

<style scoped></style>
