const express = require('express')
const router = express.Router()
const passport = require('passport')
const marked = require('marked')

const validateCarouselInput = require('../../validation/news')

const Carousel = require('../../models/Carousel')

// @route   GET api/carousel
// @desc    Get all carousel
// @access  Public
router.get('/', (req, res) => {
  console.log('getall carousel')
  const errors = {}
  Carousel.find({ isDeleted: false })
    .sort('position')
    .exec()
    .then(carousel => {
      res.json(carousel)
    })
    .catch(err => res.status(404).json(err))
})

// @route   POST api/carousel
// @desc    Create a carousel
// @access  Private
router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    const body = req.body

    // Get fields
    console.log('title: ', body.title)

    const newCarousel = new Carousel({
      title: body.title
    })
    newCarousel
      .save()
      .then(carousel => {
        // res.json(carousel)
        Carousel.find({ isDeleted: false })
          .exec()
          .then(carousels => {
            res.json(carousels)
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

    Carousel.findOneAndUpdate(
      { _id: body.id },
      {
        $set: {
          title: body.title,
          imageAsBackground: body.imageAsBackground,
          titleImage: {
            originalName: body.titleImage,
            imageId: body.imageId,
            category: body.imageCategory
          },
          mainLink: body.mainLink,
          linkIsExternal: body.linkIsExternal
        }
      },
      { new: true },
      (err, carousel) => {
        if (err) console.log('error: ', err)
        if (!err) {
          Carousel.find({ isDeleted: false })
            .sort('position')
            .then(carousels => {
              res.json({
                carousels: carousels,
                carousel: carousel
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

// @route   GET api/carousels/:id
// @desc    Get carousels by id
// @access  Public
router.get('/:id', (req, res) => {
  const errors = {}
  Carousel.findOne({ _id: req.params.id, isDeleted: false })
    .then(carousel => {
      if (!carousel) {
        errors.nocarousel = 'Kein Beitrag mit dieser ID.'
        return res.status(404).json(errors.nocarousel)
      }
      console.log('carousel: ', carousel)
      res.json(carousel)
    })
    .catch(err => {
      errors.carousel = 'Beitrag nicht gefunden.'
      return res.status(404).json(errors)
    })
})

// @route   GET api/carousel/toggle_online/:id/:state
// @desc    Toggle online carousel by id
// @access  Private
router.get(
  '/toggle_online/:id/:state',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    const errors = {}
    console.log(req.params.id, req.params.state)
    Carousel.findOneAndUpdate(
      { _id: req.params.id },
      { isOnline: req.params.state },
      { safe: true, new: true }
    )
      .then(async carouselItem => {
        Carousel.find({ isDeleted: false })
          .sort('position')
          .then(carousels => {
            res.json({
              carousels: carousels,
              carousel: carouselItem
            })
          })
          .catch(err => {
            console.log(err)
          })
      })
      .catch(err => {
        console.log('nicht fund')
        errors.carousel = 'Beitrag nicht gefunden.'
        return res.status(404).json(errors)
      })
  }
)

// @route   GET api/carousel/delete/:id
// @desc    Delete carousel by id
// @access  Private
router.get(
  '/delete/:id',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    const errors = {}
    Carousel.findOneAndUpdate(
      { _id: req.params.id },
      { isDeleted: true },
      { safe: true, new: true }
    )
      .then(async () => {
        const carousels = await Carousel.find({ isDeleted: false })
        res.json(carousels)
      })
      .catch(err => {
        errors.carousel = 'Beitrag nicht gefunden.'
        return res.status(404).json(errors)
      })
  }
)

module.exports = router
