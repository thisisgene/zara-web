const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const shortid = require('shortid');

const BulletinSchema = new Schema({
  _id: {
    type: String,
    default: shortid.generate
  },

  title: {
    type: String
  },
  location: {
    title: String,
    address1: String
  },
  date: {
    type: String
  },
  timeFrom: {
    type: String
  },
  timeUntil: {
    type: String
  },
  handle: {
    type: String
  },

  content: {
    type: String
  },

  contentMarked: {
    type: String
  },
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

const Bulletin = mongoose.model('bulletin', BulletinSchema);
module.exports = { Bulletin: Bulletin };
