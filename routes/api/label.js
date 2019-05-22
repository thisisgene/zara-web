const express = require('express')
const router = express.Router()
const passport = require('passport')

const validateLabelInput = require('../../validation/label')

const Label = require('../../models/Label')

// @route   GET api/labels
// @desc    Get all labels
// @access  Public
router.get('/', (req, res) => {
  console.log('getall')
  const errors = {}
  Label.find({ isDeleted: false })
    .sort('position')
    .exec()
    .then(labels => {
      res.json(labels)
    })
    .catch(err => res.status(404).json(err))
})

// @route   POST api/label
// @desc    Create a label
// @access  Private
router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    const body = req.body
    const { errors, isValid } = await validateLabelInput(body)

    if (!isValid) {
      return res.status(400).json(errors)
    }

    // Get fields

    const newLabel = new Label({
      title: body.title,
      value: body.title,
      label: body.title,
      color: body.color
    })
    console.log(newLabel)
    newLabel
      .save()
      .then(label => {
        Label.find({ isDeleted: false })
          .exec()
          .then(labels => {
            res.json(labels)
          })
      })
      .catch(err => {
        console.log(err)
      })
  }
)

router.post(
  '/update/:id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const body = req.body

    Label.findOneAndUpdate(
      { _id: body.id },
      {
        $set: {
          title: body.title,
          value: body.title,
          label: body.title,
          color: body.color
        }
      },
      { new: true },
      (err, label) => {
        if (err) console.log('error: ', err)
        if (!err) {
          Label.find({ isDeleted: false })
            .sort('position')
            .then(labels => {
              res.json({
                labels: labels,
                label: label
              })
            })
            .catch(err => {
              console.log(err)
            })
        }
      }
    )
  }
)

// @route   GET api/labels/:id
// @desc    Get labels by id
// @access  Public
router.get('/:id', (req, res) => {
  const errors = {}
  Label.findOne({ _id: req.params.id, isDeleted: false })
    .populate('lastEdited.user', ['name'])
    .then(label => {
      if (!label) {
        errors.nolabel = 'Kein Beitrag mit dieser ID.'
        return res.status(404).json(errors.nolabel)
      }
      res.json(label)
    })
    .catch(err => {
      errors.label = 'Beitrag nicht gefunden.'
      return res.status(404).json(errors)
    })
})

// @route   GET api/label/toggle_online/:id/:state
// @desc    Toggle online label by id
// @access  Private
router.get(
  '/toggle_online/:id/:state',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    const errors = {}
    console.log(req.params.id, req.params.state)
    Label.findOneAndUpdate(
      { _id: req.params.id },
      { isOnline: req.params.state },
      { safe: true, new: true }
    )
      .then(async labelItem => {
        Label.find({ isDeleted: false })
          .sort('position')
          .then(labels => {
            res.json({
              labels: labels,
              label: labelItem
            })
          })
          .catch(err => {
            console.log(err)
          })
      })
      .catch(err => {
        console.log('nicht fund')
        errors.label = 'Beitrag nicht gefunden.'
        return res.status(404).json(errors)
      })
  }
)

// @route   GET api/label/delete/:id
// @desc    Delete label by id
// @access  Private
router.get(
  '/delete/:id',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    const errors = {}
    Label.findOneAndUpdate(
      { _id: req.params.id },
      { isDeleted: true },
      { safe: true, new: true }
    )
      .then(async () => {
        const labels = await Label.find({ isDeleted: false })
        res.json(labels)
      })
      .catch(err => {
        errors.label = 'Beitrag nicht gefunden.'
        return res.status(404).json(errors)
      })
  }
)

module.exports = router
