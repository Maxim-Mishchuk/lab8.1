import { createApp } from 'vue'
import App from './App.vue'
import Navbar from "@/components/Navbar.vue";
import router from './router'
import store from '@/store'

import "@/assets/css/form.css";
import '@/assets/css/table.css';

const app = createApp(App)

app
    .use(router)
    .use(store)
    .component('Navbar', Navbar)
    .mount('#app')
