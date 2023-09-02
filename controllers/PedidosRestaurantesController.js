const {produtos, restaurantes, usuarios, pedidos} = require('../models')
const {Op} = require('sequelize')

module.exports = class PedidosRestaurantesController {
    static async index(req, res){
        try{
            const list = await pedidos.findAll({
                where: {
                    restaurante_id : req.restaurantes_id,
                    status:{
                        [Op.notIn]: ['F', 'C'] //F = Finalizado | C = Cancelado
                    }
                },
                include: [
                    {
                        model:produtos,
                        as: 'produtos'
                    },{
                        model:usuarios,
                        as: 'usuarios',
                        attributes: ['id', 'nome', 'email']
                    }
                ]
            })
            res.json (list)
        } catch (e){
            res.status(500).json({
                error: e.message
            })
        }
    }
}