<template>
  <h1>Mi primer componente!!!</h1>
  <h2>Contador</h2>
  <h3>{{ titulo }}</h3>
  <p>{{numero}} <sup>2</sup> = {{obtenerCuadradoComputado}}</p>
  <!--<p>{{numero}} <sup>{{ potencia }}</sup> = {{obtenerCuadradoComputado}}</p>
  <p>{{numero}} <sup>{{ potencia }}</sup> = {{obtenerCuadradoComputado}}</p>
  <p>{{numero}} <sup>{{ potencia }}</sup> = {{obtenerCuadradoComputado}}</p>
  <p>{{numero}} <sup>{{ potencia }}</sup> = {{obtenerCuadradoComputado}}</p>
  <p>{{numero}} <sup>{{ potencia }}</sup> = {{obtenerCuadradoComputado}}</p>-->
  <div>
    <button v-on:click="incrementar()">+1</button>
    <button v-on:click="decrementar()">-1</button>
  </div>
</template>         

<script>
export default {
    name: 'Contador',
    props:['titulo'],
    data(){
        return{
            numero: 0
        }
    },
    methods:{
        obtenerCuadrado(){
            console.log("Cuadrado")
            return Math.pow(this.numero, 2)
        },
        incrementar(){
            this.numero++
        },
        decrementar(){
            this.numero--
        }
    },
    computed:{
        obtenerCuadradoComputado(){
            console.log("Computado")
            return Math.pow(this.numero, 2)
        }
    }
}
</script>

<style>
    button{
        background-color: #64b686;
        padding: 5px 20px;
        border-radius: 5px;
        margin: 0px 5px;
        border: 1px solid white;
        cursor: pointer;
    }

    button:hover{
        background-color:#5aa69b;
    }
</style>