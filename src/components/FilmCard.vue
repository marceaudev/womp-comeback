<script setup>
import { onMounted, ref, computed } from 'vue'
import VanillaTilt from 'vanilla-tilt'

const props = defineProps({
  film: {
    type: Object,
    required: true,
  },
})

const tilt = ref(null)
onMounted(() => {
  if (tilt.value) {
    VanillaTilt.init(tilt.value, {
      max: 5,
      speed: 500,
    })
  }
})

const posterSrc = computed(() => {
  return props.film.poster_path
    ? `https://image.tmdb.org/t/p/w500${props.film.poster_path}`
    : new URL('../assets/imgs/default.jpg', import.meta.url).href
})
</script>

<template>
  <router-link :to="`/film/${props.film.id}`">
    <div ref="tilt" class="filmCard">
      <img :src="posterSrc" :alt="props.film.title || 'Image par défaut'" />
      <div class="filmInfo">
        <h3>{{ props.film.title }}</h3>
      </div>
    </div>
  </router-link>
</template>

<style scoped>
.filmCard {
  background-color: var(--soft-black);
  color: var(--warm-beige);
  cursor: pointer;
  transition: transform 0.3s;
  text-align: center;
  position: relative;
  overflow: hidden;
  border-radius: var(--main-radius);
  height: 100%;
}

.filmCard:hover {
  transform: scale(1.02);
}

.filmCard img {
  width: 100%;
  border-radius: var(--main-radius);
  height: 100%;
  object-fit: cover;
}

.filmInfo {
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: var(--dark-transparent);
  backdrop-filter: blur(5px);
  padding: 1rem 0;
}
</style>
