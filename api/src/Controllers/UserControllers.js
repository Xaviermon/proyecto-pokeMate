const { Profile } = require('../db')

const userPost = async (nombre, apellido, grado, usuario, celular, contraseña, pokemon) =>{
  const addUser = await Profile.create({nombre, apellido, grado, usuario, celular, contraseña, pokemon})
  return addUser
}

const validateUser = async (usuario, contraseña) =>{
  const findUser = await Profile.findAll({ where: {usuario: usuario, contraseña: contraseña}})
  return findUser
}

module.exports = {
  userPost,
  validateUser
}