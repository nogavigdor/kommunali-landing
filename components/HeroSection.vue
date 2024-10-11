<template>
  <section class="relative w-full">
    <UCarousel
      ref="carouselRef"
      v-slot="{ item, currentPage }"
      :items="items"
      :ui="{ item: 'basis-full' }"
      class="h-[75vh] rounded-lg overflow-hidden relative"
      indicators
    >
      <div class="w-full flex items-start justify-center relative">
          <!-- Call to Action Text for each slide -->
          <div class="absolute pt-56 h-full top-10 text-center text-white text-5xl font-bold p-4 bg-black bg-opacity-50 w-full z-10">
            {{ item.text || 'Loading...' }}
        </div>
        <img
          :src="item.image"
          class="w-full h-auto object-contain"
          draggable="false"
        />
      </div>
    </UCarousel>
  </section>
</template>

<script setup>
import hero1 from "@/assets/hero1.jpg";
import hero2 from "@/assets/hero2.png";
import hero3 from "@/assets/hero3.png";
import hero4 from "@/assets/hero4.jpg";
import hero5 from "@/assets/hero5.png";
import hero6 from "@/assets/hero6.jpg";



// Items now contain both image and different text for each slide
const items = [
  { image: hero1, text: "With just a few clicks you can manage your own store" },
  { image: hero2, text: "Upload easily new items to your store" },
  { image: hero3, text: "Sell or give away through an interactive map " },
  { image: hero4, text: "Shop or get for free Quality Second-Hand Items" },
  { image: hero5, text: "Discover Amazing Deals" },
  { image: hero6, text: "With Kommunali be a part of the community." },
];


const carouselRef = ref();

onMounted(() => {
  setInterval(() => {
    if (!carouselRef.value) return;

    if (carouselRef.value.page === carouselRef.value.pages) {
      return carouselRef.value.select(0);
    }

    carouselRef.value.next();
  }, 3000);
});
</script>

<style scoped></style>
