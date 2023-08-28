const { postRelation } = require('../Controllers/relationController');
const relationPost = async (req, res) =>{
	try {
		const { ProfileId, EjercicioId } = req.body
		res.status(200).json( await postRelation(ProfileId, EjercicioId) )
	} catch (error) {
		return res.status(404).json({ error: error.message });
	}
		
	}

	module.exports = {
		relationPost
	}