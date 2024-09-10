<template>
  <div class="max-w-lg mx-auto">
    <h2 class="text-3xl font-bold mb-4">Sign Up for Updates</h2>
    <form @submit.prevent="submitForm">
      <input
        v-model="form.name"
        type="text"
        placeholder="Name"
        class="w-full mb-4 p-2 border"
      />
      <input
        v-model="form.email"
        type="email"
        placeholder="Email"
        class="w-full mb-4 p-2 border"
        required
      />
      <button type="submit" class="w-full bg-blue-500 text-white py-2">
        Sign Up
      </button>
    </form>
    <p
      v-if="message"
      class="mt-4"
      :class="{ 'text-red-500': isError, 'text-green-500': !isError }"
    >
      {{ message }}
    </p>
  </div>
</template>

<script setup lang="ts">
interface ApiResponse {
  message: string;
  statusCode?: number;
}

const form = ref({
  name: "",
  email: "",
});
const message = ref("");
const isError = ref(false);

const submitForm = async () => {
  try {
    // Using type assertion to tell TypeScript that res matches ApiResponse
    const res = (await $fetch("/api/signup", {
      method: "POST",
      body: form.value,
    })) as ApiResponse; // <- Type assertion here

    message.value = res.message;
    isError.value = false;
  } catch (error) {
    message.value = "Error submitting form";
    isError.value = true;
  }
};
</script>
