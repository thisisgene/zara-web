const mongoose = require('mongoose')
const Schema = mongoose.Schema
const shortid = require('shortid')

const BulletinSchema = new Schema({
  _id: {
    type: String,
    default: shortid.generate,
  },
  de: {
    title: {
      type: String,
    },
    shortDescription: {
      type: String,
    },
    description: {
      type: String,
    },
    location: {
      type: String,
    },
    targetGroup: { type: String },
    timeFrame: { type: String },
  },
  en: {
    title: {
      type: String,
    },
    shortDescription: {
      type: String,
    },
    description: {
      type: String,
    },
    location: {
      type: String,
    },
    targetGroup: { type: String },
    timeFrame: { type: String },
  },
  date: {
    type: String,
  },
  showTimeAndDate: { type: Boolean },
  titleImage: {
    originalName: { type: String },
    imageId: { type: String },
    category: { type: String },
  },
  imageSide: { type: String },
  imageAlign: { type: String },
  size: {
    type: String,
  },
  handle: {
    type: String,
  },
  tag: { type: String },
  category: { label: String, value: String },
  label: { name: String, label: String, value: String, color: String },
  isVisible: {
    type: Boolean,
    default: false,
  },
  isOnline: {
    type: Boolean,
    default: false,
  },

  position: {
    type: Number,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
})

module.exports = Bulletin = mongoose.model('bulletin', BulletinSchema)
