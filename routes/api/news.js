const express = require('express')
const router = express.Router()
const passport = require('passport')
const marked = require('marked')

const multer = require('multer')
const multerS3 = require('multer-s3')
const aws = require('aws-sdk')
const Jimp = require('jimp')

const nodemailer = require('nodemailer')

const validateOrderInput = require('../../validation/order')

const News = require('../../models/News')

const Report = require('../../models/Report')

// @route   GET api/news
// @desc    Get all news
// @access  Public
router.get('/', (req, res) => {
  // res.json({ msg: 'Jubidu' })
  console.log('getall')
  const errors = {}
  News.find({ isDeleted: false })
    .sort('position')
    .exec()
    .then(news => {
      if (news === undefined || news.length === 0) {
        return res.json({ nonews: 'Noch keine Beiträge.' })
      }
      res.json(news)
    })
    .catch(err => res.status(404).json(err))
})

// @route   POST api/news
// @desc    Create a news item
// @access  Private
router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    const body = req.body
    // Get fields
    const newsFields = {}
    if (body.titleDE) {
      newsFields.titleDE = body.titleDE
      newsFields.handle = body.titleDE.replace(/\s/g, '_')
    }
    if (body.titleEN) newsFields.titleEN = body.titleEN
    if (body.descriptionDE) newsFields.descriptionDE = body.descriptionDE
    if (body.descriptionEN) newsFields.descriptionEN = body.descriptionEN

    const newNewsItem = new News(newsFields)
    newNewsItem.save(async newsItem => {
      console.log(newsFields)
      const news = await News.find()
      res.json(news)
    })
  }
)

// @route   GET api/news/:id
// @desc    Get news by id
// @access  Public
router.get('/:id', (req, res) => {
  const errors = {}
  News.findOne({ _id: req.params.id, isDeleted: false })
    .populate('lastEdited.user', ['name'])
    .then(newsItem => {
      if (!newsItem) {
        errors.nonews = 'Kein Beitrag mit dieser ID.'
        return res.status(404).json(errors.nonews)
      }
      res.json(newsItem)
    })
    .catch(err => {
      errors.news = 'Beitrag nicht gefunden.'
      return res.status(404).json(errors)
    })
})

module.exports = router
