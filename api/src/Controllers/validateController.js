const { Profile } = require('../db')

const validateUser = async (usuario, contraseña) =>{
    const findUser = await Profile.findAll({ where: {usuario: usuario, contraseña: contraseña}})
    return findUser
}

module.exports={
    validateUser
}