<template>
  <h1 v-if="!pokemonCorrecto">Espere por favor...</h1>

  <div v-if="pokemonCorrecto">
    <h1>!Quien es este pokemon!</h1>
    <PokemonImg :idPokemon="pokemonCorrecto.id" :mostrarPokemon="mostrarPokemon"/>

    <!--$event tiene los datos como variable-->
    <PokemonOpts :pokemons="pokemonArr" @seleccionado="validarRespuesta($event)"/>
  </div>

  <div v v-if="mostrarMensaje" id="mensaje">
    <h1>{{ mensaje }}</h1>
    <button v-on:click="resetear()">Reiniciar</button>
  </div>
  </template>
  
  <script>
  import PokemonImg from "../src/components/PokemonImg.vue"
  import PokemonOpts from "../src/components/PokemonOpts.vue"
  import obtenerPokemonsFachada from "../src/js/obtenerPokemon.js"

  export default {
    name: "PokemonPage",
      components: {
        PokemonImg,
        PokemonOpts
      },
      data() {
        return {
          pokemonArr: [],
          pokemonCorrecto: null,
          mostrarPokemon:false,
          mostrarMensaje: false,
          mensaje:""
        }
      },
      mounted() {
        this.cargaPokemonInicial()
      },
      methods: {
        async cargaPokemonInicial() {
          console.log("mounted")
          const vec = await obtenerPokemonsFachada()
          console.log("Desde pagina principal")
          console.log(vec)
          this.pokemonArr = vec
          const numero = Math.floor(Math.random() * 4)
          console.log(numero)
          this.pokemonCorrecto = this.pokemonArr[numero]
        },
        validarRespuesta(pokemonSeleccionadoHijo){
          console.log("Prueba evento")
          console.log(pokemonSeleccionadoHijo)
          this.mostrarPokemon = true

          const seleccionado = pokemonSeleccionadoHijo.id

          if (seleccionado == this.pokemonCorrecto.id) {
            console.log("Correcto")
            this.mostrarMensaje = true
            this.mensaje = "Felicidades seleccionaste el pokemon correcto: " + pokemonSeleccionadoHijo.nombre.toUpperCase()
          } else {
            console.log("Incorrecto")
            console.log(this.pokemonCorrecto.id)
            this.mostrarMensaje = true
            this.mensaje = "Que mal! seleccionaste el pokemon incorrecto, el correcto es: " + pokemonSeleccionadoHijo.nombre.toUpperCase()
            this.pokemonCorrecto = null
          }
        },
        resetear(){
          this.mostrarPokemon = false
          this.mensaje = ""
          this.cargaPokemonInicial()
          this.mostrarMensaje = false
        }
      }
  }
  
  </script>
  
  <style scoped>
  h1{
    text-align: center;
  }

  template{
    text-align: center;
  }

  #mensaje{
    text-align: center;
  }

  #mensaje button{
    text-align: center;
    background-color: aqua;
    padding: 10px;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-size: 14px;
  }
  </style>