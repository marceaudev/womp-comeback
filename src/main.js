import './assets/main.css'

import { createApp, ref } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

const userToken = ref('')

app.provide('GlobalStore', { userToken: userToken })

app.mount('#app')
