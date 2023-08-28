const { Router } = require("express");
const { userHandlerPost, validateUserhandler } = require('../Handlers/handlerUserPost')

const userRouter = Router()

userRouter.post('/', userHandlerPost)
userRouter.get('/', validateUserhandler)


module.exports = userRouter;