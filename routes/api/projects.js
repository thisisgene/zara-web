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

// Load project model
const Project = require('../../models/Project')

const News = require('../../models/News')

const Report = require('../../models/Report')

// Load input validation
const validateProjectInput = require('../../validation/project')

module.exports = router

// // @route   GET api/projects
// // @desc    Get all projects
// // @access  Public
// router.get('/', (req, res) => {
//   // res.json({ msg: 'Jubidu' })
//   const errors = {}
//   Project.find({ isDeleted: false })
//     .sort('position')
//     .exec()
//     .then(projects => {
//       if (projects === undefined || projects.length === 0) {
//         return res.json({ noprojects: 'Noch keine Projekte.' })
//       }
//       res.json(projects)
//     })
//     .catch(err => res.status(404).json(err))
// })

// // @route   POST api/projects
// // @desc    Create a project
// // @access  Private
// router.post(
//   '/',
//   passport.authenticate('jwt', { session: false }),
//   async (req, res) => {
//     const body = req.body
//     const { errors, isValid } = await validateProjectInput(body)

//     // Check validation
//     if (!isValid) {
//       return res.status(400).json(errors)
//     }

//     // Check if project.name already exists
//     const project = await Project.findOne({ name: body.name })
//     if (project) {
//       errors.name = 'Ein Projekt mit diesem Namen existiert bereits.'
//       return res.status(400).json(errors)
//     } else {
//       // Get fields
//       const projectFields = {}
//       if (body.name) {
//         projectFields.name = body.name
//         // projectFields.title = body.name
//         // projectFields.handle = body.name.replace(/\s/g, '_')
//       }
//       const newProject = new Project(projectFields)
//       newProject.save(async project => {
//         const projects = await Project.find()
//         res.json(projects)
//       })
//     }
//   }
// )

// // @route   GET api/projects/id/:id
// // @desc    Get project by id
// // @access  Public
// router.get('/id/:id', (req, res) => {
//   const errors = {}
//   Project.findOne({ _id: req.params.id, isDeleted: false })
//     .populate('lastEdited.user', ['name'])
//     .then(project => {
//       if (!project) {
//         errors.noprojects = 'Kein Projekt mit dieser ID.'
//         return res.status(404).json(errors.noprojects)
//       }
//       res.json(project)
//     })
//     .catch(err => {
//       errors.project = 'Projekt nicht gefunden.'
//       return res.status(404).json(errors)
//     })
// })

// // @route   POST api/projects/update/:id
// // @desc    Update project by id.
// // @access  Private
// router.post(
//   '/update',
//   passport.authenticate('jwt', { session: false }),
//   (req, res) => {
//     const body = req.body
//     const projectFields = {}
//     if (body.name) projectFields.name = body.name
//     if (body.title) projectFields.title = body.title
//     if (body.handle) projectFields.handle = body.handle
//     if (body.descriptionMarkdown) {
//       projectFields.descriptionMarkdown = body.descriptionMarkdown
//       projectFields.descriptionHtml = marked(body.descriptionMarkdown, {
//         sanitize: true
//       })
//     }
//     if (body.topTenOnGrid) projectFields.topTenOnGrid = body.topTenOnGrid
//     if (body.positionOnGrid) projectFields.positionOnGrid = body.positionOnGrid
//     if (body.typeOfFormatOnGrid)
//       projectFields.typeOfFormatOnGrid = body.typeOfFormatOnGrid
//     if (body.importanceOnGrid)
//       projectFields.importanceOnGrid = body.importanceOnGrid
//     if (body.sizeOnGrid) projectFields.sizeOnGrid = body.sizeOnGrid
//     if (body.isVisible !== undefined) projectFields.isVisible = body.isVisible
//     projectFields.lastEdited = {
//       user: req.user,
//       date: new Date()
//     }
//     Project.findByIdAndUpdate(body.id, { $set: projectFields }, { new: true })
//       .then(project => res.json(project))
//       .catch(err => {
//         errors.project = 'Projekt nicht gefunden.'
//         return res.status(404).json(errors)
//       })
//   }
// )

// @route   POST api/projects/sort/:category
// @desc    Sort projects.
// @access  Private
router.post(
  '/sort/:category',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    const list = req.body.list
    const category = req.params.category
    const result = list.map(async (item, index) => {
      switch (category) {
        case 'news':
          News.findOneAndUpdate(
            { _id: item._id },
            { position: index },
            { safe: true, new: true }
          )
            .then(item => {
              console.log(item.de.title, ': ', item.position)
            })
            .catch(err => {
              if (err) console.log(err)
            })
          break
        default:
          return
      }
    })
    Promise.all(result).then(() => {
      res.send('success')
    })
  }
)

// client User

router.get(
  '/reports',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Report.find()
      .sort('-date')
      .exec()
      .then(reports => {
        res.json(reports)
      })
      .catch(err => {
        res.json(err)
      })
  }
)

router.get(
  '/reports/by_id/:id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Report.findById(req.params.id)
      .then(report => {
        res.json(report)
      })
      .catch(err => {
        res.json(err)
      })
  }
)

router.post('/report/send', (req, res) => {
  const body = req.body
  const date = new Date()
  console.log('LINKS:', body.links)
  const newReport = new Report({
    description: body.description,
    anonym: body.selectedOption === 'anonym',
    name: body.name,
    email: body.email,
    phone: body.phone,
    links: body.links,
    date: date
  })
    .save()
    .then(report => {
      sendEmail(report)
      res.json({ report: report, msg: 'success' })
    })
    .catch(err => res.send(err))
})

sendEmail = report => {
  const link = `https://zara.or.at/admin/reports/${report.id}`
  const outputPlain = `Neue Meldung empfangen. Link: ${link}`
  const outputHtml = `
    <p>Neue Meldung empfangen.</p>
    <h3>
      <a href="${link}">${link}</a>
    </h3>
  `
  console.log(outputHtml)
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: 'serpig.testuser@gmail.com', // generated ethereal user
      pass: 'serPig1dev2019' // generated ethereal password
    },
    tls: {
      rejectUnauthorized: false
    }
  })

  // setup email data with unicode symbols
  let mailOptions = {
    from: '"ZARA Server" <serpig.testuser@gmail.com>', // sender address
    to: 'beratung@zara.or.at', // list of receivers //beratung@zara.or.at
    subject: 'New Report', // Subject line
    text: outputPlain, // plain text body
    html: outputHtml // html body
  }

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error)
    }
    console.log('Message sent: %s', info.messageId)
    // Preview only available when sending through an Ethereal account
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info))

    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  })
}

router.post('/report/images', async (req, res) => {
  let body
  // const file = req.files.file
  // const body = req.body
  // const imgName = body.name.replace(/ /g, '_')
  // const newImage = {
  //   originalName: imgName
  // }
  // console.log('Report ID: ', body.id)
  const s3secret = require('../../config/keys').s3secret
  const s3key = require('../../config/keys').s3key
  const spacesEndpoint = new aws.Endpoint('ams3.digitaloceanspaces.com')
  const s3 = new aws.S3({
    endpoint: spacesEndpoint,
    signatureVersion: 'v4',
    accessKeyId: s3key,
    secretAccessKey: s3secret
  })
  const upload = multer({
    storage: multerS3({
      s3: s3,
      bucket: 'serpig-space',
      acl: 'public-read',
      key: function(req, file, cb) {
        console.log('body: ', req.body)
        body = req.body
        cb(null, `reports/${body.id}/${file.originalname}`)
      }
    })
  }).array('file', 1)
  // const newImage = {
  //   originalName: imgName
  // }

  upload(req, res, function(error) {
    if (error) {
      res.send(err)
      // return response.redirect('/error')
    }
    console.log('File uploaded successfully.')
    // res.send('success')
    const body = req.body
    const imgName = body.name.replace(/ /g, '_')
    const newImage = {
      originalName: imgName
    }
    Report.findOneAndUpdate(
      { _id: body.id },
      { $push: { images: newImage } },
      { safe: true, new: true }
    )
      .then(report => {
        res.send('success')
      })
      .catch(err => {
        console.log('noo fail')
        res.send(err)
      })
  })

  // file.mv(`public/reports/${body.id}/${imgName}`)
  // console.log('juhu succ')

  // res.send('success')
})

router.post('/order', (req, res) => {
  const { errors, isValid } = validateOrderInput(req.body)

  // Check validation
  if (!isValid) {
    return res.status(400).json(errors)
  }
  const body = req.body
  let itemsHtml = ''

  body.items.map(item => (itemsHtml += `<p>${item.count}x ${item.title}</p>`))
  const outputHtml = `
    <h1>Bestellung</h1>
    <h2>Rassismus Reports</h2>
    <div>${itemsHtml}</div>
    <h2>Kontakt</h2>
    <h3>Vorname</h3>
    <div>${body.fname}</div>
    <h3>Nachname</h3>
    <div>${body.lname}</div>
    <h3>Straße</h3>
    <div>${body.street}</div>
    <h3>PLZ / Ort</h3>
    <div>${body.city}</div>
    <h3>E-mail Adresse</h3>
    <div>${body.email}</div>
    <h3>Anmerkungen</h3>
    <div>${body.addInfo}</div>
  `
  sendOrderEmail(outputHtml, body, res)
})

sendOrderEmail = (order, body, res) => {
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: 'serpig.testuser@gmail.com', // generated ethereal user
      pass: 'serPig1dev2019' // generated ethereal password
    },
    tls: {
      rejectUnauthorized: false
    }
  })

  // setup email data with unicode symbols
  let mailOptions = {
    from: '"ZARA Server" <serpig.testuser@gmail.com>', // sender address
    to: 'emdo2000@gmail.com', // list of receivers // office@zara.or.at
    subject: 'Neue Bestellung', // Subject line
    html: order // html body
  }

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error)
    }
    console.log('Message sent: %s', info.messageId)
    // Preview only available when sending through an Ethereal account
    res.json(body)
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info))

    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  })
}
