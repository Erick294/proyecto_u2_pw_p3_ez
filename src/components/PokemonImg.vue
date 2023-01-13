<template>
    <div class="pokemon-container">
      <img v-if=!showPokemon class="oculta-pokemon" :src=getSource alt="No se puede">
      <img v-if=showPokemon :src=getSource alt="No se puede">
    </div>
  </template>
  
  <script>
  export default {
    name: "PokemonImg",
    props:{
        idPokemon:{
            type:Number,
            required:true,
            validator(value){
                value>0
            }
        },
        showPokemon:{
            type:Boolean,
            required:true,
            default:false
        }
    },computed:{
        getSource(){
            return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.idPokemon}.svg`
        }
    }
  }
  </script>
  
  <style scoped>
  .oculta-pokemon {
    filter: brightness(0);
    position: relative;
  }
  img {
    /*position: absolute;*/
    height: 250px;
    /*right: 32%;*/
    -webkit-user-select: none;
    text-align: center;
  }
  .pokemon-container {
    text-align: center;
  }
  </style>