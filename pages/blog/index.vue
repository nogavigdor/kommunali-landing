<template>
  <div class="pt-24">
    <section class="blog-preview-section">
      <h2 class="text-3xl font-bold text-gray-900 mb-6">Latest News</h2>
      <div v-if="posts && posts.length" class="blog-list">
        <article v-for="(post, index) in posts" :key="index" class="blog-item">
          <h3 class="text-gray-700 font-semibold">{{ post.title }}</h3>
          <p class="text-gray-600">{{ post.excerpt }}</p>
          <NuxtLink :to="`${post._path}`" class="text-blue-500"
            >Read More</NuxtLink
          >
        </article>
      </div>
      <div v-else>
        <p>No posts found.</p>
      </div>
    </section>
  </div>
</template>

<script setup>
const { data: posts } = await useAsyncData("blog-posts", () =>
  queryContent("blog").only(["title", "excerpt", "_path"]).find()
);
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
