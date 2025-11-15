<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'
import HeroBanner from '@/components/HeroBanner.vue'

const route = useRoute()
const film = ref(null)
const trailer = ref(null)

onMounted(async () => {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${route.params.id}?api_key=a1f232f6ef5ed65828d1c179dea606f3&language=fr-FR`,
    )
    film.value = data
    const { data: videosData } = await axios.get(
      `https://api.themoviedb.org/3/movie/${route.params.id}/videos?api_key=a1f232f6ef5ed65828d1c179dea606f3&language=fr-FR`,
    )
    trailer.value = videosData.results.find((v) => v.type === 'Trailer' && v.site === 'YouTube')
  } catch (err) {
    console.error(err)
  }
})
</script>

<template>
  <main v-if="film" class="wrapper">
    <HeroBanner
      :text="film.title"
      :filmImg="`https://image.tmdb.org/t/p/w500${film.poster_path}`"
      :icon="'popcorn.png'"
    />
    <p>{{ film.overview }}</p>
    <div v-if="trailer" class="trailer">
      <h2>Bande-annonce</h2>
      <iframe
        width="100%"
        height="500px"
        :src="`https://www.youtube.com/embed/${trailer.key}`"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
    <div v-else>
      <h2>Aucune bande-annonce disponible.</h2>
    </div>
  </main>
</template>
