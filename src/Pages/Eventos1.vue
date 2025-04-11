<template>
    <div class="container">
      <div class="row mt-4">
        <!-- Inicia el primer botón -->
        <div>
            <h4>EVENTO CLIC</h4>
          <button @click="clic" class="btn btn-danger" type="button">Dale clic</button>         
          <button @click="soyBoton" class="btn btn-warning mx-2" type="button">Dale clic2</button>         
       <!-- Termina el primer botón -->
        </div> 
             <!-- inicia el segundo botón -->
             <div><br>
            <h4>EVENTO CHANGE</h4>
            <label class="input-group-text" for="">Ingresa tu nombre: </label>
            <input class="form-control mt-2" id="nombre" @change="nombreE">
            <!-- Con la etiqueta párrafo -->
             <p>El nombre ingresado es: <strong> {{ nombre }}</strong> </p><br>
                <!-- Termina el segundo botón -->
             </div>
                <!-- Inicia el tercer botón-->
                 <div>
                  <h4>EVENTO DE MOUSEENTER Y MOUSELEAVE</h4>
                  <div class="text-center" style="color: white; width: 300px ; height: 200px;background-color: black;text-align: center; padding: 15px;border-radius: 14px;"
                  @mouseenter="mostrarMensaje" @mouseleave="ocultarMensaje">
                  <p >pase el mause</p>
                  <p >{{ mensaje }}</p>
                 </div>        
                 <!--Termina el tercer botón  -->
                 </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
        return {
            // Se declaran todas las variables que vayamos a ocupar.
          nombre: '',
          mensaje:'',
        }
    },
    methods: {
      clic() {
        alert("Gracias por dar clic");
      },
      soyBoton() {
        alert("Soy un botón");
      },
      nombreE(Event){
        // Se obtiene el valor del input
        this.nombre = Event.target.value;
           },

        //  Métodos del evento como mouseover
        mostrarMensaje() {   
           this.mensaje= "El mouse está dentro del rectangulo";
            },
            ocultarMensaje() {
           this.mensaje= "El mouse está fuera del rectangulo";
           },
          }
  }
  </script>
  
  <style scoped>
  </style>
  