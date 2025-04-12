<script setup>
//metodosimport { ref } from 'vue'
</script>
<template>
  <!-- Estructura html -->
   <!-- Título de la página -->
<h3 style="text-align: center;"><b>ECLIPSES</b></h3> 
<!-- Botón de "ver eclipses" -->
 <button class="btn">Ver eclipses</button>
 <br>
 <!-- Imagen del eclipse solar -->
 <img src="https://starwalk.space/gallery/images/solar-eclipses/1140x641.jpg" alt="Eclipse solar " width="500" height="300">
 <!-- Imagen del eclipse solar -->
 <img src="https://spaceplace.nasa.gov/eclipses/sp/solar.sp.png" alt="Eclipse solar " width="500" height="300">
  <br>
  <!-- Información acerca de un eclipse -->
  <p>Un eclipse se produce cuando un planeta o una luna se interpone en el camino de la luz del sol. Aquí en la Tierra, podemos experimentar dos clases de eclipses: eclipses solares y eclipses lunares.</p>
  <p>Un  se produce cuando la luna se interpone en el camino de la luz del sol y proyecta su sombra en la Tierra. Eso significa que durante el día, la luna se mueve por delante del sol y se pone oscuro. ¿No es extraño que se ponga todo oscuro en pleno día?
Este eclipse total se produce aproximadamente cada año y medio en algún lugar de la Tierra. Un eclipse parcial, cuando la luna no recubre por completo al sol, se produce al menos dos veces por año, en algún lugar de la Tierra.</p>
<p>Durante un eclipse lunar, la Tierra impide que la luz del sol llegue hasta la luna. Eso quiere decir que a la noche, la luna llena desaparece por completo, a medida que la sombra de la Tierra la cubre.
La luna también puede parecer de un color rojizo, debido a que la atmósfera terrestre absorbe los demás colores mientras se dobla algo de luz solar hacia la luna. Los atardeceres obtienen su color rojo y anaranjado debido a la forma en la que la luz del sol se dobla cuando atraviesa la atmósfera y absorbe otros colores.
Durante un eclipse total de luna, el brillo de la luna proviene de todos los amaneceres y puestas de sol que se producen en la Tierra.</p>
<!-- Imagen de un eclipse -->
<img src="https://spaceplace.nasa.gov/eclipses/sp/lunar-sp.sp.png" alt="eclipse">
<!-- Subtítulo con encabezado número 2 -->
<h5>¿Por qué no tenemos un eclipse lunar todos los meses?</h5>
<!-- Información acerca de un eclipse -->
<p>Seguramente te estarás preguntando por qué es que no tenemos un eclipse lunar todos los meses ya que la luna orbita la Tierra. Es cierto que la luna da vueltas alrededor de la Tierra todos los meses, pero no siempre se interpone en la sombra de la Tierra. La trayectoria lunar alrededor de la Tierra está inclinada en comparación con la órbita de la Tierra alrededor del sol. La luna puede estar detrás de la Tierra e incluso así recibir luz solar.</p>
<!-- Imagen de un eclipse -->
<img src="https://spaceplace.nasa.gov/eclipses/sp/tilt-sp.sp.png" alt="">
</template>
<style scoped>
/* estilos css */
/* Define estilos para el título */
h3 {
  /* Define el tipo de letra */
font-family: Verdana, Geneva, Tahoma, sans-serif;
  /* Define el tamaño de letra */
font-size: 25px;
/* Define el color de letra */
color:black;
}
/* Define estilos para la clase botón */
.btn{
  text-align: center;
  /* Redondea el botón */
  border-radius: 15px;
  /* Color de fondo */
  background-color:rgb(147, 211, 211);
  /* Define el color de fondo de la letra*/
  color: rgb(0, 0, 0); 
  /* Defien el tipo de letra */
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
/* Defiene estilos para la etiqueta párrafo */
p{
  /* Define el tipo de letra */
   font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
   /* Justifica el texto */
  text-align: justify;
}
</style>
