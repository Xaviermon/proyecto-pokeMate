const { Router } = require("express");
const userRouter = require("./UsersRouter")
const pokemonRouter = require('./PokemonRouter')
const ejerciciosRouter = require("./EjerciciosRouter");
const validateRouter = require('./ValidateRouter')
const alternativaRouter = require('./AlternativaRouter.js')
const relationResponse = require('./RelactionResponse')

const router = Router();

router.use("/user", userRouter);
router.use('/pokemon', pokemonRouter)
router.use('/ejercicios', ejerciciosRouter)
router.use('/validateLogin', validateRouter)
router.use("/alternativa", alternativaRouter)
router.use('relationResponse', relationResponse )

module.exports = router;
