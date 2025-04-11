<script setup>
import { ref } from 'vue'
defineProps({
  edad: String,
})
const count = ref(0)
</script>
<template>
  <h5 style="color: darkorchid;">Soy el componente Hijo 1</h5>
  <h5 style="color: darkorchid;">{{ edad }}</h5> 
</template>


