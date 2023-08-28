const { URL_API } = process.env;
const { searchPerNameApi } = require('../Helpers/Funciones.js')
const axios = require('axios')

const getPokemonsName = async (name) =>{
  const pokemon = (await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)).data;
  const pokemonFind = {
    id: pokemon.id,
    name: pokemon.name,
    image: pokemon.sprites.other["official-artwork"].front_default,
  }
  return pokemonFind
}
const getPokemons = async () =>{
  const allPokemons = (await axios.get(URL_API)).data.results;
  const promesaTodo = await Promise.all(
    allPokemons.map(async (poke) => {
      return await searchPerNameApi(poke.name);
    })
  );
  return promesaTodo
}

module.exports = {
  getPokemons,
  getPokemonsName
}