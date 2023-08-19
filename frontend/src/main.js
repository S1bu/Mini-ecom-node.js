import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
// import tailwind
import 'tailwindcss/base.css';
import 'tailwindcss/components.css';
import 'tailwindcss/utilities.css';
import '@tailwindcss/aspect-ratio';
// import bootstrap
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
// import css
import './assets/style.css'



createApp(App).use(store).use(router).mount('#app')
