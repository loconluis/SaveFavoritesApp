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
  let favoriteID = req.params.id

  // devuelve un JSON con el dato requerido por id
  Favorite.findById(favoriteID, (err, fav) => {
    // manejo del error
    if (err) { return res.status(500).send({ message: 'Error al devolver el marcador' }) }

    // si la respuesta es vacia
    if (!fav) { return res.status(404).send({ message: 'No hay marcador' }) }

    // Si devuelve una respuesta
    res.status(200).send({ fav })
  })
}

// Lista los favoritos
function allFavorites (req, res) {
  // devuelve un JSON con los datos en la coleccion
  Favorite.find({}).sort('-_id').exec((err, favs) => {
    // manejo del error
    if (err) { res.status(500).send({ message: 'Error al devolver marcadores' }) }

    // respuesta vacia
    if (!favs) {
      res.status(404).send({ message: 'No hay marcadores' })
    }

    // respuesta con datos
    res.status(200).send({ favs })
  })
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
  let favoriteID = req.params.id
  let update = req.body

  Favorite.findByIdAndUpdate(favoriteID, update, (err, favUpdate) => {
    // Manejo del error
    if (err) { res.status(500).send({ message: 'Error al actualizar el marcador' }) }

    // exitoso
    res.status(200).send({ favUpdate })
  })
}

// Elimina un favorito
function deleteFavorite (req, res) {
  let favoriteID = req.params.id

  // devuelve un JSON con el dato requerido por id
  Favorite.findById(favoriteID, (err, fav) => {
    // manejo del error
    if (err) { res.status(500).send({ message: 'Error al devolver el marcador' }) }

    // si la respuesta es vacia
    if (!fav) {
      res.status(404).send({ message: 'No hay marcador' })
    } else {
      // si existe el dato para eliminar
      fav.remove(err => {
        if (err) {
          res.status(500).send({ message: 'El marcador no se ha eliminado' })
        } else {
          res.status(200).send({ message: 'El marcador se ha eliminado' })
        }
      })
    }
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
