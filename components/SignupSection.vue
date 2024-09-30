<template>
  <div class="min-h-screen bg-gradient-to-b from-green-400 to-blue-500 flex items-center justify-center">
    <div class="max-w-lg w-full bg-white p-8 rounded-lg shadow-lg my-12">
      <h2 class="text-4xl font-bold mb-6 text-center text-gray-800">Sign Up for Updates</h2>
      <form @submit.prevent="submitForm">
        <!-- Name Input -->
        <input
          v-model="form.name"
          type="text"
          placeholder="Name"
          class="w-full mb-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <!-- Email Input -->
        <input
          v-model="form.email"
          type="email"
          placeholder="Email"
          class="w-full mb-6 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <!-- Submit Button -->
        <button type="submit" class="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-semibold transition-all duration-300">
          Sign Up
        </button>
      </form>
      <!-- Message -->
      <p v-if="message" class="mt-4 text-center" :class="{ 'text-red-500': isError, 'text-green-500': !isError }">
        {{ message }}
      </p>
    </div>
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
    const res = (await $fetch("/api/signup", {
      method: "POST",
      body: form.value,
    })) as ApiResponse;

    message.value = res.message;
    isError.value = false;
  } catch (error) {
    console.error("Error:", error);
    message.value = "Error submitting form";
    isError.value = true;
  }
};
</script>
