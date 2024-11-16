import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router.ts'
import './assets/input.css'

const app = createApp(App);
app.use(router);
app.mount('#app');