<template>
  <h1>Calculadora</h1>
  <h3>Ingrese dos números:</h3>

  <div>
    <table>
        <td><input type="int" v-model="numeroUno"></td>
        <td><input type="int" v-model="numeroDos"></td>
    </table>
  </div>

  <div>
      <button v-on:click="sumar">Sumar</button>
      <button v-on:click="restar">Restar</button>
      <button v-on:click="multiplicar">Multiplicar</button>
      <button v-on:click="dividir">Dividir</button>

      <h4>Resultado: {{resultado}}</h4>
  </div>
</template>

<script>
export default {
    name: "Calculadora",
    data(){
        return{
            numeroUno: 0,
            numeroDos: 0,
            resultado: 0
        }
    },
    methods:{
        sumar(){
            this.resultado = this.numeroUno+this.numeroDos
            return this.resultado
        },
        restar(){
            this.resultado = this.numeroUno-this.numeroDos
            return this.resultado;
        },
        multiplicar(){
            this.resultado = this.numeroUno*this.numeroDos
            return this.resultado;
        },
        dividir(){
            this.resultado = this.numeroUno/this.numeroDos
            return this.resultado;
        }
    }

}
</script>

<style>
    button{
        background-color: #64BB87;
        border-radius: 5px;
        color: white;
        margin: 0px 5px;
        cursor: pointer;
    }
</style>