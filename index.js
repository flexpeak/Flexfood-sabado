const express = require ('express')
const cors = require ('cors')
const routerPublico = require ('./routes/publico')
const routerPrivado = require ('./routes/privado')
const UsuarioController = require('./controllers/UsuarioController')
const app=  express()

require('dotenv').config()

app.use (express.urlencoded({extended: true}))
app.use (express.json())
app.use (cors())
app.use ('/', routerPublico)
app.use ('/',UsuarioController.validaToken, routerPrivado)

app.use (function (req, res, next) {
    res.status(404).send ('Rota não encontrada')
})

app.listen (process.env.PORT, ()=> {
    console.log (`Server running on ${process.env.PORT}`)
})