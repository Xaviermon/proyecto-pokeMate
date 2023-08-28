const { Alternativa } = require('../db')

const addAlternative = async (alt1, alt2, alt3, alt4, alt5, EjercicioId) =>{
	const newAlternativa = await Alternativa.create({alt1, alt2, alt3, alt4, alt5, EjercicioId})
	return newAlternativa
}
const getAllAlternativas = async () =>{
	return await Alternativa.findAll()
}
const getOneAlternativa = async (id) =>{
	return await Alternativa.findByPk(id)
}

module.exports = {
	addAlternative,
	getOneAlternativa,
	getAllAlternativas
}