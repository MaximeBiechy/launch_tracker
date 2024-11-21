<template>
  <div>
    <!-- ! Header -->
    <header class="flex justify-between items-center h-20 w-full px-20 border-2 border-white">
      <h1 class="text-white text-2xl font-krona">Launch Tracker</h1>
      <nav class="text-2xl flex gap-6">
        <router-link to="/" class="text-white font-krona">Home</router-link>
        <router-link to="/passed-launches" class="text-white font-krona">Passed</router-link>
      </nav>
    </header>

    <!-- ! Page title-->
    <h1 class="text-center text-4xl text-white m-14 font-krona">Upcoming Launches</h1>

    <!-- ! Main Content -->
    <div v-if="loading" class="text-white">loading launches...</div>
    <div v-if="error" class="text-white">{{ error }}</div>
    <div v-else class="mx-auto flex items-center flex-col gap-5 w-[800px]">
      <div v-for="launch in launches" :key="launch.id" class="flex content-between bg-dark_card rounded-lg h-72 w-full">
        <img :src="launch.image_url" alt="Image de la fusée"
             class="h-auto w-64 rounded-l-lg object-cover object-center"/>
        <div class="flex items-center justify-evenly flex-col w-full h-full text-white">
          <h2 class="text-xl font-krona text-center">{{ launch.name }}</h2>
          <p class="text-2xl font-gowun">{{ launch.agencies[0]?.name || 'No agency' }}</p>
          <p class="text-2xl font-gowun">{{ launch.date }}</p>
          <button class="text-white text-2xl border-white border py-4 px-10 rounded-lg bg-dark_card font-gowun">See
            More
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {onMounted, ref} from 'vue';
import {getUpcomingLaunches} from "../services/launchService.ts";
import {formatDate} from "../utils/dateFormatter.ts";

export default {
  name: 'HomePage',
  setup() {
    const launches = ref([]);
    const loading = ref(true);
    const error = ref<string | null>(null);

    const fetchUpcomingLaunches = async () => {
      try {
        const launchesData = await getUpcomingLaunches();
        launches.value = launchesData.map((launch: any) => ({
          ...launch,
          date: formatDate(launch.date),
        }));
      } catch (e: any) {
        error.value = e.message;
      } finally {
        loading.value = false;
      }
    };

    onMounted(fetchUpcomingLaunches);

    return {
      launches,
      loading,
      error,
    };
  },
};

</script>

<style scoped>
</style>
