const { postEjercicio, getAllEjercicios, getOneEjercicio } = require('../Controllers/EjerciciosControllers')

const ejercicioHandlerPost = async (req, res) =>{
  const { problema, respuesta, curso, imagen } = req.body
  try {
    const newEjercicio = await postEjercicio(problema, respuesta, curso, imagen)
    res.status(200).json(newEjercicio)
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
}
const ejerciciosAllGet = async (req, res) =>{
  try {
    const allEjercicios = await getAllEjercicios()
    res.status(200).json(allEjercicios)
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
}
const ejerciciosOneGet = async (req, res) =>{
  const { id } = req.params
  try {
    const oneEjercicio = await getOneEjercicio(id)
    res.status(200).json(oneEjercicio)
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
}

module.exports = {
  ejercicioHandlerPost,
  ejerciciosAllGet,
  ejerciciosOneGet
}