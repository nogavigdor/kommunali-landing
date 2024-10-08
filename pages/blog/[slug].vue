<template>
  <NuxtLayout>
    <div class="pt-24 pb-24 min-h-screen">
      <article v-if="post && post.body">
        <h1>{{ post.title }}</h1>

        <ContentDoc />
      </article>
      <div v-else>
        <p>No post found.</p>
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

console.log("The post content is:", post); // Check what is being fetched
</script>
