import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// Importamos el router
import router from './router'

//Indicamos que se use el directorio donde se encuentran las rutas
createApp(App).use(router).mount('#app')
