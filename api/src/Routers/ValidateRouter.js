const { Router } = require('express')
const { validateHandlerGet } = require('../Handlers/handlerValidate')

const validateRouter = Router()

validateRouter.post('/', validateHandlerGet)

module.exports = validateRouter