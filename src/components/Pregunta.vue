<template>
  <h1></h1>
  <img v-if="imagen" v-bind:src=imagen alt="No se puede visualizar">

  <div class="fondo-dark">
  </div>

  <div class="container">
    <input v-model="question" type="text" placeholder="Ingrese su pregunta">
    <p>Recuerda terminar con un signo de interrogación (?)</p>
  </div>

  <div>
    <h2>{{ question }}</h2>
    <h1>{{ respuesta }}</h1>
  </div>
</template>

<script>
export default {
    //Options API
    name:"Pregunta",
    data(){
        return{
            question: "Hola Mundo",
            respuesta: null,
            imagen:null
        }
    },
    watch:{ //observador
        question(value, oldValue){
            console.log(value)
            console.log(oldValue)
            if(!value.includes("?")) return;
            console.log("Vamos a consumir una API")
            this.consumirApi()
        }
    },
    methods:{
        async consumirApi(){
            this.respuesta ="Pensando."
            this.respuesta ="Pensando.."
            this.respuesta ="Pensando..."
            const {answer, forced, image} = await fetch('https://yesno.wtf/api').then(r=>r.json())
            console.log(answer)
            console.log(forced)
            console.log(image)
            this.imagen = image
            
            this.respuesta = answer
        }
    }
}
</script>

<style>
    img, .fondo-dark{
        width: 100vw; 
        height: 100vh;
        position: fixed;
        left: 0px;
        top: 0px;
    }

    .fondo-dark{
        background-color:rgba(0,0,0,0.5);
    }

    input{
        text-align: center;
        width: 250px;
        padding: 10px;
        border-radius: 5px;
        border: none;
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

    .container{
        position: relative; /*se posiciona en la ubicacion que se desee sin tomar en cuenta los otros objetos*/
        z-index: 99; /*indice identificador (evita colisiones)*/
    }
</style>