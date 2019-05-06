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

const Jahresbericht = require('../../models/Jahresbericht')

// @route   GET api/jahresberichte
// @desc    Get all jahresberichte
// @access  Public
router.get('/', (req, res) => {
  console.log('getall')
  const errors = {}
  Jahresbericht.find({ isDeleted: false })
    .sort('position')
    .exec()
    .then(jahresberichte => {
      res.json(jahresberichte)
    })
    .catch(err => res.status(404).json(err))
})

// @route   POST api/jahresberichte
// @desc    Create a jahresbericht
// @access  Private
router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    const body = req.body
    const { errors, isValid } = await validateNewsInput(body)

    if (!isValid) {
      return res.status(400).json(errors)
    }

    // Get fields
    const jahresberichtFields = { de: {}, en: {} }
    if (body.titleDE) {
      jahresberichtFields.de.title = body.titleDE
      jahresberichtFields.handle = body.titleDE.replace(/\s/g, '_')
    }
    if (body.titleEN) jahresberichtFields.en.title = body.titleEN
    jahresberichtFields.tag = body.tag
    jahresberichtFields.de.shortDescription = body.shortDescriptionDE
    jahresberichtFields.en.shortDescription = body.shortDescriptionEN
    jahresberichtFields.de.description = body.descriptionDE
    jahresberichtFields.en.description = body.descriptionEN

    const newJahresbericht = new Jahresbericht({
      tag: jahresberichtFields.tag,
      date: body.date,
      handle: jahresberichtFields.handle,
      de: {
        title: jahresberichtFields.de.title,
        shortDescription: jahresberichtFields.de.shortDescription,
        description: jahresberichtFields.de.description
      },
      en: {
        title: jahresberichtFields.en.title,
        shortDescription: jahresberichtFields.en.shortDescription,
        description: jahresberichtFields.en.description
      }
    })
    console.log(newJahresbericht)
    newJahresbericht
      .save()
      .then(jahresbericht => {
        res.json(jahresbericht)
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
    // Get fields
    const jahresberichtFields = { de: {}, en: {} }
    if (body.titleDE) {
      jahresberichtFields.de.title = body.titleDE
      jahresberichtFields.handle = body.titleDE.replace(/\s/g, '_')
    }
    if (body.titleEN) jahresberichtFields.en.title = body.titleEN
    // if (body.filesDE) jahresberichtFields.selectedFilesDE = body.filesDE
    // if (body.filesEN) jahresberichtFields.selectedFilesEN = body.filesEN
    Jahresbericht.findOneAndUpdate(
      { _id: body.id },
      {
        $set: {
          tag: body.tag,
          date: body.date,
          handle: jahresberichtFields.handle,
          de: {
            title: jahresberichtFields.de.title
          },
          en: {
            title: jahresberichtFields.en.title
          },
          files: {
            de: body.filesDE,
            en: body.filesEN
          }
        }
      },
      { new: true },
      (err, jahresbericht) => {
        if (err) console.log('error: ', err)
        if (!err) {
          Jahresbericht.find({ isDeleted: false })
            .sort('position')
            .then(jahresberichte => {
              res.json({
                jahresberichte: jahresberichte,
                jahresbericht: jahresbericht
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

// @route   GET api/jahresberichte/:id
// @desc    Get jahresberichte by id
// @access  Public
router.get('/:id', (req, res) => {
  const errors = {}
  Jahresbericht.findOne({ _id: req.params.id, isDeleted: false })
    .populate('lastEdited.user', ['name'])
    .then(jahresbericht => {
      if (!jahresbericht) {
        errors.nojahresbericht = 'Kein Beitrag mit dieser ID.'
        return res.status(404).json(errors.nojahresbericht)
      }
      res.json(jahresbericht)
    })
    .catch(err => {
      errors.jahresbericht = 'Beitrag nicht gefunden.'
      return res.status(404).json(errors)
    })
})

// @route   GET api/jahresbericht/toggle_online/:id/:state
// @desc    Toggle online jahresbericht by id
// @access  Private
router.get(
  '/toggle_online/:id/:state',
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
        Jahresbericht.find({ isDeleted: false })
          .sort('position')
          .then(jahresberichte => {
            res.json({
              jahresberichte: jahresberichte,
              jahresbericht: jahresberichtItem
            })
          })
          .catch(err => {
            console.log(err)
          })
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
  '/delete/:id',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    const errors = {}
    Jahresbericht.findOneAndUpdate(
      { _id: req.params.id },
      { isDeleted: true },
      { safe: true, new: true }
    )
      .then(async () => {
        const jahresberichte = await Jahresbericht.find({ isDeleted: false })
        res.json(jahresberichte)
      })
      .catch(err => {
        errors.jahresbericht = 'Beitrag nicht gefunden.'
        return res.status(404).json(errors)
      })
  }
)

module.exports = router
