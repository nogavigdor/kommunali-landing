    <template>
    <div>
        <!-- Hero Section -->
        <section id="hero">
        <HeroSection />
        </section>

        <!-- About Section -->
        <section id="about" class="my-20">
        <AboutSection />
        </section>

        <!-- FAQ Section -->
        <section id="faq" class="my-20">
        <FaqSection />
        </section>

        <!-- Signup Section -->
        <section id="signup" class="my-20">
        <SignupSection />
        </section>
    </div>
    <button v-scroll-to="'#hero'" class="fixed bottom-4 right-4 p-4 bg-blue-500 text-white rounded-full">
        Scroll to Top
        </button>
    </template>

    <script setup lang="ts"></script>
