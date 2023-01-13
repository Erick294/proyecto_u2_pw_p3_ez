//funcion lambda
const consumirAPI=(idPokemon)=>{
    const{name}= fetch(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.idPokemon}.svg`).then(r=>r.json)
}

//funciones
function obtenerAleatorio(tope){
    return Math.floor(Math.random()*tope)+1;
}

const crearArregloPokemon=()=>{
    const arreglo=[]

    arreglo[0] = obtenerAleatorio(600)
    arreglo[1] = obtenerAleatorio(600)
    arreglo[2] = obtenerAleatorio(600)
    arreglo[3] = obtenerAleatorio(600)
    console.log(arreglo)
    
    return arreglo
}

