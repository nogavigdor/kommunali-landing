<template>
    <div class="max-w-lg mx-auto">
      <h2 class="text-3xl font-bold mb-4">Sign Up for Updates</h2>
      <form @submit.prevent="submitForm">
        <input v-model="form.name" type="text" placeholder="Name" class="w-full mb-4 p-2 border">
        <input v-model="form.email" type="email" placeholder="Email" class="w-full mb-4 p-2 border">
        <button type="submit" class="w-full bg-blue-500 text-white py-2">Sign Up</button>
      </form>
      <p v-if="message" class="mt-4">{{ message }}</p>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  import axios from 'axios'
  
  const form = ref({ name: '', email: '' })
  const message = ref('')
  
  const submitForm = async () => {
    try {
      const res = await axios.post('/api/signup', form.value)
      message.value = res.data.message
    } catch (error) {
      message.value = 'Error submitting form'
    }
  }
  </script>
  