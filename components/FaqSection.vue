<template>
  <div
    class="min-h-screen mx-auto px-24 py-24 bg-gradient-to-r from-primary to-blue-secondary flex flex-col items-center justify-center"
  >
    <h2 class="text-4xl mb-6">FAQ</h2>
    <UAccordion
      class="w-full max-w-4xl bg-white p-6 shadow-lg rounded-lg text-gray-800"
      :items="items"
      closeOthers
    >
      <template #default="{ item, open }">
        <div class="flex flex-col border-b border-gray-200 p-4 cursor-pointer">
          <!-- Label and Arrow Container -->
          <div class="flex items-center">
            <!-- Icon Container with Gradient and Shadow -->
            <div
              class="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-secondary shadow-lg flex items-center justify-center"
            >
              <UIcon :name="item.icon" class="w-6 h-6 text-white" />
            </div>
            <!-- Label and Arrow -->
            <div class="flex-1 ml-4 flex justify-between items-center">
              <h3 class="text-lg font-semibold text-gray-900">
                {{ item.label }}
              </h3>
              <!-- Rotating Arrow -->
              <UIcon
                name="i-heroicons-chevron-down-20-solid"
                class="w-6 h-6 text-gray-600 transition-transform duration-300"
                :class="{ 'rotate-180': open }"
              />
            </div>
          </div>
        </div>
      </template>
      <template #item="{ item }">
        <p class="mt-2 ml-16 text-gray-600 text-[16px]">{{ item.content }}</p>
      </template>
    </UAccordion>
  </div>
</template>
<script setup lang="ts">
const items = [
  {
    label: "What is Kommunali?",
    icon: "i-heroicons-information-circle",
    // defaultOpen: true,
    content:
      "Kommunali is a community-driven platform that enables users to buy, sell, or give away second-hand items within their local neighborhoods. It promotes sustainability by encouraging users to explore nearby deals and connect with their community.",
  },
  {
    label: "How do I sign up?",
    icon: "i-heroicons-pencil-square",
    content:
      "Signing up for Kommunali is easy! Just head to the Sign-Up section on our homepage, enter your email, and create an account. Once registered, you can start browsing, listing items, and connecting with your neighbors.",
  },
  {
    label: "Is Kommunali free to use?",
    icon: "i-heroicons-currency-dollar",
    content:
      "Yes, Kommunali is completely free for users to browse, post items, and engage with the community. Some premium features may be introduced in the future to enhance the user experience, but the core functionalities will always be free.",
  },
  {
    label: "How do I list an item for sale or giveaway?",
    icon: "i-heroicons-plus-circle",
    content:
      'To list an item, simply log into your account, click on the "Post an Item" button, fill out the details, upload photos, and choose whether you want to sell, exchange, or give the item away. It’s a great way to share things you no longer need!',
  },
  {
    label: "How can I contact a seller or buyer?",
    icon: "i-heroicons-solid-chat",
    content:
      'Kommunali provides an in-app messaging feature for communication. Simply find the item you’re interested in, and click "Contact Seller" to start a conversation. This helps maintain privacy while facilitating smooth transactions.',
  },
  {
    label: "Is there a delivery option?",
    icon: "i-heroicons-truck",
    content:
      "Kommunali is designed to focus on local transactions, encouraging in-person pickups to reduce carbon footprints. However, users can arrange deliveries if both parties agree.",
  },
  {
    label: "How do I find items near me?",
    icon: "i-heroicons-map-pin",
    content:
      "Our interactive map feature lets you explore items in your local neighborhood. Each house on the map represents potential deals, so you can find great items just a few steps away!",
  },
  {
    label: "Is my information secure on Communali?",
    icon: "i-heroicons-shield-check",
    content:
      "We take user privacy seriously. All personal data is encrypted, and we implement industry-standard security measures to ensure your information is safe. You can also control what information you share with other users.",
  },
];
</script>
