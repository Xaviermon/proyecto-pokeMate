const { ProfileEjercicio } = require("../db");

const postRelation = async (ProfileId, EjercicioId) =>{
	return await ProfileEjercicio.create({ProfileId, EjercicioId})
}

module.exports = {
	postRelation
}