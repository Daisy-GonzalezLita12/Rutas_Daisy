<template>
  <div class="container">
      <h3 class="mt-4">Horario de clases de sistemas</h3>
      <table class="table">
<thead>
  <tr>
    <th scope="col">Hora</th>
    <th scope="col">Lunes</th>
    <th scope="col">Martes</th>
    <th scope="col">Miercoles</th>
    <th scope="col">Jueves</th>
    <th scope="col">Viernes</th>

  </tr>
</thead>
<tbody>
 <tr v-for="(h, index) in horario" :key="index">
    <td>{{ h.hora }}</td>
    <td>{{ h.lunes}}</td>
    <td>{{ h.martes}}</td>
    <td>{{ h.miercoles }}</td>
    <td>{{ h.jueves}}</td>
    <td>{{ h.viernes }}</td>
  </tr>
</tbody>
</table>
  </div>
</template>

<script setup>
// importamos la referencia de vue
import { ref } from 'vue';
// Agregamos la constante del  horario 
const horario =ref ([
  {hora: '7:00 - 9:00', lunes:'IA', martes:'Ágil', miercoles:'Web', jueves:'IA', viernes:'Móvil'},
  {hora: '9:00 - 11:00', lunes:'IA', martes:'Ágil', miercoles:'Web', jueves:'IA', viernes:'Móvil'},
  {hora: '11:00 - 13:00', lunes:'Libre', martes:'Ágil', miercoles:'Web', jueves:'IA', viernes:'Móvil'},
  {hora: '13:00 - 15:00', lunes:'IA', martes:'Ágil', miercoles:'Web', jueves:'IA', viernes:'Móvil'},
  {hora: '15:00 - 17:00', lunes:'IA', martes:'Ágil', miercoles:'Web', jueves:'IA', viernes:'Móvil'},
  {hora: '17:00 - 19:00', lunes:'IA', martes:'Ágil', miercoles:'Web', jueves:'IA', viernes:'Móvil'},

])
</script>

<style scoped>
h3{
  color:black;
  background-color:rgb(207, 140, 216);
  border-radius: 15px;
  padding: 10px;
  text-align: center;
  font-size: 33px;
}
</style>