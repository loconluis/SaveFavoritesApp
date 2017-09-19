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

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method')
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE')
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE')

  next()
})

app.use('/api', api)

// exportamos el modulo de la aplicacion
module.exports = app
