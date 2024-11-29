<template>
  <!-- ! Header -->
  <HeaderComponent/>

  <div class="flex flex-col mx-auto text-white m-14 items-start justify-center gap-5 w-[800px]">
    <button @click="goBack" class="text-xs">&#x2B8C; BACK TO LAUNCHES</button>
    <h2 class="text-3xl font-krona">{{ launch?.name }}</h2>
  </div>
  <div v-if="loading" class="flex items-center justify-center">
    <LoadingSpinner></LoadingSpinner>
  </div>
  <div v-if="error" class="text-white text-center">{{ error }}</div>
  <div v-else-if="!loading" class="flex flex-col mx-auto items-center gap-5 w-[800px]">
    <div class="flex content-between bg-dark_card rounded-lg h-72 w-full">
      <img :src="launch?.thumbnail_url" alt="image of the rocket"
           class="h-auto w-64 min-w-64 rounded-l-lg object-cover object-center">
      <div class="flex items-center justify-evenly flex-col w-full h-full text-white text-center">
        <h3 class="text-xl font-krona">
          {{ launch?.name }}
        </h3>
        <p class="text-2xl font-gowun">{{ launch?.agency?.name }}</p>
        <p class="text-2xl font-gowun">{{ launch?.date }}</p>
      </div>
    </div>

    <div class="flex content-between bg-dark_card rounded-lg h-72 w-full">
      <img :src="launch?.agency?.image_url" alt="image of the agency"
           class="h-auto w-64 rounded-l-lg object-cover object-center">
      <div class="flex items-center justify-evenly flex-col w-full h-full text-white">
        <h3 class="text-xl font-krona text-center">
          {{ launch?.agency?.name }}
        </h3>
        <h3 class="text-xl font-gowun text-center line-clamp-5">
          {{ launch?.agency?.description }}
        </h3>
        <h3 class="text-xl font-gowun text-center">
          {{ launch?.agency?.ceo }}
        </h3>
        <h3 class="text-xl font-gowun text-center">
          {{ launch?.agency?.country_name }}
        </h3>
        <h3 class="text-xl font-gowun text-center">
          {{ launch?.agency?.founding_year }}
        </h3>
        <p class="text-2xl font-gowun"></p>
        <p class="text-2xl font-gowun"></p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {onMounted, ref} from "vue";
import {getAgencyById, getLaunchById} from "@/services/launchService.ts";
import {useRoute} from "vue-router";
import HeaderComponent from "@/components/Header.vue";
import {formatDate} from "@/utils/dateFormatter.ts";
import router from "@/router/router.ts";
import LoadingSpinner from "@/components/Loading.vue";

const route = useRoute();
const launchId = route.params.id as string;
const launch = ref();
const agency = ref();
const loading = ref(true);
const error = ref<string | null>(null);
const fetchLaunch = async () => {
  try {
    const launchData = await getLaunchById(launchId);
    launch.value = {
      ...launchData,
      date: formatDate(launchData.date),
    };
    agency.value = await getAgencyById(launch.value?.agency?.id);
  } catch (e: any) {
    error.value = e.message;
  } finally {
    loading.value = false;
  }
};

const goBack = () => {
  router.back();
}

onMounted(fetchLaunch);
</script>

<style>
</style>