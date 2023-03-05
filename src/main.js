import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import { i18n } from './locale'
import { store } from './store'

createApp(App)
  .use(router)
  .use(i18n)
  .use(store)
  .mount('#app')
