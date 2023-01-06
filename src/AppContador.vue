<template>
  <img alt="Vue logo" src="./img/logo.png">
  <h1>Este es el componente principal!!!</h1>
  <!--<Contador titulo="Estudiante" v-bind:inicio="6*4512"/>
  <Contador titulo="Profesor" v-bind:inicio="25-10"/>
  <Contador titulo="Test" v-bind:inicio="12/5"/>-->

  <Contador titulo="Estudiante" :inicio="8"/>
  <Contador titulo="Profesor"/>
</template>

<script>
import Contador from './components/Contador.vue'

export default {
  name: 'AppContador',
  components: {
    Contador
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
