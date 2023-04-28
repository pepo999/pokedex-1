//console.log(window.location)
//console.log(window.location.search)

const urlSearchParams = new URLSearchParams(window.location.search);

//console.log(urlSearchParams)

const pokemonName = urlSearchParams.get('pokemon');


console.log(pokemonName);


PokeService.getDetail(pokemonName).then(pokemonObject => {
    console.log('data from db', pokemonObject);
    
    const newPokemon = createNewPokemon(pokemonObject);
    displayPokemon(newPokemon)

})

function displayPokemon(pokemon){
    console.log(pokemon);
}


function createNewPokemon(pokemonObject){
    const myPokemon = new Pokemon(pokemonObject.name);

    for (let i = 0; i < pokemonObject.stats.length; i++) {
        const statObject = pokemonObject.stats[i];
        myPokemon.addStat(statObject.stat.name, statObject.base_stat)
    }

    

    return myPokemon;
}