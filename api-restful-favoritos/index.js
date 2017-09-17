'use strict'
const mongoose = require('mongoose')

let app = require('./app')
// configuramos el puerto
let port = process.env.PORT || 3200
let mongoURL = 'mongodb://localhost/favoritos'

mongoose.connect(mongoURL, {useMongoCliente: true})
  .then(() => {
    console.log('Conexion a mongodb Lista!!!')
    // donde el servidor escucha
    app.listen(port, () => {
      console.log(`API REST escuchando en http://localhost:${port}`)
    })
  }).catch(err => console.log('tirar el error ' + err))
