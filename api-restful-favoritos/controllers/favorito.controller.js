'use strict'
// Importes
const Favorite = require('../models/favorite.model')

// controladores funciones que manejan las funcionalidades de la ruta
function prueba (req, res) {
  let nombre = req.params.nombre
  res.send('Soy una prueba ' + nombre)
}

// Obtiene el favorito (single)
function getFavorite (req, res) {

}

// Lista los favoritos
function allFavorites (req, res) {

}

// Guarda un nuevo favorito
function saveFavorite (req, res) {
  let favorite = new Favorite()
  let params = req.body

  favorite.title = params.title
  favorite.description = params.description
  favorite.url = params.url

  favorite.save((err, data) => {
    if (err) return res.status(500).send({ message: 'Error al guardar' + err })

    // save
    res.status(200).send({ favorite: data })
  })
}

// actualiza un favorito
function updateFavorite (req, res) {
  let params = req.body
  res.status(200).send({
    favorite: params
  })
}

// Elimina un favorito
function deleteFavorite (req, res) {
  let params = req.body

  res.status(200).send({
    favorite: params
  })
}

// Exporta todas las funciones para usar en rutas
module.exports = {
  prueba,
  getFavorite,
  allFavorites,
  saveFavorite,
  updateFavorite,
  deleteFavorite
}
