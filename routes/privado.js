const express = require('express')
const RestaurantesController = require('../controllers/RestaurantesController')
const UsuarioController = require('../controllers/UsuarioController')
const router = express.Router()

router.get('/rota-privada', UsuarioController.validaToken, (req,res)=>{
    res.json({message: 'Acesso da rota privada concedido'})
})

router.get ('/restaurantes', RestaurantesController.index)
router.post ('/restaurantes', RestaurantesController.store)
router.put ('/restaurantes/:id', RestaurantesController.update)
router.delete ('/restaurantes/:id', RestaurantesController.destroy)

module.exports = router