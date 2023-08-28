import {
  GET_EJERCICIOS,
  ONE_EJERCICIO,
  POKEMON_NAME,
  GET_POKEMONS,
  ONE_POKEMON,
	VALIDATEUSER,
	POST_USER,
	POST_ALTERNATIVA,
	GET_ALTERNATIVA,
	GET_ID_ALTERNATIVA,
	SELECT_POKEMON,
	VALIDATEUSERLOGOUT,
	POST_EJERCICIOS,
	RELATION_USER
} from "./actions-types";
import axios from "axios";

export const getPokemons = () => {
  return async function (dispatch) {
    try {
      const json = await axios.get("/pokemon");
      const data = json.data;
      return dispatch({
        type: GET_POKEMONS,
        payload: data,
      });
    } catch (error) {
      alert(error);
    }
  };
};

export const getOnePokemon = (id) => {
  return async function (dispatch) {
    try {
      const json = await axios.get(`/pokemon/${id}`);
      const data = json.data;
      return dispatch({
        type: ONE_POKEMON,
        payload: data,
      });
    } catch (error) {
      alert(error);
    }
  };
};
export const getPokemonsByName = (name) => {
	return async function (dispatch) {
		try {
			const json = await axios.get(`/pokemon/name?name=${name}`);
			const data = json.data;
			return dispatch({
				type: POKEMON_NAME,
				payload: data,
			});
		} catch (error) {
			alert(error);
		}
	};
}
export const getEjercicios = () => {
  return async function (dispatch) {
    try {
      const json = await axios.get("/ejercicios");
      const data = json.data;
      return dispatch({
        type: GET_EJERCICIOS,
        payload: data,
      });
    } catch (error) {
      alert(error);
    }
  };
};
export const getOneEjercicio = (id) => {
  return async function (dispatch) {
    try {
      const json = await axios.get(`/ejercicios/${id}`);
      const data = json.data;
      return dispatch({
        type: ONE_EJERCICIO,
        payload: data,
      });
    } catch (error) {
      alert(error);
    }
  };
};

export const validateUser = (payload) => {
	return async function (dispatch) {
		try {
			const json = await axios.post("/validateLogin", payload);
			const data = json.data;
			if(data.length === 0) alert("Usuario o contraseña incorrectos");
			return dispatch({
				type: VALIDATEUSER,
				payload: data,
			});
		} catch (error) {
			alert(error);
		}
	};
}
export const postUser = (user) => {
	return async function (dispatch) {
		try {
			const json = await axios.post("/user", user);
			const data = json.data;
			return dispatch({
				type: POST_USER,
				payload: data,
			});
		} catch (error) {
			alert(error);
		}
	};
}
export const postAlternativa = (alternativa) => {
	return async function (dispatch) {
		try {
			const json = await axios.post("/alternativa", alternativa);
			const data = json.data;
			return dispatch({
				type: POST_ALTERNATIVA,
				payload: data,
			});
		} catch (error) {
			alert(error);
		}
	};
}
export const getAlternativa = () => {
	return async function (dispatch) {
		try {
			const json = await axios.get(`/alternativa`);
			const data = json.data;
			return dispatch({
				type: GET_ALTERNATIVA,
				payload: data,
			});
		} catch (error) {
			alert(error);
		}
	};
}
export const getIdAlternativa = (id) => {
	return async function (dispatch) {
		try {
			const json = await axios.get(`/alternativa/${id}`);
			const data = json.data;
			return dispatch({
				type: GET_ID_ALTERNATIVA,
				payload: data,
			});
		} catch (error) {
			alert(error);
		}
	};
}

export const selectPokemon = (pokemon) => {
	return {
		type: SELECT_POKEMON,
		payload: pokemon,
	};
}
export const loginOut = (payload) => {
	return {
		type: VALIDATEUSERLOGOUT,
		payload: payload,
	};
}

export const postEjercicio = (ejercicio) => {
	return async function (dispatch) {
		try {
			const json = await axios.post("/ejercicios", ejercicio);
			const data = json.data;
			return dispatch({
				type: POST_EJERCICIOS,
				payload: data,
			});
		} catch (error) {
			alert(error);
		}
	};
}

export const relationPost = (payload) => {
	return async function (dispatch) {
		try {
			const json = await axios.post("/relationResponse", payload);
			const data = json.data;
			return dispatch({
				type: RELATION_USER,
				payload: data,
			});
		} catch (error) {
			alert(error);
		}
	};
}