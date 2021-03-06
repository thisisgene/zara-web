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

const Carousel = require('../../models/Carousel')
const News = require('../../models/News')
const Jahresbericht = require('../../models/Jahresbericht')
const Faq = require('../../models/Faq')
const Team = require('../../models/Team')
const Bulletin = require('../../models/Bulletin')
const { TrainingTeam, Training } = require('../../models/Training')

const Report = require('../../models/Report')
const Presseclubreport = require('../../models/Presseclubreport')

// Load input validation
const validateProjectInput = require('../../validation/project')

module.exports = router

// @route   POST api/projects/sort/:category
// @desc    Sort projects.
// @access  Private
router.post(
  '/sort/:category',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    const list = req.body.list
    // console.log(list)
    const category = req.params.category
    const result = list.map(async (item, index) => {
      switch (category) {
        case 'carousel':
          console.log(item)
          Carousel.findOneAndUpdate(
            { _id: item.id },
            { position: index },
            { safe: true, new: true }
          )
            .then(item => {
              console.log(item.title, ': ', item.position)
            })
            .catch(err => {
              if (err) console.log(err)
            })
          break
        case 'news':
          News.findOneAndUpdate(
            { _id: item.id },
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
        case 'jahresberichte':
          Jahresbericht.findOneAndUpdate(
            { _id: item.id },
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
        case 'faqs':
          Faq.findOneAndUpdate(
            { _id: item.id },
            { position: index },
            { safe: true, new: true }
          )
            .then(item => {})
            .catch(err => {
              if (err) console.log(err)
            })
          break
        case 'team':
          Team.findOneAndUpdate(
            { _id: item.id },
            { position: index },
            { safe: true, new: true }
          )
            .then(item => {})
            .catch(err => {
              if (err) console.log(err)
            })
          break
        case 'training_team':
          console.log(item.id)
          TrainingTeam.findOneAndUpdate(
            { _id: item.id },
            { position: index },
            { safe: true, new: true }
          )
            .then(item => {
              console.log(item.name, ': ', item.position)
            })
            .catch(err => {
              if (err) console.log(err)
            })
          break
        case 'trainings':
          Training.findOneAndUpdate(
            { _id: item.id },
            { position: index },
            { safe: true, new: true }
          )
            .then(item => {
              console.log(item.title, ': ', item.position)
            })
            .catch(err => {
              if (err) console.log(err)
            })
          break
        case 'bulletins':
          Bulletin.findOneAndUpdate(
            { _id: item.id },
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
    Promise.all(result)
      .then(() => {
        res.send('success')
      })
      .catch(err => {
        console.log(err)
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
      .select('_id date archived')
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
  '/reports/presseclub',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Presseclubreport.find()
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
// Get By Query
router.post(
  '/reports/presseclub',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const query = req.body.query
    Presseclubreport.find(query)
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
  '/reports/presseclub/quick',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Presseclubreport.find()
      .sort('-date')
      .select('_id date category perspective archived')
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
router.get(
  '/reports/presseclub/by_id/:id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Presseclubreport.findById(req.params.id)
      .then(report => {
        res.json(report)
      })
      .catch(err => {
        res.json(err)
      })
  }
)

router.get(
  '/report/sendToArchive/:id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Report.findById(req.params.id)
      .then(report => {
        report.archived = !report.archived
        report.save((err, updatedReport) => {
          Report.find()
            .sort('-date')
            .select('_id date archived')
            .exec()
            .then(reports => {
              res.json({ report: updatedReport, reports: reports })
            })
        })
      })
      .catch(err => {
        res.json(err)
      })
  }
)
router.get(
  '/report/presseclub/sendToArchive/:id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Presseclubreport.findById(req.params.id)
      .then(report => {
        report.archived = !report.archived
        report.save((err, updatedReport) => {
          Presseclubreport.find()
            .sort('-date')
            .select('_id date category perspective archived')
            .exec()
            .then(reports => {
              res.json({ report: updatedReport, reports: reports })
            })
        })
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
    date: date,
  })
    .save()
    .then(report => {
      sendEmail(report)
      res.json({ report: report, msg: 'success' })
    })
    .catch(err => res.send(err))
})

router.post('/report/presseclub/send', (req, res) => {
  const report = req.body.newReport
  const date = new Date()
  console.log('body: ', report)
  let reportObject = {}
  if (report.basics && report.basics.category === 'online') {
    reportObject = {
      category: report.basics && report.basics.category,
      perspective: report.basics && report.basics.perspective,
      directReaction: report.stepA1 && report.stepA1.directReaction === 'yes',
      articleUrl: report.stepA1 && report.stepA1.text1a1,
      keywords: [
        report.stepA1 && report.stepA1.text1a2a,
        report.stepA1 && report.stepA1.text1a2b,
        report.stepA1 && report.stepA1.text1a2c,
      ],
      description: report.stepA1 && report.stepA1.text1b1,
      postUrl: report.stepA1 && report.stepA1.text1b2,
      socialmedia: report.stepA2 && report.stepA2.socialmedia,
      extent: report.stepA3 && report.stepA3.extent,
      privatemsg: report.stepA4 && report.stepA4.privatemsg,
      privatemsgValue: report.stepA4 && report.stepA4.msgValue,
      typeOfHate: report.stepA5 && report.stepA5.typeOfHate,
      typeOfHateNotes: report.stepA5 && report.stepA5.typeOfHateNotes,
      typeOtherValue: report.stepA5 && report.stepA5.otherValue,
      typeText: report.stepA5 && report.stepA5.textarea1,
      typeText2: report.stepA5 && report.stepA5.textarea2,
      typeText3: report.stepA5 && report.stepA5.textarea3,
      jurid: report.stepA6 && report.stepA6.jurid,
      juridText: report.stepA6 && report.stepA6.msgValue,
      consequence: report.stepA7 && report.stepA7.msgValue,
      consequence2: report.stepA7 && report.stepA7.msgValue2,
      consequence3: report.stepA7 && report.stepA7.msgValue3,
      solidarity: report.stepA8 && report.stepA8.solidarity,
      gender: report.stepA9 && report.stepA9.gender,
      genderText: report.stepA9 && report.stepA9.msgValue,
      medium: report.stepA10 && report.stepA10.msgValue,
      additional: report.stepA11 && report.stepA11.msgValue,
      additional2: report.stepA12 && report.stepA12.msgValue,
      date: date,
    }
  } else {
    reportObject = {
      category: report.basics && report.basics.category,
      perspective: report.basics && report.basics.perspective,
      typeOfAbuse: report.stepA1 && report.stepA1.typeOfAbuse,
      location: report.stepA2 && report.stepA2.msgValue,
      attacker: report.stepA3 && report.stepA3.msgValue,
      description: report.stepA4 && report.stepA4.msgValue,
      medium: report.stepA5 && report.stepA5.msgValue,
      racism: report.stepA7 && report.stepA7.racism,
      racismText: report.stepA7 && report.stepA7.msgValue,
      witness: report.stepA8 && report.stepA8.witness,
      witnessText: report.stepA8 && report.stepA8.msgValue,
      jurid: report.stepA9 && report.stepA9.jurid,
      juridText: report.stepA9 && report.stepA9.msgValue,
      consequence: report.stepA10 && report.stepA10.msgValue,
      consequence2: report.stepA10 && report.stepA10.msgValue2,
      consequence3: report.stepA10 && report.stepA10.msgValue3,
      onlineToo: report.stepA11 && report.stepA11.online,
      gender: report.stepA12 && report.stepA12.gender,
      genderText: report.stepA12 && report.stepA12.msgValue,
      additional: report.stepA13 && report.stepA13.msgValue,
      additional2: report.stepA14 && report.stepA14.msgValue,
      date: date,
    }
  }
  const newReport = new Presseclubreport(reportObject)
    .save()
    .then(report => {
      sendPresseclubEmail(report)
      console.log('new report: ', report)
      res.json({ report: report, msg: 'success' })
    })
    .catch(err => res.send(err))
})

sendPresseclubEmail = report => {
  const link = `https://zara.or.at/admin/presseclub/${report.id}`
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
      pass: 'serPig1dev2019', // generated ethereal password
    },
    tls: {
      rejectUnauthorized: false,
    },
  })

  // setup email data with unicode symbols
  let mailOptions = {
    from: '"ZARA Server" <serpig.testuser@gmail.com>', // sender address
    to: 'presse@zara.or.at,m.zojer@presseclub.at', // list of receivers //beratung@zara.or.at
    subject: 'Neue Meldung eingegangen', // Subject line
    text: outputPlain, // plain text body
    html: outputHtml, // html body
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
      pass: 'serPig1dev2019', // generated ethereal password
    },
    tls: {
      rejectUnauthorized: false,
    },
  })

  // setup email data with unicode symbols
  let mailOptions = {
    from: '"ZARA Server" <serpig.testuser@gmail.com>', // sender address
    to: 'beratung@zara.or.at', // list of receivers //beratung@zara.or.at
    subject: 'New Report', // Subject line
    text: outputPlain, // plain text body
    html: outputHtml, // html body
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
    secretAccessKey: s3secret,
  })
  const upload = multer({
    storage: multerS3({
      s3: s3,
      contentType: multerS3.AUTO_CONTENT_TYPE,
      bucket: 'serpig-space',
      acl: 'public-read',
      key: function (req, file, cb) {
        console.log('body: ', req.body)
        body = req.body
        cb(null, `reports/${body.id}/${file.originalname}`)
      },
    }),
  }).array('file', 1)
  // const newImage = {
  //   originalName: imgName
  // }

  upload(req, res, function (error) {
    if (error) {
      res.send(error)
      // return response.redirect('/error')
    }
    console.log('File uploaded successfully.')
    // res.send('success')
    const body = req.body
    const imgName = body.name
    const newImage = {
      originalName: imgName,
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
router.post('/report/presseclub/images', async (req, res) => {
  let body
  const s3secret = require('../../config/keys').s3secret
  const s3key = require('../../config/keys').s3key
  const spacesEndpoint = new aws.Endpoint('ams3.digitaloceanspaces.com')
  const s3 = new aws.S3({
    endpoint: spacesEndpoint,
    signatureVersion: 'v4',
    accessKeyId: s3key,
    secretAccessKey: s3secret,
  })
  const upload = multer({
    storage: multerS3({
      s3: s3,
      contentType: multerS3.AUTO_CONTENT_TYPE,
      bucket: 'serpig-space',
      acl: 'public-read',
      key: function (req, file, cb) {
        console.log('body: ', req.body)
        body = req.body
        cb(null, `presseclub/reports/${body.id}/${file.originalname}`)
      },
    }),
  }).array('file', 1)

  upload(req, res, function (error) {
    if (error) {
      res.send(error)
      // return response.redirect('/error')
    }
    console.log('File uploaded successfully.')
    // res.send('success')
    const body = req.body
    const imgName = body.name
    const newImage = {
      originalName: imgName,
    }
    Presseclubreport.findOneAndUpdate(
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
      pass: 'serPig1dev2019', // generated ethereal password
    },
    tls: {
      rejectUnauthorized: false,
    },
  })

  // setup email data with unicode symbols
  let mailOptions = {
    from: '"ZARA Server" <serpig.testuser@gmail.com>', // sender address
    to: 'office@zara.or.at', // list of receivers // office@zara.or.at
    subject: 'Neue Bestellung', // Subject line
    html: order, // html body
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
