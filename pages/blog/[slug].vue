<template>
  <NuxtLayout name="blog">
      <!-- Post container with gradient background -->
     <!-- Full-screen gradient background with padding -->
    <div class="flex justify-center items-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 py-16 px-4">
      <!-- Post content card -->
      <div class="max-w-3xl w-full bg-white shadow-2xl rounded-lg overflow-hidden">
        <!-- Post Header with Image (Optional) -->
        <div v-if="post.image" class="relative">
          <img :src="post.image" alt="Post Image" class="w-full h-64 object-cover">
          <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h1 class="text-4xl font-extrabold text-white">{{ post.title }}</h1>
          </div>
        </div>
        <div v-else class="p-8">
          <h1 class="text-4xl font-extrabold text-gray-800">{{ post.title }}</h1>
        </div>
        <!-- Post Content -->
        <div class="p-8">
          <!-- Post Metadata -->
          <div v-if="post.date || post.author" class="flex items-center justify-between mb-6">
            <p v-if="post.date" class="text-sm text-gray-500">Published on {{ post.date }}</p>
            <p v-if="post.author" class="text-sm text-gray-500">Author: {{ post.author }}</p>
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
