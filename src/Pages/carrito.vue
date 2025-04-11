<template>
    <!-- Modal del Carrito -->
    <div class="modal fade" id="carritoModal" tabindex="-1" aria-labelledby="carritoModalLabel" aria-hidden="true">
       <div class="modal-dialog modal-dialog-centered">
           <div class="modal-content">
               <div class="modal-header">
                   <!--Mnesaje del carrito -->
                   <h5 class="modal-title" id="carritoModalLabel">¡¡Cada bocado es una explosión de sabor, con nuestra pizza del Rincón!!</h5>
                   <!-- botón -->
                   <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
               </div>
               <div class="modal-body text-center">
                   <!-- botón del empezar la orden -->
                   <button type="button" class="btn btn-danger" onclick="window.location.href='#'">Empezar Orden</button>
               </div>
           </div>
       </div>
   </div>
   <!-- Fin del Modal del Carrito -->
</template>