const mongoose = require('mongoose')
const Schema = mongoose.Schema
const shortid = require('shortid')

const NewsSchema = new Schema({
  _id: {
    type: String,
    default: shortid.generate
  },
  tag: {
    type: String
  },
  date: {
    type: Date
  },
  de: {
    title: {
      type: String
    },
    shortDescription: {
      type: String
    },
    description: {
      type: String
    }
  },
  en: {
    title: {
      type: String
    },
    shortDescription: {
      type: String
    },
    description: {
      type: String
    }
  },

  handle: {
    type: String
  },

  lastEdited: {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'users'
    },
    date: {
      type: Date
    }
  },
  titleImage: {
    originalName: { type: String },
    imageId: { type: String },
    category: { type: String }
  },
  imageSide: { type: String },
  imageAlign: { type: String },
  size: { type: String },
  images: [
    {
      originalName: {
        type: String,
        required: true
      },
      date: {
        type: Date,
        default: Date.now
      },
      position: {
        // Positioning inside project view.
        type: Number
      },
      isVisible: {
        type: Boolean,
        default: true
      },
      isDeleted: {
        type: Boolean,
        default: false
      }
    }
  ],

  isVisible: {
    type: Boolean,
    default: false
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

module.exports = News = mongoose.model('news', NewsSchema)
