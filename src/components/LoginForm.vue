<script setup>
import { ref, inject } from 'vue'
const GlobalStore = inject('GlobalStore')

const props = defineProps({
  login: {
    type: String,
    required: true,
  },
  pw: {
    type: String,
    required: true,
  },
})
const login = ref(props.login)
const pw = ref(props.pw)
const errorMsg = ref('')

const loginIn = (login, pw) => {
  if (login !== 'test' || pw !== 'test') {
    errorMsg.value = 'Identifiant invalide'
  } else {
    errorMsg.value = 'Co OK'
    GlobalStore.userToken = 'ABCDEF'
    console.log(GlobalStore.userToken)
  }
}
</script>

<template>
  <form @submit.prevent="loginIn(login, pw)">
    <label>
      Login
      <input type="text" name="login" id="login" v-model="login" />
    </label>
    <label>
      Password
      <input type="password" name="pw" id="pw" v-model="pw" />
    </label>
    <button type="submit">Se connecter</button>
    <p>{{ errorMsg }}</p>
  </form>
</template>

<style scoped></style>
