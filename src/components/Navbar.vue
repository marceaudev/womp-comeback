<script setup>
import { inject, computed } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import MainButton from './MainButton.vue'

const GlobalStore = inject('GlobalStore')
const router = useRouter()

const token = computed(() => GlobalStore.userToken.value)

const logout = () => {
  GlobalStore.userToken.value = null
  router.push('/login')
}
</script>

<template>
  <nav>
    <div class="logo">
      <h1>LOGO</h1>
    </div>
    <div class="navigation">
      <RouterLink to="/" v-if="token">Home</RouterLink>
      <RouterLink to="/login" v-else>Login</RouterLink>
      <MainButton text="Logout" logout v-if="token" @click="logout" />
    </div>
  </nav>
</template>

<style scoped>
nav {
  height: var(--navbar-height);
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--warm-beige);
}
</style>
