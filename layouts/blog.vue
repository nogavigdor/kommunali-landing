<template>
  <div>
    <main>
      <slot />
    </main>
  </div>
</template>

<style scoped>
header {
  padding: 1rem;
  background-color: #f5f5f5;
  text-align: center;
}

nav a {
  margin: 0 1rem;
  color: #333;
  text-decoration: none;
}

footer {
  text-align: center;
  padding: 1rem;
  background-color: #f5f5f5;
  margin-top: 2rem;
}
</style>
