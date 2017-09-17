'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

let FavoriteSchema = Schema({
  title: String,
  description: String,
  url: String
})

module.exports = mongoose.model('Favorite', FavoriteSchema)
