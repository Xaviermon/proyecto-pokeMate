const { Router } = require('express')
const { alternativaHandlerPost, alternativaGetAll, alternativaGetOne } = require('../Handlers/alternativaHandler')
const alternativaRouter = Router()

alternativaRouter.post('/', alternativaHandlerPost)
alternativaRouter.get('/', alternativaGetAll)
alternativaRouter.get('/:id', alternativaGetOne)


module.exports = alternativaRouter