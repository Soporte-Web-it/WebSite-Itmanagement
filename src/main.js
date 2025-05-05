import './assets/main.css'
import { MotionPlugin } from '@vueuse/motion'
import '@fortawesome/fontawesome-free/css/all.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import AOS from 'aos'
import 'aos/dist/aos.css'

const app = createApp(App)

app.use(MotionPlugin) // Esto sí va
app.use(createPinia())
app.use(router)

AOS.init()

app.mount('#app') // Monta al final

