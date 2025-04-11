<script setup>
import { ref } from 'vue'
import Hijo1 from '../Pages/hijo_1.vue'
import Hijo2 from '../Pages/hijo_2.vue'
const props = defineProps({
  nombre: String,
})
const count = ref(0)
</script>
<template>
    <div class="container">
        <!-- Título -->
        <h3 style="color: darkgreen;text-align: center;">Soy el componente padre</h3>
        <!-- Se manda a traer el componente el componente "Hijo1" y se le asigna una edad-->
         <Hijo1  class="mt-4" edad="Edad: 10 años"/>
        <!-- Se manda a traer el componente el componente "Hijo2" y se le asigna una edad-->
         <Hijo2  class="mt-4" edad="Edad: 4 años"/>
    </div>
   </template>


