<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'
import HeroBanner from '@/components/HeroBanner.vue'

const route = useRoute()
const film = ref(null)
const trailer = ref(null)
const loadingTrailer = ref(true)

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
  } finally {
    loadingTrailer.value = false
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

    <div class="trailer">
      <h2>Bande-annonce</h2>
      <div v-if="loadingTrailer" class="loader">Chargement du trailer...</div>
      <iframe
        v-else-if="trailer"
        width="100%"
        height="500px"
        :src="`https://www.youtube.com/embed/${trailer.key}`"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <h3 v-else>Aucune bande-annonce disponible.</h3>
    </div>
  </main>
</template>

<style scoped>
p {
  margin: 20px 0;
  line-height: 1.6;
  font-size: 1.1rem;
  color: var(--warm-beige);
}

h2 {
  margin-bottom: 15px;
  color: var(--muted-red);
}

iframe {
  border-radius: var(--main-radius);
}

.loader {
  color: var(--warm-beige);
}
</style>
