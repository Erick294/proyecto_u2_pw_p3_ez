<template>
  <div id="contenedor-juego" v-if="banderaJuego">
    <p>Puntaje:{{puntaje}}</p>
    <p>Intento:{{intento}}</p>
  </div>

  <div v-if="mostrarInicio">
    <img src="../img/negro.png" alt="No encontrado">
    <img src="../img/negro.png" alt="No encontrado">
    <img src="../img/negro.png" alt="No encontrado">
  </div>

  <div v-if="!mostrarInicio">
    <img :src="this.pokemon1.ruta" alt="No encontrado">
    <img :src="this.pokemon2.ruta" alt="No encontrado">
    <img :src="this.pokemon3.ruta" alt="No encontrado">
  </div>

  <div id="contenedor-textos">
    <p>{{pokemonTexto1}}</p>
    <p>{{pokemonTexto2}}</p>
    <p>{{pokemonTexto3}}</p>
  </div>

  <div v-if="ganador">
    <p>{{ mensaje }}</p>
    <img src="../img/congratulations.gif" alt="No">
    <p>{{ mensaje2 }}</p>
  </div>

  <div v-if="perdedor">
    <p>{{ mensaje }}</p>
  </div>

  <button v-on:click="jugar()">Jugar</button>
  <button v-on:click="nuevoJuego()">Nuevo Juego</button>
</template>

<script>
export default {
    data(){
        return{
            puntaje: 0,
            intento: 5,
            banderaJuego: true,
            pokemonTexto1: "xxxxxxxxx",
            pokemonTexto2: "xxxxxxxxx",
            pokemonTexto3: "xxxxxxxxx",
            mensaje: "",
            mensaje2: "",
            pokemon1: null,
            pokemon2: null,
            pokemon3: null,
            mostrarInicio: true,
            ganador: false,
            perdedor: false
        }
    },
    methods:{
       async jugar(){
            const numAleatorio1 = this.obtenerAleatorio(3);
            const numAleatorio2 = this.obtenerAleatorio(3);
            const numAleatorio3 = this.obtenerAleatorio(3);

            const vectorPlantilla = await this.construirPokemons();
            console.log(vectorPlantilla);

            this.pokemon1 = vectorPlantilla[numAleatorio1];
            this.pokemon2 = vectorPlantilla[numAleatorio2];
            this.pokemon3 = vectorPlantilla[numAleatorio3];

            this.pokemonTexto1 = this.pokemon1.nombre;
            this.pokemonTexto2 = this.pokemon2.nombre;
            this.pokemonTexto3 = this.pokemon3.nombre;

            this.disminuirIntentos();
            this.aumentarPuntaje();

            if(this.puntaje >=10 && this.intento == 0){
                this.mensaje = "Felicitaciones! Ha ganado";
                this.mensaje2 = "Usted es acredor del premio por $100000000";
                this.ganador = true;
            }else if(this.puntaje <10 && this.intento == 0){
                this.mensaje = "Has utilizado tus 5 intentos";
                this.mensaje2 = "Mejor suerte para la proxima";
                this.perdedor = true;
            }

            this.mostrarInicio = false;
        },
        obtenerAleatorio(tope){
            const aleatorio = Math.floor((Math.random()*tope)+1);
            return aleatorio;
        },
        definirPokemons(){
            const vectorIdPokemons = [123, 54, 72, 19];
            return vectorIdPokemons;
        },
        async consumirApi(id){
            const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(r=>r.json());
            return data;
        },
        async construirPokemons(){
            const vectorObjetosPoke=[];
            const vector = this.definirPokemons();
            for(let i=0; i<4; i++){
                const idPokemon = vector[i];
                const obj = await this.construirObjetoPokemon(idPokemon);
                vectorObjetosPoke.unshift(obj);
            }
            return vectorObjetosPoke;
        },
        async construirObjetoPokemon(id){
            const {name} = await this.consumirApi(id);
            console.log(name);
            const objetoPoke={
                ruta: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`,
                nombre: name
            };
            return objetoPoke;
        },
        disminuirIntentos(){
            return this.intento--
        },
        aumentarPuntaje(){
            if(this.pokemon1.nombre == this.pokemon2.nombre &&
                this.pokemon2.nombre == this.pokemon3.nombre){
                    this.puntaje += 5;
            }else if(this.pokemon1.nombre == this.pokemon2.nombre ||
                this.pokemon2.nombre == this.pokemon3.nombre){
                    this.puntaje += 2;
            }
        },
        nuevoJuego(){
            this.mostrarInicio=true;
            this.ganador = false;
            this.perdedor = false;
            this.pokemonTexto1="xxxxxxxxxxxx"
            this.pokemonTexto2="xxxxxxxxxxxx"
            this.pokemonTexto3="xxxxxxxxxxxx"
            this.intento=5
            this.puntaje=0
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

button{
    margin: 20px;
}
</style>