const express = require('express')
const router = express.Router()
const User = require('../../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const keys = require('../../config/keys')
const passport = require('passport')

// Load Input Validation
const validateRegisterInput = require('../../validation/register')
const validateLoginInput = require('../../validation/login')

// @route   POST api/users/register
// @desc    Register user
// @access  Public
router.post(
  '/register',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validateRegisterInput(req.body)

    // Check validation
    if (!isValid) {
      return res.status(400).json(errors)
    }

    User.findOne({ email: req.body.email })
      .then(user => {
        if (user) {
          errors.email = 'User mit dieser E-mail Adresse existiert bereits.'
          return res.status(400).json(errors)
        } else {
          const newUser = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            securityLevel: req.body.securityLevel
          })

          bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
              if (err) throw err
              newUser.password = hash
              newUser
                .save()
                .then(user =>
                  User.find()
                    .then(users => res.json(users))
                    .catch(err => {
                      console.log(err)
                    })
                )
                .catch(err => console.error(err))
            })
          })
        }
      })
      .catch(err => {
        console.log(err)
      })
  }
)

// @route   POST api/users/update
// @desc    Update user
// @access  Public
router.post(
  '/update',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validateRegisterInput(req.body)

    // Check validation
    if (!isValid) {
      return res.status(400).json(errors)
    }

    User.findById(req.body.id)
      .then(user => {
        user.name = req.body.name
        user.email = req.body.email
        user.password = req.body.password
        // user.securityLevel = req.body.securityLevel

        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(user.password, salt, (err, hash) => {
            if (err) throw err
            user.password = hash
            user
              .save()
              .then(user =>
                User.find()
                  .then(users => res.json(users))
                  .catch(err => {
                    console.log(err)
                  })
              )
              .catch(err => console.error(err))
          })
        })
      })
      .catch(err => {
        console.log(err)
      })
  }
)

router.get(
  '/delete/:id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    User.findByIdAndRemove(req.params.id, (err, user) => {
      if (err) console.log(err)
      else {
        User.find()
          .exec()
          .then(users => res.json(users))
          .catch(err => res.send(err))
      }
    })
  }
)

// @route   POST api/users/login
// @desc    Login user
// @access  Public
router.post('/login', (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body)

  // Check validation
  if (!isValid) {
    return res.status(400).json(errors)
  }

  const email = req.body.email
  const password = req.body.password
  User.findOne({ email })
    .then(user => {
      // Check for user
      if (!user) {
        errors.email = 'User existiert nicht.'
        return res.status(404).json(errors)
      }
      // Check Password
      bcrypt
        .compare(password, user.password)
        .then(isMatch => {
          if (isMatch) {
            // User Matched
            const payload = {
              // Create JWT payload
              id: user.id,
              name: user.name,
              securityLevel: user.securityLevel
            }
            // Sign Token
            jwt.sign(
              payload,
              keys.secretOrKey,
              { expiresIn: 60 * 60 * 24 },
              (err, token) => {
                res.json({
                  success: true,
                  token: 'Bearer ' + token
                })
              }
            )
          } else {
            errors.password = 'Falsches Passwort.'
            return res.status(400).json(errors)
          }
        })
        .catch(err => {
          console.log(err)
        })
    })
    .catch(err => {
      console.log(err)
    })
})

// @route   GET api/users/current
// @desc    return current user
// @access  Private
router.get(
  '/current',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    res.json({
      id: req.user.id,
      name: req.user.name,
      email: req.user.email,
      securityLevel: req.user.securityLevel
    })
  }
)

// @route   GET api/users/all
// @desc    return all users
// @access  Private
router.get(
  '/all',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    User.find()
      .then(users => {
        res.json(users)
      })
      .catch(err => {
        res.status(400).json(err)
      })
  }
)

module.exports = router
