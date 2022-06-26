document.addEventListener("DOMContentLoaded", () => {
  showPokemon();
});
const favoritePokemon = "4"
const url = `https://pokeapi.co/api/v2/pokemon/${favoritePokemon}`

let pokeEnter = document.getElementById("poke-search")
let pokeSearch = document.getElementById("poke-button")


fetch(url)
  .then(parseResponse)
  .then(showPokemon)
  .catch(showError)

function parseResponse(response) {
  return response.json()
}

function showPokemon(pokemonData) {
  const imageUrl = pokemonData.sprites.front_default
  const name = pokemonData.name

  const $image = document.querySelector("#pokemon-image")
  const $name = document.querySelector("#pokemon-name")

  $image.src = imageUrl
  $name.textContent = name
}

function showError(error) {
  const $error = document.querySelector("#error")
  $error.textContent = error.message
}