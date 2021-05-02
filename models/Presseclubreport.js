const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ReportSchema = new Schema({
  date: {
    type: Date,
  },
  category: {
    type: String,
  },
  perspective: {
    type: String,
  },
  directReaction: {
    type: Boolean,
  },
  articleUrl: {
    type: String,
  },
  keywords: {
    type: Array,
  },
  description: {
    type: String,
  },
  postUrl: {
    type: String,
  },

  socialmedia: {
    type: Object,
  },
  extent: {
    type: String,
  },
  privatemsg: {
    type: Boolean,
  },
  privatemsgValue: {
    type: String,
  },
  typeOfHate: {
    type: Array,
  },
  typeOtherValue: {
    type: String,
  },
  typeOfHateNotes: { type: String },
  typeText: {
    type: String,
  },
  typeText2: {
    type: String,
  },
  typeText3: {
    type: String,
  },
  images: [
    {
      originalName: {
        type: String,
        required: true,
      },
      title: {
        type: String,
      },
      description: {
        type: String,
      },
      date: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  typeOfAbuse: { type: Object },
  location: { type: String },
  attacker: { type: String },
  racism: {
    type: Boolean,
  },
  racismText: {
    type: String,
  },
  witness: {
    type: Boolean,
  },
  witnessText: {
    type: String,
  },
  onlineToo: {
    type: Boolean,
  },
  jurid: {
    type: String,
  },
  juridText: {
    type: String,
  },
  consequence: {
    type: String,
  },
  consequence2: {
    type: String,
  },
  consequence3: {
    type: String,
  },
  solidarity: {
    type: String,
  },
  gender: {
    type: String,
  },
  genderText: {
    type: String,
  },
  medium: {
    type: String,
  },
  additional: {
    type: String,
  },
  additional2: {
    type: String,
  },
  archived: {
    type: Boolean,
    default: false,
  },
})

module.exports = Presseclubreport = mongoose.model(
  'presseclubreports',
  ReportSchema
)
