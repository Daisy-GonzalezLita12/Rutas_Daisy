<script setup>
import { ref } from 'vue'
import Hijo_1 from '../Pages/Hijo1.vue'
import Hijo_2 from '../Pages/Hijo2.vue'
const props = defineProps({
  nombre: String,
})
const count = ref(0)
</script>
<template>
    <div class="container">
        <!-- Título -->
        <h3 style="color: darkgreen; text-align: center;">Hola soy el componente padre</h3> <br>
        <!-- Se manda a traer el componente el componente "Hijo_1" y se le asigna una edad-->
         <Hijo_1 class="mt-4" nombre="Nombre: Coral Rosas Cruz" edad=" Edad: 25 años" carrera="Carrera: Ingeniería en Sistemas Computacionales" direccion="Dirección: Hipodromo #2" telefono="Teléfono: 953 127 3487"/>
        <!-- Se manda a traer el componente el componente "Hijo_2" y se le asigna una edad-->   <br>
         <Hijo_2 class="mt-4" nombre="Nombre: Karina Rojas Colores" edad="Edad: 23 años" carrera="Carrera: Licenciatura en Administración" direccion="Dirección: Hipodromo #8" telefono="Teléfono: 221 097 9361"/>
    </div>
   </template>


