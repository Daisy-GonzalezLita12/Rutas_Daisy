<script setup>
import { ref } from 'vue'
defineProps({
  nombre: String, edad: String, carrera: String, direccion: String, telefono: String,
})
const count = ref(0)
</script>
<template>
    <h5 style="color:blueviolet">Soy el componente Hijo 1</h5>
    <h5 style="color:blueviolet">{{ nombre }}</h5>
    <h5 style="color:blueviolet">{{ edad }}</h5> 
    <h5 style="color:blueviolet">{{ carrera }}</h5>
    <h5 style="color:blueviolet">{{ direccion }}</h5>
    <h5 style="color:blueviolet">{{ telefono }}</h5>
</template>



