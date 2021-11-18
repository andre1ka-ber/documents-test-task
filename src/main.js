import { createApp } from 'vue'
import App from './App.vue'
import "./assets/fonts/fontawesome/css/all.min.css"

import store from "./store/store"

const app = createApp(App)

app.use(store)

app.mount('#app')
