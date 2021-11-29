import { createApp } from 'vue'
import App from './App.vue'
// Router is necessary to make more routes
import router from './router'



createApp(App)
  .use(router)
  .mount('#app')
