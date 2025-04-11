<template>
    <div>
        <div class="container">
            <div class="row">
                 <!-- Evento doble clic -->
                  <div>
                    <h4>EVENTO DOBLE CLIC</h4>
                    <button @dblclick="dobleClic" class="btn btn-primary" type="button">Doble Clic</button>
                  </div>
                 <!-- Evento Capturar tecla -->
                 <div><br>
                    <h4>EVENTO CAPTURAR TECLA</h4>
                    <input class="from-control" @keyup="capturarTecla"  placeholder="Escribe algo">
                    <p>última tecla presionada: <strong>{{ tecla }}</strong></p>
                   </div>
                    <!-- Evento ennforcar y desenfocar -->
                          <div><br>
                    <h4>EVENTO DE ENFOCAR Y DESENFOCAR</h4>
                    <input class="form-control"@focus="Enfocar" @blur="Desonfocar" placeholder="Haz foco aquí">
                    <p>{{ estado }}</p>
                </div>
                       <!-- Evento Mouse Down y Mouse up -->
                    <div> <br>
                    <h4>EVENTO MOUSEDOWN Y MOUSEUP</h4>
                    <button @mousedown="Presionar" @mouseup="Soltar" class="btn btn-success">Presiona y suelta</button>
                    <p>{{ estadoBoton }}</p>
                 </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            // Se declaran todas las variables que vayamos a ocupar.
            tecla: '',
            estado: 'No enfocado',
            estadoBoton: ''
        }
    },
    methods: {
        dobleClic() {
            alert("Hiciste doble clic en el botón");
        },
        capturarTecla(Event) {
            this.tecla = Event.key;
        }, Enfocar() {
            this.estado = "El input está enfocado";
        },
        Desonfocar() {
            this.estado = "El input ha perdido el foco";
        },
        Presionar() {
            this.estadoBoton = "El botón está presionado";
        },
        Soltar() {
            this.estadoBoton = "El botón está suelto";
        }
    }
    
}
</script>
<style>
    
</style>