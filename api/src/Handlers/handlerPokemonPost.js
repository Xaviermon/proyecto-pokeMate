const { getPokemons, getPokemonsName } = require('../Controllers/PokemonControllers')


const pokemonsHandlerGet = async (req, res) =>{
  try {
    res.status(200).json(await getPokemons())
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
}
const pokemonPerName = async (req, res) =>{
  const { name } = req.query
  try {
    res.status(200).json(await getPokemonsName(name))
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
}

module.exports = {
  pokemonsHandlerGet,
  pokemonPerName
}