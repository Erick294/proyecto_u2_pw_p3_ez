<template>
  <h1>Pregunta</h1>
  <img src="https://via.placeholder.com/250" alt="No se puede visualizar">

  <div class="fondo-dark">

  </div>

  <div class="container">
    <input type="text" placeholder="Ingrese su pregunta">
    <p>Recuerda terminar con un signo de interrogación (?)</p>
  </div>

  <div>
    <h2>Voy a pasar de año?</h2>
    <h1>Si, No, ...</h1>
  </div>
</template>

<script>
export default {
    name:"Pregunta"
}
</script>

<style>
    img{
        width: 100vw; 
        height: 100vh;
    }

    input{
        text-align: center;
        width: 250px;
        padding: 10px;
        border-radius: 5px;
        border: none;
    }

    p{
        color: brown;
        font-size:20px; 
        margin-top: 0px;
    }

    h1,h2{
        color: brown;
    }

    h2{
        margin-top: 150px;
    }
</style>