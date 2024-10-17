<template>
  <div class="pt-24">
    <section class="blog-preview-section">
      <h2 class="text-3xl font-bold text-gray-900 mb-6">Latest News</h2>
      <div v-if="posts && posts.length" class="blog-list">
        <article v-for="(post, index) in posts" :key="index" class="blog-item flex flex-col md:flex-row ">
          <img
            :src="`/images/blog-images/${post.thumbnail}`"
            alt="Post Thumbnail"
            class="thumbnail-image w-48 h-auto object-cover rounded-lg shadow-md"
            v-if="post.thumbnail"
          />
          <div class="content">
            <h3 class="text-xl text-gray-700 font-semibold">
              {{ post.title }}
            </h3>
            <p class="text-gray-600">{{ post.excerpt }}</p>
            <NuxtLink
              :to="`${post._path}`"
              class="text-blue-500 hover:text-blue-700 transition-colors"
              >Read More</NuxtLink
            >
          </div>
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
  queryContent("blog").only(["title", "excerpt", "_path", "thumbnail"]).find()
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
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
}
.thumbnail-image {
  flex-shrink: 0;
  width: 12rem;
  height: auto;
  object-fit: cover;
  border-radius: 0.5rem;
}

.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
