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
      // if (news === undefined || news.length === 0) {
      //   return res.json({ nonews: 'Noch keine Beiträge.' })
      // }
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
    const { errors, isValid } = await validateNewsInput(body)

    if (!isValid) {
      return res.status(400).json(errors)
    }

    // Get fields
    const newsFields = { de: {}, en: {} }
    if (body.titleDE) {
      newsFields.de.title = body.titleDE
      newsFields.handle = body.titleDE.replace(/\s/g, '_')
    }
    if (body.titleEN) newsFields.en.title = body.titleEN
    newsFields.tag = body.tag
    newsFields.de.shortDescription = body.shortDescriptionDE
    newsFields.en.shortDescription = body.shortDescriptionEN
    newsFields.de.description = body.descriptionDE
    newsFields.en.description = body.descriptionEN

    const newNewsItem = new News({
      tag: newsFields.tag,
      dateUnformatted: body.date,
      handle: newsFields.handle,
      de: {
        title: newsFields.de.title,
        shortDescription: newsFields.de.shortDescription,
        description: newsFields.de.description
      },
      en: {
        title: newsFields.en.title,
        shortDescription: newsFields.en.shortDescription,
        description: newsFields.en.description
      }
    })
    console.log(newNewsItem)
    newNewsItem.save().then(newsItem => {
      console.log(newsItem)
      res.json(newsItem)
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

// @route   POST api/news/update/:id
// @desc    Update news by id
// @access  Private
router.post(
  '/update/:id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    console.log(req.body)
    const body = req.body
    // Get fields
    const newsFields = { de: {}, en: {} }
    if (body.titleDE) {
      newsFields.de.title = body.titleDE
      newsFields.handle = body.titleDE.replace(/\s/g, '_')
    }
    if (body.titleEN) newsFields.en.title = body.titleEN
    newsFields.de.shortDescription = body.shortDescriptionDE
    newsFields.en.shortDescription = body.shortDescriptionEN
    newsFields.de.description = body.descriptionDE
    newsFields.en.description = body.descriptionEN

    // News.findById(body.id).then(newsItem => {
    //   console.log(newsItem)
    // })
    // const updatedNews = new News({})
    News.findOneAndUpdate(
      { _id: body.id },
      {
        $set: {
          tag: body.tag,
          dateUnformatted: body.date,
          handle: newsFields.handle,
          de: {
            title: newsFields.de.title,
            shortDescription: newsFields.de.shortDescription,
            description: newsFields.de.description
          },
          en: {
            title: newsFields.en.title,
            shortDescription: newsFields.en.shortDescription,
            description: newsFields.en.description
          }
        }
      },
      { new: true },
      (err, newsItem) => {
        if (err) console.log('error: ', err)
        if (!err) {
          console.log('news', newsItem)
          res.json(newsItem)
        }
      }
    )
  }
)

// @route   GET api/news/toggle_online/:id/:state
// @desc    Toggle online news by id
// @access  Private
router.get(
  '/toggle_online/:id/:state',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    const errors = {}
    console.log(req.params.id, req.params.state)
    News.findOneAndUpdate(
      { _id: req.params.id },
      { isOnline: req.params.state },
      { safe: true, new: true }
    )
      .then(async newsItem => {
        console.log(newsItem)
        res.json(newsItem)
      })
      .catch(err => {
        console.log('nicht fund')
        errors.news = 'Beitrag nicht gefunden.'
        return res.status(404).json(errors)
      })
  }
)

// @route   GET api/news/delete/:id
// @desc    Delete news by id
// @access  Private
router.get(
  '/delete/:id',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    const errors = {}
    console.log(req.params.id)
    News.findOneAndUpdate(
      { _id: req.params.id },
      { isDeleted: true },
      { safe: true, new: true }
    )
      .then(async newsItem => {
        console.log(newsItem)
        const news = await News.find({ isDeleted: false })
        res.json(news)
      })
      .catch(err => {
        console.log('nicht fund')
        errors.news = 'Beitrag nicht gefunden.'
        return res.status(404).json(errors)
      })
  }
)

module.exports = router
