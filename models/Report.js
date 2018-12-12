const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ReportSchema = new Schema({
  description: {
    type: String
  },
  email: {
    type: String
  },
  user: {
    type: String
  },
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  phone: {
    type: String
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
