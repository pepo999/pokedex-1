
let actualPage;

loadNextPage();

function loadNextPage(){
    PokeService.getNextPokemon(actualPage).then(pokemonPage => {
        actualPage = pokemonPage;
        displayPokemon();
        console.log(actualPage);
    })
}

function loadPreviousPage(){
    PokeService.getPreviousPokemon(actualPage).then(pokemonPage => {
        actualPage = pokemonPage;
        displayPokemon();
        console.log(actualPage);
    })
}

function displayPokemon(){

    const html = actualPage.results
                           .map(pokemon => `<div><strong>${pokemon.name}</strong></div>`).join('');
    document.getElementById('pokemon-container').innerHTML = html;
}