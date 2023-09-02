const {restaurantes , usuarios} = require ('../models')

module.exports = class RestaurantesController {
    static async store(req, res){
        try{
            const restaurante = await restaurantes.create({
                nome: req.body.nome,
                status: 'A',
                usuario_id: req.usuario_id
            })

            res.json(restaurante)

        } catch (e){
            res.status(500).json({
                error: e.message
            })
        }
    }
    static async update(req, res){
        try{
            const{id} = req.params
            const restaurante = await restaurantes.findOne({
                where: {
                    id: id,
                    usuario_id : req.usuario_id
                }
                
            })
            await restaurante.update({
                nome: req.body.nome,
                status: req.body.status,
                usuario_id: restaurante.usuario_id
            })
            res.json (restaurante)

        } catch (e){
            res.status(500).json({
                error: e.message
            })
        }
    }
    static async destroy(req, res){
        try{            
            const{id} = req.params
            const restaurante = await restaurantes.findOne({
                where: {
                    id: id,
                    usuario_id : req.usuario_id
                }
                
            })
            
            await restaurante.destroy()

            
        } catch (e){
            res.status(500).json({
                error: e.message
            })
        }
    }
    static async index(req, res){
        try{            
            if (req.usuarioTipo == 'C'){
                const lista = await restaurantes.findAll()
                res.json(lista)
            }
            else if (req.usuarioTipo == 'A') {
                const lista = await restaurantes.findOne({
                    where: {
                        usuario_id: req.usuario_id
                    }
                })
                res.json(lista)

            } else{
                res.status(500).json({
                    error: 'não encontrado'
                })
            }
            
        } catch (e){
            res.status(500).json({
                error: e.message
            })
        }
    }




}