<template>
    <img v-if="mostrar" v-bind:src=imagen alt="No se puede visualizar">

    <input v-on:keyup.enter="buscarNombrePokemon()" v-model="nombre" type="text" placeholder="Ingrese el nombre del pokemon">

    <h2 v-if="error">{{mensaje}}</h2>
</template>

<script>
export default {
    name: "Pokemon8",
    data(){
        return{
            pokemon:null,
            imagen:null,
            error: false,
	    mostrar: false,
	    mensaje:null
        }
    },
    methods:{
        async consumirApi(id){
            const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(r=>r.json());
            return data;
        },
	async construirListaPokemons(){
            const vectorObjetosPoke=[];
            for(let i=1; i<555; i++){
                const obj = await this.construirObjetoPokemon(i);
                vectorObjetosPoke.unshift(obj);
            }
            return vectorObjetosPoke;
        },
        async construirObjetoPokemon(id){
            const {name} = await this.consumirApi(id);
            const objetoPoke={
                ruta: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`,
                nombre: name,
		idPoke: id
            };
            return objetoPoke;
        },
        async buscarNombrePokemon(){
            const lista = await this.construirListaPokemons()

            for (const item in lista) {
                if (this.nombrePokemon == item.name) {
                    this.imagen = item.ruta
		    this.mostrar = true  
                }else{
                    this.mensaje = "No se encontro al Pokemon especificado"
                    this.error = true
                }
            }
        }
    }
}
</script>

<style>
img{
        width: 100vw; 
        height: 100vh;
        position: fixed;
        left: 0px;
        top: 0px;
    }

    input{
        text-align: center;
        width: 250px;
        padding: 10px;
        border-radius: 5px;
        border: none;
	backround-color:black;
        position: relative; /*se posiciona en la ubicacion que se desee sin tomar en cuenta los otros objetos*/
        z-index: 99;
    }

    p{
        color:aliceblue;
        font-size:20px; 
        margin-top: 10px;
    }

    h1,h2{
        color: aliceblue;
        position: relative;
    }

    h2{
        margin-top: 25px;
    }

</style>