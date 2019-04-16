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

const TrainingTeam = require('../../models/Training')

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
    newTrainingTeam.save().then(trainingTeamMember => {
      res.json(trainingTeamMember)
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
      (err, team) => {
        if (err) console.log('error: ', err)
        if (!err) {
          res.json(team)
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
  TrainingTeam.findOne({ _id: req.params.id, isDeleted: false })
    .populate('lastEdited.user', ['name'])
    .then(teamMember => {
      if (!teamMember) {
        errors.noteammember = 'Kein Beitrag mit dieser ID.'
        return res.status(404).json(errors.noteammember)
      }
      res.json(teamMember)
    })
    .catch(err => {
      errors.teammember = 'Beitrag nicht gefunden.'
      return res.status(404).json(errors)
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
    Jahresbericht.findOneAndUpdate(
      { _id: req.params.id },
      { isOnline: req.params.state },
      { safe: true, new: true }
    )
      .then(async jahresberichtItem => {
        console.log(jahresberichtItem)
        res.json(jahresberichtItem)
      })
      .catch(err => {
        console.log('nicht fund')
        errors.jahresbericht = 'Beitrag nicht gefunden.'
        return res.status(404).json(errors)
      })
  }
)

// @route   GET api/jahresbericht/delete/:id
// @desc    Delete jahresbericht by id
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

module.exports = router
