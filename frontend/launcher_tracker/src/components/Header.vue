<template>
  <header class="flex justify-between items-center h-20 w-full px-20 border-2 border-white">
    <h1 class="text-white text-2xl font-krona">Launch Tracker</h1>
    <nav class="text-2xl flex gap-6">
      <router-link to="/" class="text-white font-krona">Home</router-link>
      <router-link to="/passed-launches" class="text-white font-krona">Passed</router-link>
    </nav>
  </header>
</template>

<script setup lang="ts">
import {defineComponent} from "vue";

defineComponent({
  name: 'HeaderComponent',
});
</script>

<style>

</style>
