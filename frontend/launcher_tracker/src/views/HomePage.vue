<template>
  <div>
    <h1>Lancements de Fusées</h1>
    <div v-if="loading">Chargement des lancements...</div>
    <div v-if="error">{{ error }}</div>
    <div v-else>
      <div v-for="launch in launches" :key="launch.id" class="launch-card">
        <h2>{{ launch.name }}</h2>
        <p>Date: {{ launch.date }}</p>
        <img :src="launch.image_url" alt="Image de la fusée" id="img" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, onMounted } from 'vue';
import { getLaunches } from "../services/launchService.ts";

export default {
  name: 'HomePage',
  setup() {
    const launches = ref([]);
    const loading = ref(true);
    const error = ref<string | null>(null);

    const fetchLaunches = async () => {
      try {
        launches.value = await getLaunches();
      } catch (err) {
        error.value = 'Erreur lors du chargement des lancements.';
      } finally {
        loading.value = false;
      }
    };

    onMounted(fetchLaunches);

    return {
      launches,
      loading,
      error,
    };
  },
};

</script>

<style scoped>
.launch-card {
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px 0;
}

#img {
  width: 100px;
  height: 100px;
}
</style>
