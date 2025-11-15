<script setup>
import { onMounted, ref, watch } from 'vue'
import axios from 'axios'
import HeroBanner from '@/components/HeroBanner.vue'
import FilmCard from '@/components/FilmCard.vue'
import PageSelector from '@/components/PageSelector.vue'

const page = ref(1)
const films = ref([])
const totalPages = 20 // tu peux monter à 500 si tu veux

async function fetchFilms() {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=a1f232f6ef5ed65828d1c179dea606f3&language=fr-FR&page=${page.value}`,
    )
    films.value = data.results
  } catch (error) {
    console.log('Erreur >>>', error)
  }
}

onMounted(fetchFilms)
watch(page, fetchFilms)
</script>

<template>
  <main class="wrapper">
    <HeroBanner text="Films populaires" icon="flamme.png" />
    <PageSelector :currentPage="page" :totalPages="totalPages" @update:page="page = $event" />
    <div class="filmGrid">
      <FilmCard v-for="film in films" :key="film.id" :film="film" />
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
