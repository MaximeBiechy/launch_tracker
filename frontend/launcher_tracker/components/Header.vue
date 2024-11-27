<template>
  <header>
    <h1 class="text-white text-2xl font-krona">Launch Tracker</h1>
    <nav class="text-2xl">
      <router-link to="/" class="text-white font-krona">Home</router-link>
      <router-link to="/passed-launches" class="text-white font-krona">Passed</router-link>
    </nav>
  </header>
</template>

<script lang="ts">
export default {
  name: 'HeaderComponent',
};
</script>

<style>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5rem;
  width: 100%;
  padding: 0 2rem;
  border: 2px solid white;
}

nav {
  display: flex;
  gap: 1rem;
}
</style>
