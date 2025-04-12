<script setup>

</script>

<template>
  <div id="app" >
  <div class="container">
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
  <a class="navbar-brand" href="#">UNIDAD 3</a>
  <button class="navbar-toggler"  type="button"  data-bs-toggle="collapse"  
  data-bs-target="#navbarNav" 
  aria-controls="navbarNav" 
  aria-expanded="false" 
  aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"> 
    </span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav ">
       <li class="nav-item active">
        <a class="nav-link" href="#"><router-link to="/pagina_web_eclipses">Eclipse</router-link></a>
      </li>
      <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Cards
      </a>
          <ul class="dropdown-menu  bg-dark">
            <li><a class="dropdown-item" href="#"><router-link to="/card1">Card 1</router-link></a></li>
            <li><a class="dropdown-item" href="#"><router-link to="/card2">Card 2</router-link></a></li>
          </ul>
        </li>
      <li class="nav-item active">
        <a class="nav-link" href="#"><router-link to="/pagina_pizza">Pizzas</router-link></a>
      </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Condicionales
          </a>
          <ul class="dropdown-menu bg-dark">
            <li><a class="dropdown-item" href="#"><router-link to="/lista1">Lista 1</router-link></a></li>
            <li><a class="dropdown-item" href="#"><router-link to="/lista2">Lista 2</router-link></a></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Horarios
          </a>
          <ul class="dropdown-menu  bg-dark">
            <li><a class="dropdown-item" href="#"><router-link to="/Horario1">Horario1</router-link></a></li>
            <li><a class="dropdown-item" href="#"><router-link to="/Horario2">Horario2</router-link></a></li>
          </ul>
        </li>
               <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Props
          </a>
          <ul class="dropdown-menu bg-dark">
            <li><a class="dropdown-item" href="#"> <router-link to="/Padre1">Props 1</router-link></a></li>
            <li><a class="dropdown-item" href="#"> <router-link to="/Padre2">Props 2</router-link></a></li>
            
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Eventos
          </a>
          <ul class="dropdown-menu  bg-dark">
            <li><a class="dropdown-item" href="#"><router-link to="/eventos1">Eventos 1</router-link></a></li>
            <li><a class="dropdown-item" href="#"><router-link to="/eventos2">Eventos 2</router-link></a></li> 
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Calculadora
          </a>
          <ul class="dropdown-menu  bg-dark">
            <li><a class="dropdown-item" href="#"><router-link to="/calculadoraV1">calculadora V1</router-link></a></li>
            <li><a class="dropdown-item" href="#"><router-link to="/calculadoraV2">calculadora V2</router-link></a></li> 
          </ul>
          
        </li>
        <li class="nav-item active">
        <a class="nav-link" href="#"><router-link to="/about">About</router-link></a>
      </li>
          </ul>
  </div>
</nav>
    <router-view ></router-view>
</div>
</div>
</template>

<style scoped>
a{
  text-decoration: none
}
.navbar a,
.navbar .dropdown-menu a {
  color: white !important; /* Color normal */
}

.navbar a:hover,
.navbar .dropdown-menu a:hover {
  color:deepskyblue!important; /* Amarillo en hover (puedes cambiarlo) */
}
.dropdown-menu .dropdown-item:hover {
  background-color: transparent !important; /* Quita el fondo blanco */
  color: white !important; /* Mantiene el texto blanco */
}


</style>
