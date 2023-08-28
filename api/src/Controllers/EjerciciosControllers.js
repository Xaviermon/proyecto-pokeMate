const { Ejercicio } = require('../db.js')

const postEjercicio = async (problema, respuesta, curso, imagen) =>{
  const newEjercicio = await Ejercicio.create({problema, respuesta, curso, imagen})
  return newEjercicio
}
const getAllEjercicios = async () =>{
  const allEjercicios = await Ejercicio.findAll()
  return allEjercicios
}
const getOneEjercicio = async (id) =>{
  const oneEjercicio = await Ejercicio.findByPk(id)
  return oneEjercicio
}

module.exports = {
  postEjercicio,
  getAllEjercicios,
  getOneEjercicio
}