const express = require('express')
const router = express.Router()
const IndexController = require('../controllers/IndexController')
const UsuarioController = require('../controllers/UsuarioController')

router.get ('/', IndexController.oi)
router.post('/registrar', UsuarioController.store)
router.post('/login', UsuarioController.login)


module.exports = router