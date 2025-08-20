
function fetchPokemon() {
    // https://pokeapi.co/api/v2/pokemon/raichu
    let datosObtenidos = undefined;
    let response = undefined;
    fetch('https://pokeapi.co/api/v2/pokemon/dragonite')
    .then(response => response.json())
    .then(datosObtenidos => mostrarDatos(datosObtenidos))
    .catch(error => console.error('Hubó un error: ',error))
    //
    console.log("1+1",response);
}

/**
 * Funcion que recibe los datos JSON del API y los transforma
 * para ser mostrados en pantalla
 * @param {*} data 
 */

function mostrarDatos(dataObtenida){
    const datosObtenidos = document.getElementById("poke-info");
    // datosObtenidos.innerHTML=mostrarEsto['name','height'];
    datosObtenidos.innerHTML=`
    <p>
        <h1> ${dataObtenida.name} </h1>
        
        <img src='${dataObtenida.sprites.other.showdown.front_default}'> </img>
        <h4> Peso: ${dataObtenida.weight/10} kg </h4>
        <h4> Altura: ${dataObtenida.height*10} cm </h4>
    </p>
    `;
}

// <!-- <img src='${mostrarEsto.sprites['front_default']}'> </img> !>