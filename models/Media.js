const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MediaSchema = new Schema({
  category: {
    type: String
  },
  originalName: {
    type: String
  },
  name: {
    type: String
  },
  isVisible: {
    type: Boolean,
    default: true
  },
  isOnline: {
    type: Boolean,
    default: false
  },
  position: {
    type: Number
  },
  isDeleted: {
    type: Boolean,
    default: false
  }
})

module.exports = Media = mongoose.model('media', MediaSchema)
