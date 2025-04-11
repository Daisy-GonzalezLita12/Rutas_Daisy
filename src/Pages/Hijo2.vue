<script setup>
import { ref } from 'vue'
defineProps({
  nombre: String, edad: String, carrera: String, direccion: String, telefono: String,
})
const count = ref(0)
</script>
<template>
    <h5 style="color:coral">Soy el componente Hijo 2</h5>
    <h5 style="color:coral">{{ nombre }}</h5>
    <h5 style="color:coral">{{ edad }}</h5> 
    <h5 style="color:coral">{{ carrera }}</h5>
    <h5 style="color:coral">{{ direccion }}</h5>
    <h5 style="color:coral">{{ telefono }}</h5>
</template>


