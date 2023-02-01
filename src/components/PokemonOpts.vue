<template>
  <div class="options-container">
    <ul>
      <li v-for="poke in pokemons" :key="poke.id" v-on:click="$emit('seleccionado', {id:poke.id, edad: 54, nombre:poke.nombre})">{{poke.nombre}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "PokemonOpts",
  props:{
    pokemons:{
      type:Array,
      required:true
    }
  },
  methods:{
    imprimir(){
      console.log("Gracias")
    } 
  }
}
</script>

<style scoped>
ul{
  list-style: none;
  text-align: center;
}
li{
  background-color: white;
  border: 1px solid rgba(0,0,0,0.2);
  border-radius: 5px;
  width: 250px;
  margin-top: 5px;
  cursor: pointer;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  text-align: center;
  padding: 5px;
}
.options-container{
  justify-content: center;
  display: flex;
  text-align: center;
}
</style>