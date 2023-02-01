<template>
  <h1 v-if="!pokemonCorrecto">Espere por favor...</h1>

  <div id="marcador">
    <h4>Puntaje: {{puntaje}}</h4>
    <h4>Intentos: {{intentos}}</h4>
    <h4>Oportunidades: {{oportunidades}}</h4>
  </div>

  <div v-if="pokemonCorrecto">
    <h1>!Quien es este pokemon!</h1>
    <PokemonImg :idPokemon="pokemonCorrecto.id" :mostrarPokemon="mostrarPokemon"/>

    <!--$event tiene los datos como variable-->
    <PokemonOpts :pokemons="pokemonArr" @seleccionado="validarRespuesta($event)"/>
  </div>

  <div v-if="mostrarMensaje" id="mensaje">
    <h2>{{ mensaje }}</h2>
    <h2>{{ mensajeSig }}</h2>
    <audio v-if="ganador" src=""></audio>
    <button v-on:click="resetear()">Nuevo Juego</button>
    <button v-on:click="siguienteOportunidad()">Siguiente</button>
  </div>
  </template>
  
  <script>
  import PokemonImg from "./components/PokemonImg.vue"
  import PokemonOpts from "./components/PokemonOpts.vue"
  import obtenerPokemonsFachada from "./js/obtenerPokemon.js"

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
          ganador: false,
          mensaje:"",
          mensajeSig:"",
          puntaje: 0,
          oportunidades: 3,
          intentos: 2
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

          const seleccionado = pokemonSeleccionadoHijo.id

          if (seleccionado == this.pokemonCorrecto.id && this.intentos == 2) {
            console.log("Correcto")
            this.mostrarMensaje = true
            this.puntaje += 5
            this.intentos = 0
            this.mostrarPokemon = true
            this.mensaje = "Felicidades seleccionaste el pokemon correcto: " + this.pokemonCorrecto.nombre.toUpperCase()
            this.mensajeSig = "Dale click a Siguiente"
          }else if (seleccionado == this.pokemonCorrecto.id && this.intentos == 1) {
            console.log("Correcto")
            this.mostrarMensaje = true
            this.puntaje += 2
            this.intentos -= 1 
            this.mostrarPokemon = true
            this.mensaje = "Felicidades seleccionaste el pokemon correcto: " + this.pokemonCorrecto.nombre.toUpperCase()
          }else{
            this.mostrarPokemon = false
            this.mensaje = "Seleccionaste al pokemon incorrecto"
            this.intentos -= 1
            this.mostrarMensaje = true
          }

          if(this.intentos == 0){
            this.mostrarPokemon = true
            this.oportunidades -= 1
            this.mostrarMensaje = true
            this.mensajeSig = "Da click a Siguiente"
          }

          if(this.puntaje >= 10){
            this.mensaje = "Felicidades ganaste! Puntaje: " +this.puntaje
            this.mensajeSig = "Da click en Nuevo Juego"
            this.mostrarMensaje = true
            this.pokemonArr = []
          }else if(this.puntaje < 10 && this.oportunidades == 0){
            this.mensaje = "Lastima perdiste! Puntaje: " +this.puntaje
            this.mensajeSig = "Da click en Nuevo Juego"
            this.mostrarMensaje = true
            this.pokemonArr = []
          }
        },
        resetear(){
          this.mostrarPokemon = false
          this.mensaje = ""
          this.cargaPokemonInicial()
          this.mostrarMensaje = false
          this.puntaje = 0
          this.oportunidades = 3
          this.intentos = 2
        },
        siguienteOportunidad(){
          this.mostrarPokemon = false
          this.mensaje = ""
          this.cargaPokemonInicial()
          this.mostrarMensaje = false
          this.intentos = 2
        }
      }
  }
  
  </script>
  
  <style scoped>
  h1{
    text-align: center;
  }

  #mensaje{
    text-align: center;
    justify-content: center;
  }

  #mensaje button{
    text-align: center;
    background-color:cadetblue;
    padding: 10px;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-size: 14px;
    margin: 10px;
    border-radius: 15%;
  }

  #marcador{
    justify-content: center;
    text-align: center;
    display: flex;
  }

  #marcador h4{
    margin: 15px;
  }
  </style>