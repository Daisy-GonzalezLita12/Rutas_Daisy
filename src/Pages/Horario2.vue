<template>
    <!-- Inicio de la tabla 1 -->
      <div class="container">
        <!-- Título -->
          <h4 style="text-align: center;" class="mt-4"><b>CARGA ACADÉMICA DEL GRUPO "6 BS"</b></h4>
    <table class="table table-bordered">
    <thead class="table-dark">
      <tr>
        <th scope="col">N° control</th>
        <th scope="col">Nombre</th>
        <th scope="col">Grado</th>
        <th scope="col">Periodo</th>
      </tr>
    </thead>
    <tbody>
     <tr v-for="(horario, index) in horarios" :key="index">
        <td>{{ horario.n_control}}</td>
        <td>{{ horario.nombre}}</td>
        <td>{{ horario.grado}}</td>
        <td>{{ horario.periodo }}</td>
      </tr>
    </tbody>
  </table>
      <!-- Fin de la tabla 1 -->
      </div>
  
      <!-- Inicio de la tabla 2 -->
    <div class="container">
   <table class="table table-bordered">
    <thead class="table-dark">
      <tr>
        <th scope="col">Carrera</th>
        <th scope="col">Especialidad</th>
        <th scope="col">Créditos</th>
        <th scope="col">Plan de estudios</th>
      </tr>
    </thead>
    <tbody>
     <tr v-for="(h, index) in carga" :key="index">
        <td>{{ h.carrera}}</td>
        <td>{{ h.especialidad}}</td>
        <td>{{ h.Creditos}}</td>
        <td>{{ h.plan_estudios }}</td>
      </tr>
    </tbody>
  </table>
      <!-- Fin de la tabla 2 -->
      </div>
  
      <!-- Inicio de la tabla 3 -->
     <div class="container">
      <table class="table table-bordered">
    <thead class="table-dark">
      <tr>
        <th scope="col">Materia</th>
        <th scope="col">Rep</th>
        <th scope="col">Cr</th>
        <th scope="col">Lunes</th>
        <th scope="col">Martes</th>
        <th scope="col">Miércoles</th>
        <th scope="col">Jueves</th>
        <th scope="col">Viernes</th>
        <th scope="col">Sábado</th>
        <th scope="col">Domingo</th>
  
      </tr>
    </thead>
    <tbody>
     <tr v-for="(d, index) in datos" :key="index">
        <td>{{ d.materia }}</td>
        <td>{{ d.rep }}</td>
        <td>{{ d.cr }}</td>
        <td>{{ d.lunes }}</td>
        <td>{{ d.martes }}</td>
        <td>{{ d.miercoles }}</td>
        <td>{{ d.jueves }}</td>
        <td>{{ d.viernes }}</td>
        <td>{{ d.sabado }}</td>
        <td>{{ d.domingo }}</td>
      </tr>
    </tbody>
  </table>
      <!-- Fin de la tabla 3 -->
      </div>
  </template>
  
  <script setup>
  // importamos la referencia de vue
  import { ref } from 'vue';
  // Agregamos la constante del  horario 
  const horarios =ref ([
      {n_control: '22620056', nombre:'GONZALEZ LITA DAISY', grado:'6', periodo:'ENE-JUN 25'},
  
  ])
  // Agregamos la constante de carga
  const carga =ref ([
    {carrera: 'INGENIERÍA EN SISTEMAS COMPUTACIONALES', especialidad:'   ', Creditos:'33', plan_estudios:'ISIC-2010-224'},
  
  ])
  
  // Agregamos la constante de datos
  const datos =ref([
    {materia:'SCD1015 / 6BS / LENGUAJES Y AUTÓMATAS I / SOLANO HERNÁNDEZ MIGUEL ÁNGEL', rep:'N', cr:'5', lunes:'11:00-13:00 / MAG5', martes:'   ', miercoles:'11:00-13:00 / 4', jueves:'  ', viernes:'12:00-13:00 / RDS', sabado:' ', domingo:' '},
    {materia:'SCD1021 / 6BS / REDES DE COMPUTADORAS / SANCHEZ VASQUEZ LUCIA', rep:'N', cr:'5', lunes:'   ', martes:'13:00-15:00 / ACS', miercoles:'  ', jueves:'13:00-15:00 / ACS', viernes:'16:00-17:00 / LDS', sabado:' ', domingo:' '},
    {materia:'AEB1055 / 6BS / PROGRAMACIÓN WEB / VASQUEZ MARTÍNEZ JOSUÉ ISRAEL', rep:'N', cr:'5', lunes:'  ', martes:'17:00-19:00 / ACS', miercoles:'  ', jueves:'17:00-19:00 / ACS', viernes:'13:00-14:00 / ACS', sabado:' ', domingo:' '},
    {materia:'SCA1028 / 6BS / TALLER DE SISTEMAS OPERATIVOS / CRUZ PÉREZ JORGE', rep:'N', cr:'4', lunes:'13:00-15:00 / LDS', martes:'   ', miercoles:'13:00-15:00 / LDS', jueves:'  ', viernes:'  ', sabado:' ', domingo:' '},
    {materia:'SCB1001 / 6BS / ADMINISTRACIÓN DE BASES DE DATOS / GARCIA HERNÁNDEZ HILARIO VIDAL', rep:'N', cr:'5', lunes:'  ', martes:'15:00-17:00 / MAG4', miercoles:'15:00-17:00 / LDS', jueves:'  ', viernes:'14:00-15:00 / LDS ', sabado:' ', domingo:' '},
    {materia:'SCC1014 / 6BS / LENGUAJES DE INTERFAZ / SANCHEZ VASQUEZ LUCIA', rep:'N', cr:'4', lunes:'  ', martes:'11:00-13:00 / MAG2', miercoles:'17:00-19:00 / RDS', jueves:'  ', viernes:' ', sabado:' ', domingo:' '},
    {materia:'SCD1011 / 6BS / INGENIERÍA DE SOFTWARE / ROMAN CRUZ JOSE ALFREDO', rep:'N', cr:'5', lunes:'15:00-17:00 / LDS', martes:' ', miercoles:' ', jueves:'15:00-17:00 / LDS', viernes:'15:00-14:00 / RDS ', sabado:' ', domingo:' '},
  ])
  </script>
  
  <style scoped>
  h3{
      color:black;
     text-align: center;   
     font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  }
  td{
    font-family:Arial, Helvetica, sans-serif;
  }
  </style>