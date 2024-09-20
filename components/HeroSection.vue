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
            <div class="w-full flex items-start justify-center">
            <img :src="item" class="w-full h-auto object-contain" draggable="false"> 
            </div>
        </UCarousel>
        </section>
    </template>
    
    
    <script setup>
    import hero1 from '@/assets/hero1.webp'
    import hero2 from '@/assets/hero2.webp'
    import hero3 from '@/assets/hero3.webp'
    import hero4 from '@/assets/hero4.webp'
    import hero5 from '@/assets/hero5.webp'
    import hero6 from '@/assets/hero6.webp'
    
const items = [hero1, hero2, hero3, hero4, hero5, hero6]


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
    