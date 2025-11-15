<script setup>
import HeroBanner from '../components/HeroBanner.vue'
</script>

<template>
  <main class="wrapper">
    <HeroBanner
      :text="'Profitez de notre catalogue à partir de'"
      :price="9.99"
      :icon="'popcorn.webp'"
    />
  </main>
</template>

<style scoped></style>
