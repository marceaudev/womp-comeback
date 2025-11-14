import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { GlobalStore } from './store'

const app = createApp(App)

app.use(router)

app.provide('GlobalStore', GlobalStore)

app.mount('#app')
