<script>
export default{
data(){
    return{
        // se declara como una cadena vacía''
        display: '',
        // Se inicializa la variable currentValue en 0, para guardar el resultado de las operaciones
        currentValue: 0,
    
    }
},
methods:{
     //Esta función toma un numero o símbolo y lo agrega a la derecga del display
    AgregandoNumero(numero){
       //Concatena un numero o símbolo al display
        this.display += numero;
    },
    //Este metodo realiza el calculo matematico
    calculo(){
        
        try{
            // eval() evalua una cadena de texto como una expresión matemática y devuelve el resultado
            this.currentValue=eval(this.display);
            // Se convierte el resultado a cadena y se asigna al display
            this.display=this.currentValue.toString();
        }catch(error){
            // Si hay un error en la evaluación, se muestra un mensaje de error
            this.display='Error';
        }
    },
    limpiarDisplay(){
        // se limpia el display, asignando display como cadena vacia
        this.display = '';
    },
    eliminarNumero(){
        // se elimina el último número del display
        this.display = this.display.slice(0, -1);
    },metodoPorcentaje(){
          // Convertimos el último número ingresado en porcentaje 
          this.display = eval(this.display + "/100").toString();
    },
},
}

</script>
<template>
<div class="container d-flex justify-content-center mt-4" style="height:370px;">
    <div class="card p-3" style="width: 300px; background-color: #add4d3;">
    <div class="card-body">
        <!-- Encabezado de la calcualdora -->
        <h6 class="text-center" style="color:black;">Calculadora V2</h6>
        <!-- Display de la calculadora -->
         <div class="mb-3">
            <!-- v-model "display" vincula el valor del campo del texto a display -->
             <!-- Disable eviat que el usuario pueda ingresar datos -->
             <input type="text" class="form-control" v-model="display" disabled> 
         </div>
         <!-- Botones de la calcualdora -->
         <div class="d-flex justify-content-between mt-2">
              <!-- El @click metodo..: llama a un método-->
            <button class="btn btn-success" @click="metodoPorcentaje" style="width: 45px; height: 40px; border-radius: 15px;">%</button>
            <button class="btn btn-success" @click="limpiarDisplay" style="width: 45px; height: 40px; border-radius: 15px;" >CE</button>
            <button class="btn btn-success" @click=" limpiarDisplay" style="width: 45px; height: 40px; border-radius: 15px;">C</button>
            <button class="btn btn-success" @click="eliminarNumero"style="width: 45px; height: 40px; border-radius: 15px;">B</button>
          </div>

          <div class="d-flex justify-content-between mt-2">
            <button class="btn btn-secondary" @click="AgregandoNumero(9)" style="width: 45px; height: 40px; border-radius: 15px;">9</button>
            <button class="btn btn-secondary" @click="AgregandoNumero(7)" style="width: 45px; height: 40px; border-radius: 15px;">7</button>
            <button class="btn btn-secondary" @click="AgregandoNumero(8)" style="width: 45px; height: 40px;border-radius: 15px;">8</button>
            <button class="btn btn-success" @click="AgregandoNumero('/')" style="width: 45px; height: 40px;border-radius: 15px;">/</button>
          </div>

           <div class="d-flex justify-content-between mt-2">
            <button class="btn btn-secondary" @click="AgregandoNumero(4)" style="width: 45px; height: 40px;border-radius: 15px;">4</button>
            <button class="btn btn-secondary" @click="AgregandoNumero(5)" style="width: 45px; height: 40px; border-radius: 15px;">5</button>
            <button class="btn btn-secondary" @click="AgregandoNumero(6)" style="width: 45px; height: 40px;border-radius: 15px;">6</button> 
            <button class="btn btn-success" @click="AgregandoNumero('*')" style="width: 45px; height: 40px;border-radius: 15px;">x</button>
          </div>

           <div class="d-flex justify-content-between mt-2">
            <button class="btn btn-secondary" @click="AgregandoNumero(1)" style="width: 45px; height: 40px;border-radius: 15px;">1</button>
            <button class="btn btn-secondary" @click="AgregandoNumero(2)" style="width: 45px; height: 40px;border-radius: 15px;">2</button>
            <button class="btn btn-secondary" @click="AgregandoNumero(3)" style="width: 45px; height: 40px;border-radius: 15px;">3</button>
            <button class="btn btn-success" @click="AgregandoNumero('-')" style="width: 45px; height: 40px;border-radius: 15px;">-</button>
          </div>

          <div class="d-flex justify-content-between mt-2">
            <button class="btn btn-primary" @click="calculo" style="width: 45px; height: 40px; border-radius: 15px;">=</button>
            <button class="btn btn-secondary" @click="AgregandoNumero(0)" style="width: 45px; height: 40px; border-radius: 15px;">0</button>
            <button class="btn btn-secondary" @click="AgregandoNumero('.')" style="width: 45px; height: 40px;border-radius: 15px;">.</button>
            <button class="btn btn-success" @click="AgregandoNumero('+')" style="width: 45px; height: 40px;border-radius: 15px;">+</button>
          </div>
        </div>
    </div>
</div>
</template>
