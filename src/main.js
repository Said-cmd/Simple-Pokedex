document.addEventListener("DOMContentLoaded", () =>  {
  fetchPokemon
});
document.querySelector("#poke-button").addEventListener("click", fetchPokemon);

function fetchPokemon (e) {
  const name = document.querySelector("#poke-search").value;
fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
  .then(parseResponse)
  .then(showPokemon)
  .catch(showError)

function parseResponse(response) {
  return response.json()
}

function showPokemon(pokemonData) {
  document.querySelector(".poke-holder").innerHTML = `
      <div>
      <h1>My Pokémon Is: </h1>
      <img id="pokemon-image" 
      src="${pokemonData.sprites.other["official-artwork"].front_default}"
        alt="Pokemon Name"
        >
        <p id="pokemon-name">${pokemonData.name}</p>
      </div>`
};

function showError(error) {
  const $error = document.querySelector("#error")
  $error.textContent = error.message
}
e.preventDefault();
}