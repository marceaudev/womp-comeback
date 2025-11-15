<script setup>
import { ref, inject } from 'vue'
import { useRouter } from 'vue-router'
import MainButton from './MainButton.vue'
import StatusMessage from './StatusMessage.vue'

const GlobalStore = inject('GlobalStore')
const router = useRouter()

const login = ref('')
const pw = ref('')
const error = ref(false)
const logOk = ref(false)
const statusMessage = ref('')

const loginIn = () => {
  if (login.value !== 'test' || pw.value !== 'test') {
    error.value = true
    statusMessage.value = 'Identifiant invalide'
  } else {
    error.value = false
    logOk.value = true
    statusMessage.value = 'Connexion réussie. Redirection en cours...'
    setTimeout(() => {
      GlobalStore.userToken.value = 'ABCDEF'
      router.push('/')
    }, 1000)
  }
}

const clearError = () => {
  error.value = false
  statusMessage.value = ''
}
</script>

<template>
  <form @submit.prevent="loginIn" v-if="logOk === false">
    <input type="text" v-model="login" placeholder="Nom d'utilisateur" @input="clearError" />
    <input type="password" v-model="pw" placeholder="Mot de passe" @input="clearError" />
    <MainButton text="Se connecter" />
  </form>

  <StatusMessage :text="statusMessage" :error="error" v-if="statusMessage" />
</template>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

label {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
  color: var(--warm-beige);
}

input {
  background-color: var(--dark-transparent);
  border: 1px solid var(--muted-coral);
  border-radius: var(--main-radius);
  width: 100%;
  min-width: 200px;
  text-align: center;
  color: var(--warm-beige);
  height: 40px;
  font-size: 1rem;
}
</style>
