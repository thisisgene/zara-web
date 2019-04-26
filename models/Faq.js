const mongoose = require('mongoose')
const Schema = mongoose.Schema
const shortid = require('shortid')

const FaqSchema = new Schema({
  _id: {
    type: String,
    default: shortid.generate
  },
  tags: {
    type: Array
  },
  date: {
    type: Date
  },
  title: {
    type: String
  },
  de: {
    question: {
      type: String
    },
    answer: {
      type: String,
      default: ''
    }
  },
  en: {
    question: {
      type: String
    },
    answer: {
      type: String,
      default: ''
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

module.exports = Faq = mongoose.model('faqs', FaqSchema)
