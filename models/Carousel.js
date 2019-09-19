const mongoose = require('mongoose')
const Schema = mongoose.Schema
const shortid = require('shortid')

const CarouselSchema = new Schema({
  _id: {
    type: String,
    default: shortid.generate
  },
  title: String,
  imageAsBackground: { type: Boolean, default: true },
  titleImage: {
    originalName: { type: String },
    imageId: { type: String },
    category: { type: String }
  },
  mainLink: String,
  linkIsExternal: { type: Boolean, default: false },
  position: Number,
  isDeleted: {
    type: Boolean,
    default: false
  },
  isOnline: {
    type: Boolean,
    default: false
  }
})

module.exports = Carousel = mongoose.model('carousel', CarouselSchema)
