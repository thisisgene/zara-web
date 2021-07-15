const mongoose = require("mongoose")
const Schema = mongoose.Schema
const shortid = require("shortid")

const jobSchema = new Schema({
  _id: {
    type: String,
    default: shortid.generate,
  },
  tag: {
    type: String,
  },
  date: {
    type: Date,
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
    time: {
      type: String,
    },
    contact: {
      type: String,
    },
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
    time: {
      type: String,
    },
    contact: {
      type: String,
    },
  },

  handle: {
    type: String,
  },

  lastEdited: {
    user: {
      type: Schema.Types.ObjectId,
      ref: "users",
    },
    date: {
      type: Date,
    },
  },

  titleImage: {
    originalName: { type: String },
    imageId: { type: String },
    category: { type: String },
  },
  imageSide: { type: String },
  imageAlign: { type: String },
  size: { type: String },

  moreLink: {
    type: Boolean,
  },
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

module.exports = job = mongoose.model("job", jobSchema)
