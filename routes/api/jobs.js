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

const Job = require('../../models/Job')

// @route   GET api/jobs
// @desc    Get all jobs
// @access  Public
router.get('/', (req, res) => {
  console.log('getall')
  const errors = {}
  Job.find({ isDeleted: false })
    .sort('position')
    .exec()
    .then(jobs => {
      res.json(jobs)
    })
    .catch(err => res.status(404).json(err))
})

// @route   GET api/jobs/getbyprop/:prop
// @desc    Get all jobs by Prop
// @access  Public
router.get('/getbyprop/:prop', (req, res) => {
  console.log('getallbyprop')
  const errors = {}
  Job.find({ isDeleted: false, isOnline: true, tag: req.params.prop })
    .sort('position')
    .exec()
    .then(jobs => {
      res.json(jobs)
    })
    .catch(err => res.status(404).json(err))
})

// @route   POST api/jobs
// @desc    Create a job
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
    const jobFields = { de: {}, en: {} }
    if (body.titleDE) {
      jobFields.de.title = body.titleDE
      jobFields.handle = body.titleDE.replace(/\s/g, '_')
    }
    if (body.titleEN) jobFields.en.title = body.titleEN
    jobFields.tag = body.tag
    jobFields.de.shortDescription = body.shortDescriptionDE
    jobFields.en.shortDescription = body.shortDescriptionEN
    jobFields.de.description = body.descriptionDE
    jobFields.en.description = body.descriptionEN

    const newJob = new Job({
      tag: jobFields.tag,
      date: body.date,
      handle: jobFields.handle,
      de: {
        title: jobFields.de.title,
        shortDescription: jobFields.de.shortDescription,
        description: jobFields.de.description,
      },
      en: {
        title: jobFields.en.title,
        shortDescription: jobFields.en.shortDescription,
        description: jobFields.en.description,
      },
    })
    console.log(newJob)
    newJob
      .save()
      .then(job => {
        res.json(job)
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
    console.log(body)
    // Get fields
    const jobFields = { de: {}, en: {} }
    if (body.titleDE) {
      jobFields.de.title = body.titleDE
      jobFields.handle = body.titleDE.replace(/\s/g, '_')
    }
    if (body.titleEN) jobFields.en.title = body.titleEN
    // if (body.filesDE) jobFields.selectedFilesDE = body.filesDE
    // if (body.filesEN) jobFields.selectedFilesEN = body.filesEN
    Job.findOneAndUpdate(
      { _id: body.id },
      {
        $set: {
          tag: body.tag,
          date: body.date,
          handle: jobFields.handle,
          de: {
            title: jobFields.de.title,
            description: body.descriptionDE,
          },
          en: {
            title: jobFields.en.title,
            description: body.descriptionEN,
          },
          files: {
            de: body.filesDE,
            en: body.filesEN,
          },
          images: {
            de: body.imagesDE,
            en: body.imagesEN,
          },
          toOrder: body.toOrder,
        },
      },
      { new: true },
      (err, job) => {
        if (err) console.log('error: ', err)
        if (!err) {
          Job.find({ isDeleted: false })
            .sort('position')
            .then(jobs => {
              res.json({
                jobs: jobs,
                job: job,
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

// @route   GET api/jobs/:id
// @desc    Get jobs by id
// @access  Public
router.get('/:id', (req, res) => {
  const errors = {}
  Job.findOne({ _id: req.params.id, isDeleted: false })
    .populate('lastEdited.user', ['name'])
    .then(job => {
      if (!job) {
        errors.nojob = 'Kein Beitrag mit dieser ID.'
        return res.status(404).json(errors.nojob)
      }
      res.json(job)
    })
    .catch(err => {
      errors.job = 'Beitrag nicht gefunden.'
      return res.status(404).json(errors)
    })
})

// @route   GET api/job/toggle_online/:id/:state
// @desc    Toggle online job by id
// @access  Private
router.get(
  '/toggle_online/:id/:state',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    const errors = {}
    console.log(req.params.id, req.params.state)
    Job.findOneAndUpdate(
      { _id: req.params.id },
      { isOnline: req.params.state },
      { safe: true, new: true }
    )
      .then(async jobItem => {
        Job.find({ isDeleted: false })
          .sort('position')
          .then(jobs => {
            res.json({
              jobs: jobs,
              job: jobItem,
            })
          })
          .catch(err => {
            console.log(err)
          })
      })
      .catch(err => {
        console.log('nicht fund')
        errors.job = 'Beitrag nicht gefunden.'
        return res.status(404).json(errors)
      })
  }
)

// @route   GET api/job/delete/:id
// @desc    Delete job by id
// @access  Private
router.get(
  '/delete/:id',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    const errors = {}
    Job.findOneAndUpdate(
      { _id: req.params.id },
      { isDeleted: true },
      { safe: true, new: true }
    )
      .then(async () => {
        const jobs = await Job.find({ isDeleted: false })
        res.json(jobs)
      })
      .catch(err => {
        errors.job = 'Beitrag nicht gefunden.'
        return res.status(404).json(errors)
      })
  }
)

module.exports = router
