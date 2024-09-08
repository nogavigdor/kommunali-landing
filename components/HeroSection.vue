<template>
    <section class="min-h-screen relative w-full"> 
      <UCarousel 
        ref="carouselRef"
        v-slot="{ item }"
        :items="items"
        :ui="{ item: 'basis-full' }"
        class="h-[75vh] rounded-lg overflow-hidden relative"
        indicators
      >
        <div class="w-full flex items-center justify-center">
          <img :src="item" class="w-full h-auto object-contain" draggable="false"> 
        </div>
      </UCarousel>
    </section>
  </template>
  
  
  <script setup>

const items = [
'/_nuxt/assets/hero1.webp',
 '/_nuxt/assets/hero2.webp',
 '/_nuxt/assets/hero3.webp',
 '/_nuxt/assets/hero4.webp',
'/_nuxt/assets/hero5.webp',
'/_nuxt/assets/hero6.webp',
]

const carouselRef = ref()

onMounted(() => {
  setInterval(() => {
    if (!carouselRef.value) return

    if (carouselRef.value.page === carouselRef.value.pages) {
      return carouselRef.value.select(0)
    }

    carouselRef.value.next()
  }, 3000)
})
  </script>
  
  <style scoped>


  </style>
  