<template>
  <div class="pokemon-container">
    <img v-if=!mostrarPokemon class="oculta-pokemon"
         :src="urlImagen"
         alt="No se puede" >
    <img v-if=mostrarPokemon
         :src="urlImagen"
         alt="No se puede" >
  </div>
</template>

<script>
export default {
  name: "PokemonImg",
  data(){
    return{
      resultado : null
    }
  },
  props:{
    idPokemon:{
      type: Number,
    },
    mostrarPokemon:{
      type: Boolean,
    }
  },
  computed:{
    urlImagen(){
      this.resultado = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/"
      this.resultado += this.idPokemon + ".svg"
      console.log(this.resultado)
      return this.resultado
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
  height: 225px;
  /*right: 32%;*/
  text-align: center;
}

.pokemon-container{
  justify-content: center;
  text-align: center;
}


</style>