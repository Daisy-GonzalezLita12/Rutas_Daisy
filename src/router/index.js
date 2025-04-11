//se importa el router
import { createRouter, createWebHashHistory } from 'vue-router';
// Agregando páginas de la aplicación 
import Home from '../Pages/Home.vue';
import About from '../Pages/About.vue';
import calculadoraV1 from '../Pages/calculadoraV1.vue';
import calculadoraV2 from '../Pages/calculadoraV2.vue';
import pagiba_web_eclipses from '../Pages/pagina_web_eclipses.vue';
import card1 from '../Pages/card1.vue';
import card2 from '../Pages/card2.vue';
import lista1 from '../Pages/lista1.vue';
import lista2 from '../Pages/lista2.vue';
import Padre1 from '../Pages/padre1.vue';
import Padre2 from '../Pages/Padre2.vue';
import eventos1 from '../Pages/Eventos1.vue';
import eventos2 from '../Pages/Eventos2.vue';
import Horario1 from '../Pages/Horario.vue';
import Horario2 from '../Pages/Horario2.vue';
import pagina_pizza from '../Pages/pagina_pizza.vue';

// Creamos un array, donde guardaremos las rutas de la aplicación
const routes= [    
    { path: '/',  name: 'Home', component:Home,},
    { path: '/about',  name: 'about',  component:About,},
    { path: '/calculadoraV1',  name: 'calculadoraV1', component:calculadoraV1,},
    { path: '/calculadoraV2', name: 'calculadoraV2', component:calculadoraV2,},
    { path: '/pagina_web_eclipses',name:'pagina_web_eclipses', component:pagiba_web_eclipses,},
    { path: '/card1',name:'card1',component:card1,},
    { path: '/card2', name:'card2', component:card2,},
    { path: '/lista1',name:'lista1',component:lista1, },
    { path: '/lista2', name:'lista2',component:lista2, },
    { path:'/Horario1',   name:'Horario1', component:Horario1, },
    { path:'/Horario2',name:'Horario2', component:Horario2, },
    {path:'/padre1', name:'Padre1', component:Padre1, },
    { path:'/Padre2', name:'Padre2',component:Padre2, },
    { path: '/eventos1',  name:'eventos1',
        component:eventos1,
    },
    {
        path: '/eventos2',
        name:'eventos2',
        component:eventos2,
    },
    {
        path: '/pagina_pizza',
        name:'pagina_pizza',
        component:pagina_pizza,
    },  
]

//Creamos el router que usa el modo de historial de #hash, también usa las rutas definidas en el array "routes"
const router=createRouter({
    // import.meta.env.BASE_URL:asegura que las rutas funcionen correctamente
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes,
});
//exportamos el router, para poder utilizarlo en la aplicación
export default router;
