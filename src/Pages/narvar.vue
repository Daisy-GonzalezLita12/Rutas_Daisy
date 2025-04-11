<script>
import logo from '../Pages/imagenes/logo1.png'; 
import Formulario from '../Pages/formulario.vue'
export default {
    components: {
        Formulario,
    },
    data(){
        return{
            logo
        };
    }
};
</script>

<template>
    
        <!-- Barra de navegación fija -->
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark mt-4">
        <div class="container">
            <div class="row w-100 align-items-center">
                
                <!-- Logo -->
                    <div class="col-md-1">
                        <!-- Contenedor de la tarjeta donde se encuentra el logo -->
                        <div class="card-body">
                            <!-- Alineación a la izquierda del logo -->
                            <div align="left">
                            <!-- Imagen del logo, con clase 'img-fluid' para hacerlo adaptable -->
                            <img :src="logo" class="img-fluid" alt="Logo el rincon de las pizzas">
                            </div>
                         </div>
                    </div>
                <!-- Fin del Logo -->

                <!-- Botón Ordena -->
                    <div class="col-auto p-1 m-0">
                        <!-- Contenedor del botón de tipo dropdown (desplegable) -->
                        <div class="dropdown">
                            <!-- Botón que activa el menú desplegable, con clase 'btn-danger' para hacerlo rojo -->
                            <button class="btn btn-danger dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Ordena
                            </button>
                            <!-- Menú desplegable -->
                            <ul class="dropdown-menu">
                            <!-- Opción "A domicilio" dentro del menú -->
                            <li><a class="dropdown-item" href="#">A domicilio</a></li>
                            <!-- Línea divisoria entre las opciones -->
                            <li><hr class="dropdown-divider"></li>
                            <!-- Opción "En tienda" dentro del menú -->
                            <li><a class="dropdown-item" href="#">En tienda</a></li>
                            </ul>
                          </div>
                    </div>
                <!-- Fin del Botón Ordena -->
                <!-- Botón Menú -->
                <div class="col-auto p-1 m-0">
                    <!-- Contenedor del botón de tipo dropdown (desplegable) -->
                    <div class="dropdown">
                        <!-- Botón que activa el menú desplegable, con clase 'btn-danger' para hacerlo rojo -->
                        <button class="btn btn-danger dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                         Menú
                        </button>
                            <!-- Menú desplegable -->
                            <ul class="dropdown-menu">
                                <!-- Opción "Pizzas" dentro del menú -->
                                <li><a class="dropdown-item" href="#">Pizzas</a></li>
                                <!-- Línea divisoria entre las opciones -->
                                <li><hr class="dropdown-divider"></li>
                                <!-- Opción "Pollo" dentro del menú -->
                                <li><a class="dropdown-item" href="#">Pollo</a></li>
                                <!-- Línea divisoria entre las opciones -->
                                <li><hr class="dropdown-divider"></li>
                                <!-- Opción "Adicionales" dentro del menú -->
                                <li><a class="dropdown-item" href="#">Adicionales</a></li>
                                <!-- Línea divisoria entre las opciones -->
                                <li><hr class="dropdown-divider"></li>
                                <!-- Opción "Bebidas" dentro del menú -->
                                <li><a class="dropdown-item" href="#">Bebidas</a></li>
                                <!-- Línea divisoria entre las opciones -->
                                <li><hr class="dropdown-divider"></li>
                                <!-- Opción "Postres" dentro del menú -->
                                <li><a class="dropdown-item" href="#">Postres</a></li>
                            </ul>
                    </div>
                </div>
            <!-- Fin del Botón Menú -->

                <!-- Fin del Botón Menú -->

                <!-- Botón Promos (Menú Flotante) -->
                <div class="col-auto p-1 m-0">
                    <div class="dropdown">
                        <!-- botón de promos -->
                        <button class="btn btn-danger dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Promos
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">¡2x1 en Pizzas los Martes!</a></li>
                            <li><hr class="dropdown-divider"></li>
                            <li><a class="dropdown-item" href="#">Pizza Familiar + Bebida Gratis</a></li>
                            <li><hr class="dropdown-divider"></li>
                            <li><a class="dropdown-item" href="#">Combo de Fin de Semana</a></li>
                            <li><a class="dropdown-item" href="#" style="padding-left: 30px;">Pizza mediana + 6 alitas + refresco</a></li>
                        </ul>
                    </div>
                </div>

                <!-- Fin del Botón Promos -->

                <!-- Título centrado -->
                <div class="col text-center">
                    <a class="navbar-brand">EL RINCÓN DE LA PIZZA</a>
                </div>

                <!-- Botones a la derecha -->
                <div class="col-auto ms-auto">            
                    <!-- Botón para abrir el formulario-->
                     <button class="btn btn-outline-light" data-bs-toggle="modal" data-bs-target="#formularioModal">
                     Iniciar sesión
                     </button>
                    <!-- Botón del Carrito (flotante) -->
                    <button type="button" class="btn btn-outline-light" data-bs-toggle="modal" data-bs-target="#carritoModal">
                        Carrito
                    </button>
                </div>
            </div>
        </div>
    </nav>
    <!-- Fin de la barra de navegación fija -->

     <!-- Modal con el formulario de inicio de sesión -->
    <div class="modal fade" id="formularioModal" tabindex="-1" aria-labelledby="formularioModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
             <div class="modal-header">
                <h5 class="modal-title" id="formularioModalLabel">Iniciar sesión</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>  
             </div>   
             <div class="modal-body">
                <Formulario />
             </div>
            </div>
        </div>
    </div>

</template>
