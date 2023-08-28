const { userPost, validateUser } = require('../Controllers/UserControllers')


const userHandlerPost = async (req, res) => {
  const { nombre, apellido, grado, usuario, celular, contraseña, pokemon } = req.body
  try {
    const newUser = await userPost(nombre, apellido, grado, usuario, celular, contraseña, pokemon)
    res.status(200).json(newUser)
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
};
const validateUserhandler = async (req, res) => {
  const { usuario, contraseña } = req.body
  try {
    const userValidate = await validateUser(usuario, contraseña)
    res.status(200).json(userValidate)
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
}

module.exports = {
  userHandlerPost,
  validateUserhandler
}
