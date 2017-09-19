'use strict'

const express = require('express')
const FavoritoController = require('../controllers/favorito.controller')
// router de express
const api = express.Router()

// definiendo rutas (@param1  = ruta, @param2 = funcion de callback)
api.get('/prueba/:nombre?', FavoritoController.prueba)
api.get('/favorito/:id', FavoritoController.getFavorite)
api.get('/favoritos', FavoritoController.allFavorites)
api.post('/favorito', FavoritoController.saveFavorite)
api.put('/favorito', FavoritoController.updateFavorite)
api.delete('/favorito', FavoritoController.deleteFavorite)
module.exports = api
