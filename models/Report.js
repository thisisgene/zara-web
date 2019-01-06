const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ReportSchema = new Schema({
  description: {
    type: String
  },
  anonym: {
    type: Boolean
  },
  email: {
    type: String
  },
  user: {
    type: String
  },
  userName: {
    type: String
  },

  phone: {
    type: String
  },
  date: {
    type: Date
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
      }
    }
  ]
})

module.exports = Report = mongoose.model('reports', ReportSchema)
