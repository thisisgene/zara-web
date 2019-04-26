const express = require('express')
const router = express.Router()
const passport = require('passport')
const marked = require('marked')

// const multer = require('multer')
// const multerS3 = require('multer-s3')
// const aws = require('aws-sdk')
// const Jimp = require('jimp')

const validateTeamInput = require('../../validation/team')

const Team = require('../../models/Team')

// @route   GET api/team
// @desc    Get all team
// @access  Public
router.get('/', (req, res) => {
  // res.json({ msg: 'Jubidu' })
  console.log('getall')
  const errors = {}
  Team.find({ isDeleted: false })
    .sort('position')
    .exec()
    .then(team => {
      // if (team === undefined || team.length === 0) {
      //   return res.json({ noteam: 'Noch keine Beiträge.' })
      // }
      res.json(team)
    })
    .catch(err => res.status(404).json(err))
})

// @route   POST api/team
// @desc    Create a team member
// @access  Private
router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    const body = req.body
    const { errors, isValid } = await validateTeamInput(body)

    if (!isValid) {
      return res.status(400).json(errors)
    }

    // Get fields
    const teamFields = { de: {}, en: {} }
    if (body.titleDE) {
      teamFields.de.title = body.titleDE
      teamFields.handle = body.titleDE.replace(/\s/g, '_')
    }
    if (body.titleEN) teamFields.en.title = body.titleEN
    teamFields.tag = body.tag
    teamFields.de.description = body.descriptionDE
    teamFields.en.description = body.descriptionEN

    const newTeamItem = new Team({
      tag: teamFields.tag,
      subCategory: body.subCategory && body.subCategory,
      date: body.date,
      handle: teamFields.handle,
      de: {
        title: teamFields.de.title,
        description: teamFields.de.description
      },
      en: {
        title: teamFields.en.title,
        description: teamFields.en.description
      }
    })
    console.log(newTeamItem)
    newTeamItem.save().then(teamMember => {
      console.log(teamMember)
      res.json(teamMember)
    })
  }
)

// @route   GET api/team/:id
// @desc    Get team by id
// @access  Public
router.get('/:id', (req, res) => {
  const errors = {}
  Team.findOne({ _id: req.params.id, isDeleted: false })
    .populate('lastEdited.user', ['name'])
    .then(teamMember => {
      if (!teamMember) {
        errors.noteam = 'Kein Beitrag mit dieser ID.'
        return res.status(404).json(errors.noteam)
      }
      res.json(teamMember)
    })
    .catch(err => {
      errors.team = 'Beitrag nicht gefunden.'
      return res.status(404).json(errors)
    })
})

// @route   GET api/team/get_by/:property/:value
// @desc    Get team by Property
// @access  Public
router.get('/get_by/:property/:value', (req, res) => {
  const errors = {}
  Team.find({
    [req.params.property]: req.params.value,
    isDeleted: false,
    isOnline: true
  })
    .populate('lastEdited.user', ['name'])
    .then(teamMember => {
      if (!teamMember) {
        errors.noteam = 'Kein Beitrag mit dieser ID.'
        return res.status(404).json(errors.noteam)
      }
      res.json(teamMember)
    })
    .catch(err => {
      errors.team = 'Beitrag nicht gefunden.'
      return res.status(404).json(errors)
    })
})

// @route   POST api/team/update/:id
// @desc    Update team by id
// @access  Private
router.post(
  '/update/:id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    console.log(req.body)
    const body = req.body
    // Get fields
    const teamFields = { de: {}, en: {} }
    if (body.titleDE) {
      teamFields.de.title = body.titleDE
      teamFields.handle = body.titleDE.replace(/\s/g, '_')
    }
    if (body.titleEN) teamFields.en.title = body.titleEN
    teamFields.de.description = body.descriptionDE
    teamFields.en.description = body.descriptionEN

    // Team.findById(body.id).then(teamMember => {
    //   console.log(teamMember)
    // })
    // const updatedTeam = new Team({})
    Team.findOneAndUpdate(
      { _id: body.id },
      {
        $set: {
          tag: body.tag,
          subCategory: body.subCategory && body.subCategory,
          date: body.date,
          handle: teamFields.handle,
          titleImage: {
            originalName: body.titleImage,
            imageId: body.imageId,
            category: body.imageCategory
          },
          imageSide: body.imageSide,
          imageAlign: body.imageAlign,
          size: body.size,
          de: {
            title: teamFields.de.title,
            description: teamFields.de.description
          },
          en: {
            title: teamFields.en.title,
            description: teamFields.en.description
          }
        }
      },
      { new: true },
      (err, teamMember) => {
        if (err) console.log('error: ', err)
        if (!err) {
          Team.find({ isDeleted: false })
            .sort('position')
            .then(team => {
              res.json({ team: team, teamMember: teamMember })
            })
        }
      }
    )
  }
)

// @route   GET api/team/toggle_online/:id/:state
// @desc    Toggle online team by id
// @access  Private
router.get(
  '/toggle_online/:id/:state',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    const errors = {}
    console.log(req.params.id, req.params.state)
    Team.findOneAndUpdate(
      { _id: req.params.id },
      { isOnline: req.params.state },
      { safe: true, new: true }
    )
      .then(async teamMember => {
        Team.find({ isDeleted: false })
          .sort('position')
          .then(team => {
            res.json({ team: team, teamMember: teamMember })
          })
      })
      .catch(err => {
        console.log('nicht fund')
        errors.team = 'Beitrag nicht gefunden.'
        return res.status(404).json(errors)
      })
  }
)

// @route   GET api/team/delete/:id
// @desc    Delete team by id
// @access  Private
router.get(
  '/delete/:id',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    const errors = {}
    console.log(req.params.id)
    Team.findOneAndUpdate(
      { _id: req.params.id },
      { isDeleted: true },
      { safe: true, new: true }
    )
      .then(async teamMember => {
        console.log(teamMember)
        const team = await Team.find({ isDeleted: false })
        res.json(team)
      })
      .catch(err => {
        console.log('nicht fund')
        errors.team = 'Beitrag nicht gefunden.'
        return res.status(404).json(errors)
      })
  }
)

module.exports = router
