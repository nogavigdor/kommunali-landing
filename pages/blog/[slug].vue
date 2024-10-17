<template>
  <NuxtLayout name="blog">
    <!-- Post container with gradient background -->
    <!-- Full-screen gradient background with padding -->
    <div
      class="flex justify-center items-center min-h-screen bg-gradient-to-r from-primary to-secondary py-16 px-4"
    >
      <!-- Post content card -->
      <div
        class="max-w-3xl w-full bg-white shadow-2xl rounded-lg overflow-hidden"
      >
       <!-- Breadcrumb -->
       <div class="p-4 bg-gray-100">
          <nav class="text-sm">
            <NuxtLink to="/blog" class="text-darkLink underline hover:hoverDarkLink font-bold ">
              Blog
            </NuxtLink>
            <span class="mx-2 text-gray-500">/</span>
            <span class="text-gray-700">{{ post.title }}</span>
          </nav>
        </div>
        <!-- Post Header with Image (Optional) -->
        <div v-if="`/images/blog-images/${post.thumbnail}`" class="relative">
          <img
            :src="`/images/blog-images/${post.thumbnail}`"
            alt="Post Image"
            class="w-full h-64 object-cover"
          />
          <div
            class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"
          >
            <h1 class="text-shadow ml-4 mr-4 text-4xl font-extrabold text-white">{{ post.title }}</h1>
          </div>
        </div>
        <div v-else class="p-8">
          <h1 class="text-4xl font-extrabold text-gray-800">
            {{ post.title }}
          </h1>
        </div>
        <!-- Post Content -->
        <div class="p-8 md:p-2">
          <!-- Post Metadata -->
          <div
            v-if="post.date || post.author"
            class="flex items-center justify-between mb-6"
          >
            <p v-if="post.date" class="text-sm text-gray-800 font-bold">
              Published on {{ post.date }}
            </p>
            <p v-if="post.author" class="text-sm text-gray-800 font-bold">
              Author: {{ post.author }}
            </p>
          </div>

          <!-- Post Body -->
          <div class="prose prose-lg max-w-none text-gray-700">
            <!-- Render the post content dynamically using v-html -->
            <ContentRenderer :value="post"></ContentRenderer>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
import { parseJsonText } from "typescript";

const route = useRoute();
const { data: post } = await useAsyncData(
  `blog-post-${route.params.slug}`,
  () =>
    queryContent("blog")
      .where({ _path: `/blog/${route.params.slug}` })
      .findOne()
);

console.log("The post content is:", post.value); // Check what is being fetched
</script>
<style>
.text-shadow {
  text-shadow: 6px 6px 6px rgba(232, 255, 118, 0.75);
 
}
</style>
