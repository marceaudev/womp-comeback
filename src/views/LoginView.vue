<script setup>
import LoginForm from '@/components/LoginForm.vue'
</script>

<template>
  <main class="wrapper">
    <LoginForm />
  </main>
</template>

<style scoped>
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: var(--page-height);
}
</style>
