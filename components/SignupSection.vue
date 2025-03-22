<template>
  <div
    class="min-h-screen bg-gradient-to-b from-secondary to-primary flex items-center justify-center"
  >
    <div class="max-w-lg w-full bg-white p-8 rounded-lg shadow-lg my-12">
      <h2 class="text-4xl font-bold mb-6 text-center text-gray-800">
        Sign Up for Updates
      </h2>
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
        <button
          type="submit"
          class="w-full bg-accent hover:bg-hoverAccent text-gray-800 text-2xl py-3 rounded-lg font-semibold transition-all duration-300"
        >
          Sign Up Now
        </button>
      </form>
      <!-- Message -->
      <p
        v-if="message"
        class="mt-4 text-center"
        :class="{ 'text-red-500': isError, 'text-green-500': !isError }"
      >
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
  // Reset state before each submission
  isError.value = false;
  message.value = "";

  try {
    const response = await $fetch<ApiResponse>("/api/signup", {
      method: "POST",
      body: form.value,
    });

    // Accessing the message from the data response
    message.value = response.message || "Successfully signed up!";
    isError.value = false;
  } catch (error) {
    console.error("Error:", error);
    message.value =
      error instanceof Error ? error.message : "Error submitting form";
    isError.value = true;
  }
};
</script>
