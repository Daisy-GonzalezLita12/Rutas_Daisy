<script>
export default{
    data(){
        return{
        // Datos de alumnos, se crea un arreglo de objetos
        alumnos:[
            {nc: 22620056, nombre:'Daisy', carrera:'ISC' },
            {nc: 22620045, nombre:'Mayra', carrera:'TICS'},
            {nc: 22620078, nombre:'Diana', carrera:'ISC'},
            {nc: 22620089, nombre:'Luis', carrera:'TICS'},
            {nc: 22620090, nombre:'Juan', carrera:'IGE'},
            {nc: 22620091, nombre:'Sofia', carrera:'ADMON'},
            {nc: 22620092, nombre:'Monica', carrera:'ISC'},
        ]
        }
    },
}
</script>

<template>
<div class="container">
    <!-- Se agrega uan lista de alumnos -->
     <h3 class="mt-4">Lista de alumnos</h3>
     <ul>
        <!-- Se crea un ciclo for -->
        <li v-for="alumno in alumnos" :key="alumno.nc">
            <strong>{{ alumno.nombre }} </strong> -
            <strong>{{ alumno.carrera}} </strong>


        </li>
     </ul>
</div>
</template>
<style scoped>
h3{
    color:black;
    background-color:#e6b0aa;
    border-radius: 15px;
    padding: 10px;
    text-align: center;
    font-size: 20px;
}
ul{
    /* Elimina las viñetas */
    list-style: none;
    padding:0%;
}
li{
    color:black;
    background-color:#aae6d9;
    border-radius: 15px;
    padding: 10px;
    margin: 10px;
    text-align: center;
    font-size: 15px;
}
</style>