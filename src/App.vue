<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
</script>

<template>
  <header class="wrapper">
    <Navbar />
  </header>

  <RouterView />
</template>

<style scoped></style>
