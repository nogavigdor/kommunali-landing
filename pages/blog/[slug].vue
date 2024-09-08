<template>
  <NuxtLayout>
    <article v-if="post && post.body">
      <h1>{{ post.title }}</h1>
      <p>{{ post.excerpt }}</p>
      <ContentDoc />
    </article>
    <div v-else>
      <p>No post found.</p>
    </div>
  </NuxtLayout>
</template>

<script setup>
import { parseJsonText } from "typescript";

// Set the page layout to 'blog'
definePageMeta({
  layout: "blog",
});

const route = useRoute();
const { data: post } = await useAsyncData(
  `blog-post-${route.params.slug}`,
  () =>
    queryContent("blog")
      .where({ _path: `/blog/${route.params.slug}` })
      .findOne()
);

console.log("The post content is:", post); // Check what is being fetched
</script>
