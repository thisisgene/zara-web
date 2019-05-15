const express = require('express')
const router = express.Router()
const passport = require('passport')
const marked = require('marked')

const multer = require('multer')
const multerS3 = require('multer-s3')
const aws = require('aws-sdk')
const Jimp = require('jimp')

const nodemailer = require('nodemailer')

const validateNewsInput = require('../../validation/news')
const validateTrainingInput = require('../../validation/training')

const User = require('../../models/User')
const { TrainingTeam, Training } = require('../../models/Training')

// @route   GET api/training/team
// @desc    Get all training team members
// @access  Public
router.get('/team', (req, res) => {
  console.log('getall')
  const errors = {}
  TrainingTeam.find({ isDeleted: false })
    .sort('position')
    .exec()
    .then(team => {
      console.log(team)
      res.json(team)
    })
    .catch(err => res.status(404).json(err))
})

// @route   POST api/training/team
// @desc    Create a training team member
// @access  Private
router.post(
  '/team',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    const body = req.body
    const { errors, isValid } = await validateNewsInput(body)

    if (!isValid) {
      return res.status(400).json(errors)
    }
    console.log('ohla')
    // Get fields
    const trainingTeamFields = { de: {}, en: {} }
    if (body.titleDE) {
      trainingTeamFields.de.title = body.titleDE
      trainingTeamFields.handle = body.titleDE.replace(/\s/g, '_')
    }
    if (body.titleEN) trainingTeamFields.en.title = body.titleEN
    trainingTeamFields.tag = body.tag
    trainingTeamFields.de.shortDescription = body.shortDescriptionDE
    trainingTeamFields.en.shortDescription = body.shortDescriptionEN
    trainingTeamFields.de.description = body.descriptionDE
    trainingTeamFields.en.description = body.descriptionEN

    const newTrainingTeam = new TrainingTeam({
      tag: trainingTeamFields.tag,
      date: body.date,
      handle: trainingTeamFields.handle,
      email: body.email,
      de: {
        title: trainingTeamFields.de.title,
        shortDescription: trainingTeamFields.de.shortDescription,
        description: trainingTeamFields.de.description
      },
      en: {
        title: trainingTeamFields.en.title,
        shortDescription: trainingTeamFields.en.shortDescription,
        description: trainingTeamFields.en.description
      }
    })
    console.log(newTrainingTeam)
    newTrainingTeam
      .save()
      .then(trainingTeamMember => {
        res.json(trainingTeamMember)
      })
      .catch(err => {
        console.log(err)
      })
  }
)

router.post(
  '/team/update/:id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const body = req.body
    // Get fields
    const trainingTeamFields = { de: {}, en: {} }
    if (body.titleDE) {
      trainingTeamFields.de.title = body.titleDE
      trainingTeamFields.handle = body.titleDE.replace(/\s/g, '_')
    }
    if (body.titleEN) trainingTeamFields.en.title = body.titleEN
    // if (body.filesDE) trainingTeamFields.selectedFilesDE = body.filesDE
    // if (body.filesEN) trainingTeamFields.selectedFilesEN = body.filesEN
    TrainingTeam.findOneAndUpdate(
      { _id: body.id },
      {
        $set: {
          tag: body.tag,
          date: body.date,
          handle: trainingTeamFields.handle,
          email: body.email,
          de: {
            title: trainingTeamFields.de.title
          },
          en: {
            title: trainingTeamFields.en.title
          },
          files: {
            de: body.filesDE,
            en: body.filesEN
          }
        }
      },
      { new: true },
      (err, teamMember) => {
        if (err) console.log('error: ', err)
        if (!err) {
          TrainingTeam.find({ isDeleted: false })
            .sort('position')
            .then(team => {
              res.json({ team: team, teamMember: teamMember })
            })
            .catch(err => {
              console.log(err)
            })
        }
      }
    )
  }
)

// @route   GET api/training/team/:id
// @desc    Get Training team member by id
// @access  Public
router.get('/team/:id', (req, res) => {
  const errors = {}
  User.findOne({ _id: req.params.id })
    .then(teamMember => {
      if (!teamMember) {
        errors.noteammember = 'Kein Beitrag mit dieser ID.'
        return res.status(404).json(errors.noteammember)
      }
      console.log(teamMember)
      res.json(teamMember)
    })
    .catch(err => {
      console.log(err)
      errors.teammember = 'Beitrag nicht gefunden.'
      return res.status(404).json(err)
    })
})

// @route   GET api/training/team/toggle_online/:id/:state
// @desc    Toggle online training team member by id
// @access  Private
router.get(
  '/team/toggle_online/:id/:state',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    const errors = {}
    console.log(req.params.id, req.params.state)
    TrainingTeam.findOneAndUpdate(
      { _id: req.params.id },
      { isOnline: req.params.state },
      { safe: true, new: true }
    )
      .then(async teamMember => {
        TrainingTeam.find({ isDeleted: false })
          .sort('position')
          .then(team => {
            res.json({ team: team, teamMember: teamMember })
          })
          .catch(err => {
            console.log(err)
          })
      })
      .catch(err => {
        console.log('nicht fund')
        errors.trainingteam = 'Beitrag nicht gefunden.'
        return res.status(404).json(errors)
      })
  }
)

// @route   GET api/training/team/delete/:id
// @desc    Delete training team member by id
// @access  Private
router.get(
  '/team/delete/:id',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    const errors = {}
    TrainingTeam.findOneAndUpdate(
      { _id: req.params.id },
      { isDeleted: true },
      { safe: true, new: true }
    )
      .then(async () => {
        const team = await TrainingTeam.find({ isDeleted: false })
        res.json(team)
      })
      .catch(err => {
        errors.teammember = 'Beitrag nicht gefunden.'
        return res.status(404).json(errors)
      })
  }
)

//////////////////////// TRAININGS

// @route   GET api/training/trainings
// @desc    Get all trainings
// @access  Public
router.get('/trainings', (req, res) => {
  const errors = {}
  Training.find({ isDeleted: false })
    .sort('position')
    .exec()
    .then(trainings => {
      res.json(trainings)
    })
    .catch(err => res.status(404).json(err))
})
// @route   GET api/training/trainingsSorted/:sortBy
// @desc    Get all trainings
// @access  Public
router.get('/trainingsSorted/:sortBy', (req, res) => {
  const errors = {}
  Training.find({ isDeleted: false })
    .sort(req.params.sortBy)
    .exec()
    .then(trainings => {
      res.json(trainings)
    })
    .catch(err => res.status(404).json(err))
})

// @route   POST api/training/trainings
// @desc    Create a training
// @access  Private
router.post(
  '/trainings',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    const body = req.body
    const { errors, isValid } = await validateTrainingInput(body)
    if (!isValid) {
      return res.status(400).json(errors)
    }
    const newTraining = new Training({
      title: body.title && body.title,
      handle: body.title && body.title.replace(/\s/g, '_'),

      tag: body.tag && body.tag,
      date: body.date && body.date,
      timeFrom: body.timeFrom && body.timeFrom,
      timeUntil: body.timeUntil && body.timeUntil,
      location: {
        title: body.location && body.location,
        address1: body.address1 && body.address1
      },
      fee: body.fee && body.fee,
      labels: body.labels && body.labels,
      assignedTrainer1: {
        id: body.assignedTrainer1 && body.assignedTrainer1.id,
        name: body.assignedTrainer1 && body.assignedTrainer1.name
      },
      assignedTrainer2: {
        id: body.assignedTrainer2 && body.assignedTrainer2.id,
        name: body.assignedTrainer2 && body.assignedTrainer2.name
      },
      emailSubject: body.emailSubject && body.emailSubject,
      pubContent: body.pubContent && body.pubContent,
      privContent: body.privContent && body.privContent
    })
    newTraining
      .save()
      .then(training => {
        res.json(training)
      })
      .catch(err => console.log(err))
  }
)

router.post(
  '/trainings/update/:id',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    const body = req.body
    console.log(body)
    const { errors, isValid } = await validateTrainingInput(body)
    if (!isValid) {
      return res.status(400).json(errors)
    }

    Training.findOneAndUpdate(
      { _id: body.id },
      {
        $set: {
          title: body.title && body.title,
          handle: body.title && body.title.replace(/\s/g, '_'),

          tag: body.tag && body.tag,
          date: body.date && body.date,
          timeFrom: body.timeFrom && body.timeFrom,
          timeUntil: body.timeUntil && body.timeUntil,
          location: {
            title: body.location,
            address1: body.address1
          },
          fee: body.fee && body.fee,
          labels: body.labels && body.labels,

          assignedTrainer1: {
            id: body.assignedTrainer1 && body.assignedTrainer1.id,
            name: body.assignedTrainer1 && body.assignedTrainer1.name
          },
          assignedTrainer2: {
            id: body.assignedTrainer2 && body.assignedTrainer2.id,
            name: body.assignedTrainer2 && body.assignedTrainer2.name
          },

          emailSubject: body.emailSubject && body.emailSubject,
          pubContent: body.pubContent && body.pubContent,
          pubContentMarked: body.pubContent && marked(body.pubContent),
          privContent: body.privContent && body.privContent,
          privContentMarked: body.privContent && marked(body.privContent)
        }
      },
      { new: true },
      (err, training) => {
        if (err) console.log('error: ', err)
        if (!err) {
          Training.find({ isDeleted: false })
            .sort('position')
            .then(trainings => {
              res.json({ trainings: trainings, training: training })
            })
            .catch(err => {
              console.log(err)
            })
        }
      }
    )
  }
)

router.post(
  '/trainings/set_interested_trainer/:id',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    const body = req.body
    console.log(body)

    Training.findOneAndUpdate(
      { _id: body.id },
      {
        $set: {
          interestedTrainers: body.interestedTrainers && body.interestedTrainers
        }
      },
      { new: true },
      (err, training) => {
        if (err) console.log('error: ', err)
        if (!err) {
          Training.find({ isDeleted: false })
            .sort('position')
            .then(trainings => {
              res.json({ trainings: trainings, training: training })
            })
            .catch(err => {
              console.log(err)
            })
        }
      }
    )
  }
)

// @route   GET api/training/trainings/:id
// @desc    Get Training by id
// @access  Public
router.get('/trainings/:id', (req, res) => {
  const errors = {}
  Training.findOne({ _id: req.params.id, isDeleted: false })
    .populate('lastEdited.user', ['name'])
    .then(training => {
      if (!training) {
        errors.notraining = 'Kein Beitrag mit dieser ID.'
        return res.status(404).json(errors.notraining)
      }
      res.json(training)
    })
    .catch(err => {
      errors.training = 'Beitrag nicht gefunden.'
      return res.status(404).json(errors)
    })
})

// @route   GET api/training/training/toggle_online/:id/:state
// @desc    Toggle online training by id
// @access  Private
router.get(
  '/trainings/toggle_online/:id/:state',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    const errors = {}
    console.log(req.params.id, req.params.state)
    Training.findOneAndUpdate(
      { _id: req.params.id },
      { isOnline: req.params.state },
      { safe: true, new: true }
    )
      .then(async training => {
        Training.find({ isDeleted: false })
          .sort('position')
          .then(trainings => {
            res.json({ trainings: trainings, training: training })
          })
          .catch(err => {
            console.log(err)
          })
      })
      .catch(err => {
        console.log('nicht fund')
        errors.training = 'Beitrag nicht gefunden.'
        return res.status(404).json(errors)
      })
  }
)

// @route   GET api/training/trainings/delete/:id
// @desc    Delete training by id
// @access  Private
router.get(
  '/trainings/delete/:id',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    const errors = {}
    Training.findOneAndUpdate(
      { _id: req.params.id },
      { isDeleted: true },
      { safe: true, new: true }
    )
      .then(async () => {
        const trainings = await Training.find({ isDeleted: false })
        res.json(trainings)
      })
      .catch(err => {
        errors.trainings = 'Beitrag nicht gefunden.'
        return res.status(404).json(errors)
      })
  }
)

///////////////////////// HONORARE

// ADDITIONAL FEES
router.post(
  '/trainings/additional_fees',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    const body = req.body
    console.log(body)
    const { errors, isValid } = await validateTrainingInput(body)
    // if (!isValid) {
    //   return res.status(400).json(errors)
    // }

    Training.findOne({ _id: body.trainingId })
      .then(training => {
        console.log(training.assignedTrainer1, training)
        if (
          training.assignedTrainer1 &&
          training.assignedTrainer1 === body.userId
        ) {
          console.log('tr1')
          training.assignedTrainer1.additionalFees.push({
            description: body.addFeeDescription,
            amount: body.addFeeAmount
          })
        } else if (
          training.assignedTrainer2 &&
          training.assignedTrainer2.id === body.userId
        ) {
          console.log('tr2')
          training.assignedTrainer2.additionalFees.push({
            description: body.addFeeDescription,
            amount: body.addFeeAmount
          })
        }
        training.save(() => {
          Training.find({ isDeleted: false })
            .sort('date')
            .then(trainings => {
              res.json({ trainings: trainings, training: training })
            })
            .catch(err => {
              console.log(err)
            })
        })
      })
      .catch(err => console.log(err))
  }
)

router.post(
  '/additional_fees/delete/',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    const body = req.body
    Training.findOne({ _id: req.body.trainingId }).then(training => {
      if (
        training.assignedTrainer1 &&
        training.assignedTrainer1.id === body.userId
      ) {
        training.assignedTrainer1.additionalFees.pull(body.feeId)
      } else if (
        training.assignedTrainer2 &&
        training.assignedTrainer2.id === body.userId
      ) {
        training.assignedTrainer2.additionalFees.pull(body.feeId)
      }
      training.save().then(training => {
        Training.find({ isDeleted: false })
          .sort('date')
          .then(trainings => {
            res.json({ trainings: trainings, training: training })
          })
          .catch(err => {
            console.log(err)
          })
      })
    })
  }
)

module.exports = router
