const mongoose = require('mongoose')
const Schema = mongoose.Schema

const NewsSchema = new Schema({
  titleDE: {
    type: String
  },
  titleEN: {
    type: String
  },
  handle: {
    type: String
  },
  descriptionDE: {
    type: String
  },
  descriptionEN: {
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

  images: [
    {
      originalName: {
        type: String,
        required: true
      },
      title: {
        type: String
      },
      description: {
        type: String
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
  position: {
    type: Number
  },
  isDeleted: {
    type: Boolean,
    default: false
  }
})

module.exports = News = mongoose.model('news', NewsSchema)
