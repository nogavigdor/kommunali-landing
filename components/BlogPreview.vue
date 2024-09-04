<template>
    <section class="blog-preview-section">
      <h2 class="text-3xl font-bold mb-6">Latest News</h2>
      <div v-if="posts" class="blog-list">
        <article v-for="(post, index) in posts" :key="index" class="blog-item">
          <h3 class="text-xl font-semibold">{{ post.title }}</h3>
          <p class="text-gray-600">{{ post.excerpt }}</p>
          <NuxtLink :to="`/blog/${post._path}`" class="text-blue-500">Read More</NuxtLink>
        </article>
      </div>
      <div v-else>
        <p>No posts found.</p>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import { queryContent } from '#content'
    import type { BlogPost } from '@/types'

const posts = ref<BlogPost[]>([])
  
  onMounted(async () => {
  const postsData = await queryContent<BlogPost>('blog').only(['title', 'excerpt', '_path']).find()
  posts.value = postsData
})

  </script>
  
  <style scoped>
  .blog-preview-section {
    padding: 2rem;
    background-color: #f9f9f9;
  }
  .blog-list {
    display: grid;
    gap: 1.5rem;
  }
  .blog-item {
    background-color: #fff;
    padding: 1.5rem;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  }
  </style>
  