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
      <RouterLink to="/"><img src="../assets/imgs/womp.png" /></RouterLink>
    </div>
    <div class="navigation">
      <RouterLink to="/" v-if="token">Accueil</RouterLink>
      <RouterLink to="/login" v-else>Se connecter</RouterLink>
      <MainButton text="Déconnexion" logout v-if="token" @click="logout" />
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

.logo img {
  height: 40px;
}

.navigation {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}
</style>
