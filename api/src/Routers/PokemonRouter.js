const { Router } = require('express')
const { pokemonsHandlerGet, pokemonPerName } = require('../Handlers/handlerPokemonPost')

const pokemonRouter = Router()

pokemonRouter.get('/', pokemonsHandlerGet)
pokemonRouter.get('/name', pokemonPerName)

module.exports = pokemonRouter