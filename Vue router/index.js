import { createApp } from 'vue'
import RouterApp from './router/App.vue' 
import { router } from './router/router.js'

const app = createApp(RouterApp)
app.use(router)
app.mount('#app')  