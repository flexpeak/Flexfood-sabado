const express = require ('express')
const routes = require ('./routes/routes')
const app=  express()

require('dotenv').config()

app.use (express.urlencoded({extended: true}))
app.use (express.json())
app.use ('/', routes)

app.listen (process.env.PORT, ()=> {
    console.log (`Server running on ${process.env.PORT}`)
})