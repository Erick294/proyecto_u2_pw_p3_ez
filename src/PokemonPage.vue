<template>
    <h1>!Quien es este pokemon!</h1>
    <PokemonImg :idPokemon="336" :showPokemon="true"/>
    <PokemonOpts/>
  </template>
  
  <script>
  import PokemonImg from "/src/components/PokemonImg.vue"
  import PokemonOpts from "/src/components/PokemonOpts.vue"
  export default {
    name: "PokemonPage",
    components:{
      PokemonImg,
      PokemonOpts
    }
  }
  </script>
  
  <style scoped>
  h1{
    text-align: center;
  }
  </style>