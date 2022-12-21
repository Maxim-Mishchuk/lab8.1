import { createApp } from 'vue'
import App from '@/App.vue'
import Navbar from "@/components/Navbar.vue";
import CustomSubmit from "@/components/CustomSubmit.vue";
import router from '@/router'
import store from '@/store'

import VueTheMask from 'vue-the-mask'

import "@/assets/css/form.css";
import '@/assets/css/table.css';

const app = createApp(App)

app
    .use(router)
    .use(store)
    .use(VueTheMask)
    .component('Navbar', Navbar)
    .component('CustomSubmit', CustomSubmit)
    .mount('#app')
