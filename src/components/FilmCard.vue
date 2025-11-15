<script setup>
defineProps({
  film: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div class="filmCard">
    <img :src="`https://image.tmdb.org/t/p/w500${film.poster_path}`" :alt="film.title" />
    <div class="filmInfo">
      <h3>{{ film.title }}</h3>
    </div>
  </div>
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
