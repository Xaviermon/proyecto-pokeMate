const { validateUser } = require('../Controllers/validateController')

const validateHandlerGet = async (req, res) =>{
    const { usuario, contraseña } = req.body
    try {
        const userValidate = await validateUser(usuario, contraseña)
        res.status(200).json(userValidate)
    } catch (error) {
        return res.status(404).json({ error: error.message });
    }
}

module.exports = {
    validateHandlerGet
}