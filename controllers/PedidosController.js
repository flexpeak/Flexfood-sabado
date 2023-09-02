const {produtos, restaurantes, usuarios, pedidos} = require('../models')

module.exports = class PedidosController {
    static async index(req, res){
        try{
            const lista = await pedidos.findAll({
                where: {
                    usuario_id : req.usuario_id
                },
                include: 'restaurantes'
            })
            res.json (lista)
        } catch (e){
            res.status(500).json({
                error: e.message
            })
        }
    }

    static async show(req, res){
        try{
            const{id} = req.params
            const pedido = await pedidos.findOne({
                where: {
                    id: id
                },
                include: 'produtos'
            })
            res.json (pedido)
        } catch (e){
            res.status(500).json({
                error: e.message
            })
        }
    }

    static async store(req, res){
        try{
            const pedido = await pedidos.create({
                usuario_id: req.usuario_id,
                restaurante_id: req.body.restaurante_id,
                status: 'P', //P = Pendente
                valor_total: 0
            })
            res.json(pedido)
        } catch (e){
            res.status(500).json({
                error: e.message
            })
        }
    }

    static async update(req, res){
        try{
            const{id} = req.params
            const pedido = await pedidos.findOne({
                where: {
                    id: id
                }
            })
            await pedido.update({
                restaurante_id: req.body.restaurante_id,
                status: 'S', //P = Pendente - S = Separacao
                valor_total: 0
            })
            res.json(pedido)
        } catch (e){
            res.status(500).json({
                error: e.message
            })
        }
    }

    static async destroy(req, res){
        try{
            const{id} = req.params
            const pedido = await pedidos.findOne({
                where: {
                    id: id,
                    usuario_id : req.usuario_id
                }
            })
            await pedido.update({
                status: 'C', //P = Pendente - S = Separacao - C = Cancelado
            })
            res.json({
                success: true
            })
        } catch (e){
            res.status(500).json({
                error: e.message
            })
        }
    }

}
