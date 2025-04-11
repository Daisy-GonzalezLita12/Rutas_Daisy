<script setup>
import politica_de_privacidad from '../Pages/politica_de_privacidad.vue'
const components = {
    politica_de_privacidad,
};
</script>
<template>
    <footer>
        <div style="background-color:#AD2E05; padding: 20px; margin-top: 20px; font-family: Arial; color:white; font-size: 10px" class="row">
            <!-- Sección de información legal -->
            <div class="col-md-3">
                <!-- Título  -->
                <div class="card-header">LEGALES:</div>
                <div class="card-body">
                    <p style="padding: 20px; margin-top: 20px; font-family: Arial; color:white; font-size: 14px">
                        <!-- Enlace a la página de "Política de privacidad" -->
                        <a href="#" class="text-white text-decoration-underline" data-bs-toggle="modal" data-bs-target="#politicaModal">
                         Política de privacidad
                         </a>
                    </p>
                </div>
            </div>
            <!-- Sección de redes sociales -->
            <div class="col-md-3">
                <!-- redes -->
                <div class="card-header">REDES SOCIALES:</div>
                <div class="card-body">
                    <p style="padding: 20px; margin-top: 20px; font-family: Arial; color:white; font-size: 14px">
                        <!-- Enlace a la página de Facebook -->
                        <a href="https://es-la.facebook.com/login/" target="_blank" style="color: white; text-decoration: underline;">
                            Facebook
                        </a>
                    </p>
                </div>
            </div>
            <!-- Sección de dirección -->
            <div class="col-md-3">
                <!-- Título de la drección -->
                <div class="card-header">DIRECCIÓN:</div>
                <p style="padding: 20px; margin-top: 20px; font-family: Arial; color:white; font-size: 14px">
                    <!-- Enlace a la ubicación en Google Maps -->
                    <a href="https://www.google.com.mx/maps/place/69800+Tlaxiaco,+Oax./@17.266522,-97.680835,16.38z/data=!4m6!3m5!1s0x85c62ec1f70b7fdd:0x5bf555f747e65636!8m2!3d17.2661075!4d-97.676773!16s%2Fg%2F11c5qpk920?entry=ttu&g_ep=EgoyMDI1MDMwNC4wIKXMDSoASAFQAw%3D%3D" 
                       target="_blank" style="color: white; text-decoration: underline;">
                        Colonia Centro número 17
                    </a>
                </p>
            </div>
            <!-- Sección de derechos de autor -->
            <div class="col-md-12">
                <br>
                <div class="card-header"><center>©2025 EL RINCÓN DE LA PIZZA. TODOS LOS DERECHOS RESERVADOS</center></div>
                <br>
            </div>
        </div>
    </footer>
    <!-- Fin del pie de página -->
    <!-- Modal con la Política de Privacidad -->
    <div class="modal fade" id="politicaModal" tabindex="-1" aria-labelledby="politicaModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="politicaModalLabel">Política de Privacidad</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <politica_de_privacidad/>
          </div>
        </div>
      </div>
    </div>
 </template>