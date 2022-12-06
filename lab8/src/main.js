import { createApp } from 'vue'
import App from './App.vue'
import Navbar from "@/components/Navbar.vue";
import router from './router'

const app = createApp(App)

app
    .use(router)
    .component('Navbar', Navbar)
    .mount('#app')
