<script setup>
import { ref, inject } from 'vue'
import { useRouter } from 'vue-router'

const GlobalStore = inject('GlobalStore')
const router = useRouter()

const login = ref('')
const pw = ref('')
const errorMsg = ref('')

const loginIn = () => {
  if (login.value !== 'test' || pw.value !== 'test') {
    errorMsg.value = 'Identifiant invalide'
  } else {
    errorMsg.value = 'Co OK'
    GlobalStore.userToken.value = 'ABCDEF'
    console.log(GlobalStore.userToken)
    router.push('/')
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

    <button type="submit">Se connecter</button>

    <p>{{ errorMsg }}</p>
  </form>
</template>
