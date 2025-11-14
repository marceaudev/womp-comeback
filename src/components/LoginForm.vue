<script setup>
import { ref, inject } from 'vue'
import { useRouter } from 'vue-router'
import MainButton from './MainButton.vue'
import StatusMessage from './StatusMessage.vue'

const GlobalStore = inject('GlobalStore')
const router = useRouter()

const login = ref('')
const pw = ref('')
const error = ref(true)
const statusMessage = ref('')

const loginIn = () => {
  if (login.value !== 'test' || pw.value !== 'test') {
    error.value = true
    statusMessage.value = 'Identifiant invalide'
  } else {
    error.value = false
    statusMessage.value = 'Co OK'
    GlobalStore.userToken.value = 'ABCDEF'
    console.log(GlobalStore.userToken)
    setTimeout(() => {
      router.push('/')
    }, 1000)
  }
}
</script>

<template>
  <form @submit.prevent="loginIn">
    <label>
      Login
      <input type="text" v-model="login" />
    </label>

    <label>
      Password
      <input type="password" v-model="pw" />
    </label>
    <MainButton text="Se connecter" />
    <StatusMessage :text="statusMessage" :error="error" v-if="statusMessage" />
  </form>
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
  background-color: var(--light-transparent);
  border: 1px solid var(--muted-coral);
  border-radius: var(--main-radius);
  width: 100%;
  max-width: 200px;
}
</style>
