const { addAlternative, getAllAlternativas, getOneAlternativa } = require('../Controllers/alternativaControll')

const alternativaHandlerPost = async (req, res) =>{
	try {
		const { alt1, alt2, alt3, alt4, alt5, EjercicioId } = req.body
		res.status(200).json(await addAlternative(alt1, alt2, alt3, alt4, alt5, EjercicioId))
	} catch (error) {
		return res.status(404).json({ error: error.message });
	}
}
const alternativaGetAll = async (req, res) =>{
	try {
		res.status(200).json(await getAllAlternativas())
	} catch (error) {
		return res.status(404).json({ error: error.message });
	}
}
const alternativaGetOne = async (req, res) =>{
	try {
		const { id } = req.params
		res.status(200).json(await getOneAlternativa(id))
	} catch (error) {
		return res.status(404).json({ error: error.message });
	}
}
module.exports = {
	alternativaHandlerPost,
	alternativaGetAll,
	alternativaGetOne
}