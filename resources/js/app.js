import './bootstrap';

import { createApp } from 'vue';
import { createPinia } from 'pinia'
import router from './router';

import App from './layouts/App.vue';
import Backaend from './layouts/Backend.vue'
const pinia = createPinia()

createApp(app).mount("#app");

createApp(App)
    .use(router)
    .use(pinia)
    .mount('#app')

