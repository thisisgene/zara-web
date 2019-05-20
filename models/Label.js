const mongoose = require('mongoose')
const Schema = mongoose.Schema

const LabelSchema = new Schema({
  title: {
    type: String
  },
  color: {
    type: String
  },
  category: {
    type: String
  },
  isDeleted: {
    type: Boolean,
    default: false
  },
  isOnline: {
    type: Boolean,
    default: true
  }
})

module.exports = Label = mongoose.model('labels', LabelSchema)
