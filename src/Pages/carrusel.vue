<script setup>
import Banner1 from '../Pages/imagenes/Banner1.png';
import Banner2 from '../Pages/imagenes/Banner2.png';
import Banner3 from '../Pages/imagenes/Banner3.png';
import Banner4 from '../Pages/imagenes/Banner4.png';
const banners = { Banner1, Banner2, Banner3, Banner4 };

</script>

<template>
    <!-- Inicio del carrusel de banners -->
<div id="carouselExampleFade" class="carousel slide carousel-fade">
    <div class="carousel-inner">
        <!-- Primer banner: imagen activa al cargar la página -->
        <div class="carousel-item active">
            <img :src="Banner1" class="d-block w-100" alt="Pizza artesanal">
        </div>
        <!-- Segundo banner -->
        <div class="carousel-item">
            <!-- Banner4 -->
            <img :src="Banner4" class="d-block w-100" alt="Pizza doble queso">
        </div>
        <!-- Tercer banner -->
        <div class="carousel-item">
            <img :src="Banner3" class="d-block w-100" alt="Pizza con hierbas">
        </div>
        <!-- Cuarto banner -->
        <div class="carousel-item">
            <img :src="Banner2" class="d-block w-100" alt="Pizza de peperoni">
        </div>
    </div>
    <!-- Botón para retroceder el carrusel -->
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <!-- botón anterior -->
        <span class="visually-hidden">Anterior</span>
    </button>
    <!-- Botón para avanzar en el carrusel -->
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <!-- visualizar siguiente -->
        <span class="visually-hidden">Siguiente</span>
    </button>
</div>
<!-- Fin del carrusel -->
</template>