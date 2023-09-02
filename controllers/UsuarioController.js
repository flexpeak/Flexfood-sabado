const {usuarios, restaurantes} = require ('../models')
const bcrypt = require ('bcrypt')
const jwt = require ('jsonwebtoken')


require ('dotenv').config()

module.exports = class UsuarioController{
    static async store(req, res){
        try{
            const salt = await bcrypt.genSalt(12)
            const senha = await bcrypt.hash(req.body.senha, salt)

            const usuario = await usuarios.create({
                nome: req.body.nome,
                email: req.body.email,
                status: 'A',
                tipo: req.body.tipo,
                senha: senha,
            })
            res.status(201).json({
                usuario
            })
        

        }catch (e){
            res.status(500).json({
                error: e.message
            })
        }
    }


    static async login (req, res){
        try{
            const usuario = await usuarios.findOne({
                where: {
                    email: req.body.email,
                    status: 'A'
                }
            })
            if(usuario){
                const senhaCorreta = await bcrypt.compare(req.body.senha, usuario.senha)
                if(senhaCorreta){
                    const token = await jwt.sign (usuario.id, precess.env.JWT_KEY)
                    res.json ({
                        token: token,
                        tipo: usuario.tipo
                    })
                }else {
                    res.status(401).json({
                        error: 'Usuario ou senha invalida'
                    })
                }
            
            }else {
                res.status(401).json({
                    error: 'Usuario ou senha invalida'
                })
            }
        }
        catch (e){
            res.status(500).json({
                error: e.message
                })
        }
    {
            
}   
    } 
    static validaToken (req, res, next){
        const token = req.headers['authorization']
        jwt.verify (token, process.env.JWT_KEY, async (error, success)=>{
            if (error){
                return res.status(401).json({
                    error: 'Falha na autenticação'
                })
            }else{
               // console.log('sucesso')
               const usuario = await usuarios.findByPk(success)
                req.usuarioTipo = usuario.tipo
                req.usuario_id = success

                const restaurante = await restaurantes.findOne({
                        where: {
                            usuario_id: success
                        }
                })
                req.restaurante_id = restaurante?.id
                next()
            }
        })
}
} 

