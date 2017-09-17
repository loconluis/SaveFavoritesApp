'use stric'

// importamos express para generar el server
const express = require('express')
const bodyParser = require('body-parser')

// app es la instancia del servidor
const app = express()

const api = require('./routes/favorito.route')

// para que trate todo el cuerpo como un json
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use('/api', api)

// exportamos el modulo de la aplicacion
module.exports = app
