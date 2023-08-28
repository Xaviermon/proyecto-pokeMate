const axios = require("axios");

const cleanTypesBdd = (array) => {
  return array.map((pokemon) => {
    return {
      id: pokemon.id,
      name: pokemon.name,
      image: pokemon.image,
      created: true,
    };
  });
};
const cleanObj = (obj) => {
  return {
    id: obj.id,
    name: obj.name,
    image:/* obj.sprites.other["official-artwork"].front_default, */ obj.sprites["front_default"],
    created: false,
  };
};

const searchPerNameApi = async (name) => {
  const pokemonListApi = await axios
    .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then((response) => {
      const pokemonApiData = response.data;

      const poke = cleanObj(pokemonApiData);

      return poke;
    });
  return pokemonListApi;
};

module.exports = {
  cleanTypesBdd,
  searchPerNameApi,
  cleanObj,
};
