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
    title: String,
    address1: String
  },
  fee: { type: Number },
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
  emailSent: {
    type: Boolean,
    default: false
  },
  emailSubject: {
    type: String
  },
  pubContent: {
    type: String
  },
  privContent: {
    type: String
  },
  pubContentMarked: {
    type: String
  },
  privContentMarked: {
    type: String
  },
  label: { name: String, label: String, value: String, color: String },
  interestedTrainers: Array,
  assignedTrainer1: {
    id: String,
    name: String,
    additionalFees: [
      {
        description: String,
        amount: Number
      }
    ]
  },
  assignedTrainer2: {
    id: String,
    name: String,
    additionalFees: [
      {
        description: String,
        amount: Number
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
  email: {
    type: String
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
