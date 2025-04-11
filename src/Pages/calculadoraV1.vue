<script>
export default{
    data(){
        return{
            numero1:0,
            numero2:0,
            resultado:0,
        }
    },
        methods: {
            sumar(){
                this.resultado= parseFloat(this.numero1) + parseFloat(this.numero2);
            },
            resta(){
                this.resultado= parseFloat(this.numero1) - parseFloat(this.numero2);
            },
            multiplicacion(){
                this.resultado= parseFloat(this.numero1) * parseFloat(this.numero2);
            },
            division(){
                this.resultado= parseFloat(this.numero1) / parseFloat(this.numero2);
            },
        }
    }
</script>

<template>
     <div class="container mt-5">
    <div class="card shadow p-4">
    <h1 class="text-center">Calculadora V1</h1>
    <!-- Visualización del resultado -->
    <h2 class="text-center mt-4">Resultado {{ resultado }}</h2>
         <div class="mb-3">
         <label for="">Número 1</label>
         <input type="number" class="form-control" v-model="numero1">
         </div>
         <div class="mb-3">
         <label for="">Número 2</label>
         <input type="number" class="form-control" v-model="numero2">
         </div>
    
         <div class="d-flex justify-content-center gap-2">
            <!-- botón de suma -->
            <button @click="sumar" class="btn btn-primary">Sumar</button>
            <!-- boton de resta -->
            <button @click="resta" class="btn btn-primary">Resta</button>
            <!-- boton de multiplicación -->
            <button @click="multiplicacion" class="btn btn-primary">Multiplicacion</button>
            <!-- botón de división -->
            <button @click="division" class="btn btn-primary">División</button>
         </div>
         
         
    </div>
    </div>
</template>

<style scoped>
h1{
    color:white;
    background-color:#536c8d;
    border-radius: 15px;
    padding: 10px;
    text-align: center;
    font-size: 33px;
}
h2{
    color:white;
    background-color:cadetblue;
    border-radius: 15px;
    padding: 10px;
    text-align: center;
    font-size: 33px;
    margin-top: 20px;
}

</style>