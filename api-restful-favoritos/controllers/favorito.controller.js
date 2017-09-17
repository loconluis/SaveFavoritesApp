'use strict'
// controladores funciones que manejan las funcionalidades de la ruta
function prueba (req, res) {
  let nombre = req.params.nombre
  res.send('Soy una prueba ' + nombre)
}

// Obtiene el favorito (single)
function getFavorite (req, res) {
  let favoriteID = req.params.id
  res.status(200).send({
    data: favoriteID
  })
}

// Lista los favoritos
function allFavorites (req, res) {

}

// Guarda un nuevo favorito
function saveFavorite (req, res) {
  let params = req.body
  res.status(200).send({
    favorite: params
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
