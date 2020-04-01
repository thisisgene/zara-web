const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const shortid = require('shortid');

const BulletinSchema = new Schema({
  _id: {
    type: String,
    default: shortid.generate
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
  location: String,
  date: {
    type: String
  },
  timeFrom: {
    type: String
  },
  timeUntil: {
    type: String
  },
  peopleMin: {
    type: Number
  },
  peopleMax: {
    type: Number
  },
  handle: {
    type: String
  },
  category: { label: String, value: String },
  label: { name: String, label: String, value: String, color: String },
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
});

module.exports = Bulletin = mongoose.model('bulletin', BulletinSchema);
