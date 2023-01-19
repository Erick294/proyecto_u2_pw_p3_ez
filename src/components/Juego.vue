<template>
  <div id="contenedor-juego" v-if="banderaJuego">
    <p>Puntaje:{{puntaje}}</p>
    <p>Intento:{{intento}}</p>
  </div>

  <div>
    <img src="../img/negro.png" alt="No encontrado">
    <img src="../img/negro.png" alt="No encontrado">
    <img src="../img/negro.png" alt="No encontrado">
  </div>

  <div id="contenedor-textos">
    <p>{{pokemonTexto1}}</p>
    <p>{{pokemonTexto2}}</p>
    <p>{{pokemonTexto3}}</p>
  </div>

  <button v-on:click="jugar()">Jugar</button>
</template>

<script>
export default {
    data(){
        return{
            puntaje: 0,
            intento: 5,
            numPokemon:[123, 54, 72, 19],
            banderaJuego: true,
            pokemonTexto1: "xxxxxxxxx",
            pokemonTexto2: "xxxxxxxxx",
            pokemonTexto3: "xxxxxxxxx"
        }
    },
    methods:{
        jugar(){
            this.obtenerAleatorio;
        },
        obtenerAleatorio(tope){
            aleatorio = Math.floor((Math.random*tope)+1);
            return aleatorio;
        },
        definirPokemons(){

        },
        async consumirApi(id){

        }
    }
}
</script>

<style>
img{
    margin: 15px 20px;
    width: 255px;
    height: 255px;
}

p{
    display: inline;
    margin: 25px;
}

#contenedor-textos p{
    margin: 110px;
}
</style>