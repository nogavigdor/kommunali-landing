<template>
  <div>
    <header>
      <h1>My Blog</h1>
      <nav>
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/blog">Blog</NuxtLink>
      </nav>
    </header>

    <main>
      <NuxtPage />
    </main>

    <footer>
      <p>© 2024 My Awesome Blog</p>
    </footer>
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
