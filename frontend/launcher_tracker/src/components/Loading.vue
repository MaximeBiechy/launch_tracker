<template>
  <div class="relative w-20 h-20">
    <div
        class="absolute inset-0 rounded-full border-t-4 border-r-4 border-transparent border-white animate-spin"
    ></div>
    <p class="absolute inset-0 flex items-center justify-center text-white font-bold">
      Loading
    </p>
  </div>
</template>

<script setup lang="ts">
import {defineComponent} from "vue";

defineComponent({
  name: "LoadingSpinner",
});

</script>


<style>

</style>