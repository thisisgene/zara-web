const mongoose = require('mongoose')
const Schema = mongoose.Schema
const shortid = require('shortid')

const TrainingSchema = new Schema({
  _id: {
    type: String,
    default: shortid.generate
  },

  title: {
    type: String
  },
  location: {
    type: String
  },
  date: {
    type: Date
  },
  time: {
    type: String
  },
  handle: {
    type: String
  },

  labels: [{ name: String, color: String }],

  isVisible: {
    type: Boolean,
    default: false
  },
  isOnline: {
    type: Boolean,
    default: false
  },
  hasBeenSent: {
    type: Boolean
  },
  position: {
    type: Number
  },
  isDeleted: {
    type: Boolean,
    default: false
  }
})

const TrainingTeamSchema = new Schema({
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
    }
  },
  en: {
    title: {
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

  files: {
    de: [
      {
        _id: false,
        originalId: {
          type: String
        },
        value: {
          type: String
        },
        label: {
          type: String
        },
        name: {
          type: String
        }
      }
    ],
    en: [
      {
        _id: false,
        originalId: {
          type: String
        },
        value: {
          type: String
        },
        label: {
          type: String
        },
        name: {
          type: String
        }
      }
    ]
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

const TrainingTeam = mongoose.model('trainingTeam', TrainingTeamSchema)
const Training = mongoose.model('training', TrainingSchema)
module.exports = { TrainingTeam: TrainingTeam, Training: Training }
