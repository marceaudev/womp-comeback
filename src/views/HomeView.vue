<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'
import HeroBanner from '@/components/HeroBanner.vue'
import FilmCard from '@/components/FilmCard.vue'

const page = ref(1)
const films = ref([])

onMounted(async () => {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=a1f232f6ef5ed65828d1c179dea606f3&language=fr-FR&page=` +
        page.value,
    )
    films.value = data.results
    console.log('Data >>>', data)
  } catch (error) {
    console.log('catch >>>', error)
  }
})
</script>

<template>
  <main class="wrapper">
    <HeroBanner :text="'Films populaires'" :icon="'flamme.png'" />
    <div>
      <div class="filmGrid">
        <FilmCard v-for="film in films" :key="film.id" :film="film" />
      </div>
    </div>
  </main>
</template>

<style scoped>
.filmGrid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
  justify-items: center;
}
</style>
