const { Router } = require('express')
const { ejercicioHandlerPost, ejerciciosAllGet, ejerciciosOneGet } = require('../Handlers/handlerEjercicio')

const ejerciciosRouter = Router()

ejerciciosRouter.post('/', ejercicioHandlerPost)
ejerciciosRouter.get('/', ejerciciosAllGet)
ejerciciosRouter.get('/:id', ejerciciosOneGet)


module.exports = ejerciciosRouter