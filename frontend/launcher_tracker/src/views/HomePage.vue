<template>
  <div>
    <!-- ! Header -->
    <HeaderComponent/>

    <!-- ! Page title-->
    <h1 class="text-center text-4xl text-white m-14 font-krona">Upcoming Launches</h1>

    <!-- ! Main Content -->
    <div v-if="loading" class="text-white">loading launches...</div>
    <div v-if="error" class="text-white">{{ error }}</div>
    <div v-else class="mx-auto flex items-center flex-col gap-5 w-[800px]">
      <div v-for="launch in launches" :key="launch.id" class="flex content-between bg-dark_card rounded-lg h-72 w-full">
        <img :src="launch?.thumbnail_url" alt="image of the rocket"
             class="h-auto w-64 rounded-l-lg object-cover object-center"/>
        <div class="flex items-center justify-evenly flex-col w-full h-full text-white text-center">
          <h3 class="text-xl font-krona">{{ launch.name }}</h3>
          <h2 class="text-2xl font-gowun">{{ launch.agency.name || 'No agency' }}</h2>
          <h2 class="text-2xl font-gowun">{{ launch.date }}</h2>
          <RouterLink :to="'/launch/' + launch.id"
                      class="text-white text-2xl border-white border py-4 px-10 rounded-lg bg-dark_card font-gowun">See
            More
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {onMounted, ref} from 'vue';
import {getUpcomingLaunches} from "../services/launchService.ts";
import {formatDate} from "../utils/dateFormatter.ts";
import HeaderComponent from "../../components/Header.vue";

export default {
  name: 'HomePage',
  components: {HeaderComponent},
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

<style>
</style>
