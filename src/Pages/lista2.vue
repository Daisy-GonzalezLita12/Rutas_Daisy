<script>
   export default{
    data() {
        return{
            //  Creamos un array con información personalizada
            lista:[
            {id: 1, nombre:'Jasmine', ap_paterno:'Solano', ap_materno:'Rodrígez', deporte_fav:'Futbol', color_fav:'Azul', comida_fav:'Pizza'},
            {id: 2, nombre:'Diana', ap_paterno:'González', ap_materno:'Arzola', deporte_fav:'Basquetbol', color_fav:'Rojo', comida_fav:'Tacos dorados'},
            {id: 3, nombre:'Mayra', ap_paterno:'Montesinos', ap_materno:'García', deporte_fav:'Voleibol', color_fav:'Verde', comida_fav:'Pechuga de pollo a la plancha'},
            {id: 4, nombre:'Lucia', ap_paterno:'Velázquez', ap_materno:'Rosas', deporte_fav:'Beisbol', color_fav:'Amarillo', comida_fav:'Enchiladas'},    
            {id: 5, nombre:'Juan', ap_paterno:'Maldonado', ap_materno:'Gomez', deporte_fav:'Natación', color_fav:'Morado', comida_fav:'Tamales'},
            {id: 6, nombre:'Sofia', ap_paterno:'Pérez', ap_materno:'Ayala', deporte_fav:'Atletismo', color_fav:'Rosa', comida_fav:'Ensalada César'},
            {id: 7, nombre:'Eduardo', ap_paterno:'Guzmán', ap_materno:'Guzmán', deporte_fav:'Natación', color_fav:'Azul', comida_fav:'Hamburguesa'},
            {id: 8, nombre:'Monica', ap_paterno:'Coronel', ap_materno:'Ocampo', deporte_fav:'Futbol', color_fav:'Púrpura', comida_fav:'Sopes'},
            {id: 9, nombre:'Pedro', ap_paterno:'Rendón', ap_materno:'Aparicio', deporte_fav:'Basquetbol', color_fav:'Naranja', comida_fav:'Pasta'},
            {id: 10, nombre:'Daisy', ap_paterno:'González', ap_materno:'Lita', deporte_fav:'Futbol', color_fav:'Azul', comida_fav:'Lasaña'},
            {id: 11, nombre:'Abraham', ap_paterno:'Rosales', ap_materno:'Martínez', deporte_fav:'Futbol', color_fav:'Naranja', comida_fav:'Omelette de espinacas'},
            {id: 12, nombre: "Fernanda", ap_paterno: "García", ap_materno: "Sánchez", deporte_fav: "Voleibol", color_fav: "Verde", comida_fav: "Pasta con pollo" },
            {id: 13, nombre: "Luis", ap_paterno: "Pérez", ap_materno: "Torres", deporte_fav: "Fútbol", color_fav: "Negro", comida_fav: "Tacos al pastor" },
            {id: 14, nombre: "Andrea", ap_paterno: "Díaz", ap_materno: "Castro", deporte_fav: "Ciclismo", color_fav: "Morado", comida_fav: "Salmón al horno" },
            {id: 15, nombre: "Jorge", ap_paterno: "Ramírez", ap_materno: "Ortega", deporte_fav: "Tenis", color_fav: "Blanco", comida_fav: "Arroz con pollo" },
            {id: 16, nombre: "Valeria", ap_paterno: "Morales", ap_materno: "Núñez", deporte_fav: "Atletismo", color_fav: "Amarillo", comida_fav: "Sopa de verduras" },
            {id: 17, nombre: "Ricardo", ap_paterno: "Gómez", ap_materno: "Luna", deporte_fav: "Beisbol", color_fav: "Gris", comida_fav: "Chiles rellenos" },
            {id: 18, nombre: "Azucena", ap_paterno: "Medina", ap_materno: "Vargas", deporte_fav: "Patinaje", color_fav: "Turquesa", comida_fav: "Pizza de vegetales" },
            {id: 19, nombre: "Emilio", ap_paterno: "Herrera", ap_materno: "Rojas", deporte_fav: "Boxeo", color_fav: "Celeste", comida_fav: "Pescado empanizado" },
            {id: 20, nombre: "Carlos", ap_paterno: "Hernández", ap_materno: "Ruiz", deporte_fav: "Básquetbol", color_fav: "Rojo", comida_fav: "Pechuga asada" }
            ]
        }
    },
   }
</script>

<template>
<div class="container">
<!-- Se agrega la lista -->
<h3 class="mt-4">DATOS DE LOS ESTUDIANTES</h3>
<ul>
    <li v-for="estudiantes in lista" :key="estudiantes.id">
        <strong>{{ estudiantes.nombre }} {{ estudiantes.ap_paterno }} {{ estudiantes.ap_materno }} </strong> -
        <strong>{{ estudiantes.deporte_fav }} </strong> -
        <strong>{{ estudiantes.color_fav }} </strong> -
        <strong>{{ estudiantes.comida_fav }} </strong>
    </li>
</ul>
</div>
</template>

<style scoped>
h3{
    color:white;
    background-color:#536c8d;
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
    background-color:#89bdbb;
    border-radius: 15px;
    padding: 10px;
    margin: 20px;
    text-align:left;
    font-size: 15px;
}
</style>