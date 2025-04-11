<script setup>
import { ref } from 'vue'
defineProps({
  edad: String,
})
const count = ref(0)
</script>
<template>
  <h5 style="color: saddlebrown;">Soy el componente Hijo 2</h5>
  <h5 style="color: saddlebrown;">{{ edad }}</h5>
  
</template>


