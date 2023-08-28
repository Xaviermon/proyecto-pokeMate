import { GET_POKEMONS, SELECT_POKEMON, VALIDATEUSER, POKEMON_NAME, VALIDATEUSERLOGOUT, GET_EJERCICIOS, ONE_EJERCICIO } from "./actions-types"

const inialState = {
	pokemons: [],
	user: [],
	ejercicios: [],
	pokemonDetail: {},
	ejerciciosDetail: {},
	userDetail: {},
	selectPokemon: {},
	login: false,
	imagenPokemon: {}
}

const Reducer = (state = inialState, action) => {
	switch (action.type) {
		case GET_POKEMONS:
			return {
				...state,
				pokemons: action.payload,
			}
		case GET_EJERCICIOS:
			return {
				...state,
				ejercicios: action.payload
			}	
		case SELECT_POKEMON:
			return {
				...state,
				selectPokemon: action.payload
			}
		case 	VALIDATEUSER:
			return {
				...state,
				user: action.payload,
				login: true
			}
		case POKEMON_NAME:
			return {
				...state,
				imagenPokemon: action.payload
			}
		case VALIDATEUSERLOGOUT:
			return {
				...state,
				login: action.payload
			}
		case ONE_EJERCICIO:
			return {
				...state,
				ejerciciosDetail: action.payload
			}		
		default:
			return state
	}
}

export default Reducer