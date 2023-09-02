const express = require('express')
const RestaurantesController = require('../controllers/RestaurantesController')
const ProdutosController = require('../controllers/ProdutosController')
const UsuarioController = require('../controllers/UsuarioController')
const router = express.Router()

router.get('/rota-privada', UsuarioController.validaToken, (req,res)=>{
    res.json({message: 'Acesso da rota privada concedido'})
})

router.get ('/restaurantes', RestaurantesController.index)
router.post ('/restaurantes', RestaurantesController.store)
router.put ('/restaurantes/:id', RestaurantesController.update)
router.delete ('/restaurantes/:id', RestaurantesController.destroy)

router.get ('/produtos', ProdutosController.index)
router.post ('/produtos', ProdutosController.store)
router.get ('/produtos/:id', ProdutosController.show)
router.put ('/produtos/:id', ProdutosController.update)
router.delete ('/produtos/:id', ProdutosController.destroy)

module.exports = router