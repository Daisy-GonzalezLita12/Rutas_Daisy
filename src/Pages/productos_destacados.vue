<script setup>
// importaciones de las imágenes de los productos
import bouns from '../Pages/imagenes/bouns.jpg';
// importación de imagen de pizza de chorizo
import pizza_ch from '../Pages/imagenes/pizza_ch.jpg';
import carne_fria from '../Pages/imagenes/carne_fria.jpg';
import combo_pizza from '../Pages/imagenes/combo_pizza.jpg';
// productos
const productos = { bouns, pizza_ch, carne_fria, combo_pizza };
</script>

<template>
    <!-- Sección de productos destacados -->
<div class="container-sm">
    <br>
    <!-- Título de la sección de productos -->
    <h3><center>--------------------------------- Productos destacados -------------------------------</center></h3>
    <br>
    <div class="row">
        <!-- Primer producto: Bombas Pepperoni -->
        <div class="col-md-3">
            <div class="card mt-4">
                <div class="card-header"><center>Bombas Pepperoni</center></div>
                <div class="card-body">
                    <!-- imagen de bouns -->
                    <img :src="bouns" alt="Bombs" class="img-fluid" style="width: 280px; height: 280px;">
                    <p>Precio: $59 la orden.</p>
                </div>
            </div>
        </div>
        <!-- Segundo producto: Pizza Pepperoni con hierbas -->
        <div class="col-md-3">
            <div class="card mt-4">
                <div class="card-header"><center>Pizza Pepperoni con hierbas</center></div>
                <div class="card-body">
                    <img :src="pizza_ch" alt="Pizza de peperoni con hierbas" class="img-fluid" style="width: 280px; height: 280px;">
                    <p>Precio: $99 la pizza pequeña.</p>
                </div>
            </div>
        </div>
        <!-- Tercer producto: Pizza Barbacoa -->
        <div class="col-md-3">
            <div class="card mt-4">
                <div class="card-header"><center>Pizza Barbacoa</center></div>
                <div class="card-body">
                    <img :src="carne_fria" alt="Pizza con barbacoa" class="img-fluid" style="width: 280px; height: 280px;">
                    <p>Precio: $89 la pizza pequeña.</p>
                </div>
            </div>
        </div>
        <!-- Cuarto producto: Combo del día -->
        <div class="col-md-3">
            <div class="card mt-4">
                <div class="card-header"><center>Combo del día</center></div>
                <div class="card-body">
                    <img :src="combo_pizza" alt="Pizzas en oferta" class="img-fluid" style="width: 280px; height: 280px;">
                    <p>Precio: $169, incluye 2 pizzas pequeñas y dos refrescos de 355ml.</p>
                </div>
            </div>
        </div>
    </div>
</div>
</template>