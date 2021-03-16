const mongoose = require('mongoose')
const Schema = mongoose.Schema
const shortid = require('shortid')

const JahresberichtSchema = new Schema({
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
    description: {
      type: String
    }
  },
  en: {
    title: {
      type: String
    },
    description: {
      type: String
    },
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
        },
        title: { type: String },
        secondTitle: { type: String },
        subtitle: { type: String }
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
        },
        title: { type: String },
        secondTitle: { type: String },
        subtitle: { type: String }
      }
    ]
  },
  images: {
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
        },
        title: { type: String },
        secondTitle: { type: String },
        subtitle: { type: String }
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
        },
        title: { type: String },
        secondTitle: { type: String },
        subtitle: { type: String }
      }
    ]
  },

  toOrder: {
    type: Boolean,
    default: false
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

module.exports = Jahresbericht = mongoose.model(
  'jahresbericht',
  JahresberichtSchema
)
