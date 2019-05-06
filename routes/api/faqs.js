const express = require('express')
const router = express.Router()
const passport = require('passport')
const marked = require('marked')

const multer = require('multer')
const multerS3 = require('multer-s3')
const aws = require('aws-sdk')
const Jimp = require('jimp')

const nodemailer = require('nodemailer')

const validateFaqInput = require('../../validation/faqs')

const Faq = require('../../models/Faq')

const Report = require('../../models/Report')

// @route   GET api/faqs
// @desc    Get all faqs
// @access  Public
router.get('/', (req, res) => {
  // res.json({ msg: 'Jubidu' })
  console.log('getall')
  const errors = {}
  Faq.find({ isDeleted: false })
    .sort('position')
    .exec()
    .then(faqs => {
      // if (faqs === undefined || faqs.length === 0) {
      //   return res.json({ nofaqs: 'Noch keine Beiträge.' })
      // }
      res.json(faqs)
    })
    .catch(err => res.status(404).json(err))
})

// @route   POST api/faqs
// @desc    Create a faqs item
// @access  Private
router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    const body = req.body
    const { errors, isValid } = await validateFaqInput(body)

    if (!isValid) {
      return res.status(400).json(errors)
    }
    console.log()
    const newFaqItem = new Faq({
      title: body.title && body.title,
      handle: body.title && body.title.replace(/\s/g, '_'),

      tags: body.tags && body.tags,
      de: {
        question: body.questionDE && body.questionDE,
        answer: body.answerDE && body.answerDE
      },
      en: {
        question: body.questionEN && body.questionEN,
        answer: body.answerEN && body.answerEN
      }
    })
    newFaqItem
      .save()
      .then(faq => {
        res.json(faq)
      })
      .catch(err => {
        console.log(err)
      })
  }
)

// @route   GET api/faqs/:id
// @desc    Get faqs by id
// @access  Public
router.get('/:id', (req, res) => {
  const errors = {}
  Faq.findOne({ _id: req.params.id, isDeleted: false })
    .populate('lastEdited.user', ['name'])
    .then(faq => {
      if (!faq) {
        errors.nofaqs = 'Kein Beitrag mit dieser ID.'
        return res.status(404).json(errors.nofaqs)
      }
      res.json(faq)
    })
    .catch(err => {
      errors.faqs = 'Beitrag nicht gefunden.'
      return res.status(404).json(errors)
    })
})

// @route   GET api/faqs/get_by/:property/:value
// @desc    Get faqs by Property
// @access  Public
router.get('/get_by/:property/:value', (req, res) => {
  const errors = {}
  Faq.find({
    [req.params.property]: req.params.value,
    isDeleted: false,
    isOnline: true
  })
    .populate('lastEdited.user', ['name'])
    .then(faq => {
      if (!faq) {
        errors.nofaqs = 'Kein Beitrag mit dieser ID.'
        return res.status(404).json(errors.nofaqs)
      }
      res.json(faq)
    })
    .catch(err => {
      errors.faqs = 'Beitrag nicht gefunden.'
      return res.status(404).json(errors)
    })
})

// @route   POST api/faqs/update/:id
// @desc    Update faqs by id
// @access  Private
router.post(
  '/update/:id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const body = req.body

    // Faq.findById(body.id).then(faq => {
    //   console.log(faq)
    // })
    // const updatedFaq = new Faq({})
    console.log(body.answerDE)
    Faq.findOneAndUpdate(
      { _id: body.id },
      {
        $set: {
          title: body.title && body.title,
          handle: body.title && body.title.replace(/\s/g, '_'),

          tags: body.tags && body.tags,
          de: {
            question: body.questionDE && body.questionDE,
            answer: body.answerDE && body.answerDE
          },
          en: {
            question: body.questionEN && body.questionEN,
            answer: body.answerEN && body.answerEN
          }
        }
      },
      { new: true },
      (err, faq) => {
        if (err) console.log('error: ', err)
        if (!err) {
          Faq.find({ isDeleted: false })
            .sort('position')
            .then(faqs => {
              res.json({ faqs: faqs, faq: faq })
            })
            .catch(err => {
              console.log(err)
            })
        }
      }
    )
  }
)

// @route   GET api/faqs/toggle_online/:id/:state
// @desc    Toggle online faqs by id
// @access  Private
router.get(
  '/toggle_online/:id/:state',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    const errors = {}
    console.log(req.params.id, req.params.state)
    Faq.findOneAndUpdate(
      { _id: req.params.id },
      { isOnline: req.params.state },
      { safe: true, new: true }
    )
      .then(async faq => {
        Faq.find({ isDeleted: false })
          .sort('position')
          .then(faqs => {
            res.json({ faqs: faqs, faq: faq })
          })
          .catch(err => {
            console.log(err)
          })
      })
      .catch(err => {
        console.log('nicht fund')
        errors.faqs = 'Beitrag nicht gefunden.'
        return res.status(404).json(errors)
      })
  }
)

// @route   GET api/faqs/delete/:id
// @desc    Delete faqs by id
// @access  Private
router.get(
  '/delete/:id',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    const errors = {}
    console.log(req.params.id)
    Faq.findOneAndUpdate(
      { _id: req.params.id },
      { isDeleted: true },
      { safe: true, new: true }
    )
      .then(async faq => {
        console.log(faq)
        const faqs = await Faq.find({ isDeleted: false })
        res.json(faqs)
      })
      .catch(err => {
        console.log('nicht fund')
        errors.faqs = 'Beitrag nicht gefunden.'
        return res.status(404).json(errors)
      })
  }
)

module.exports = router
