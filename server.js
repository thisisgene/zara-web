const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const passport = require('passport')
const proxy = require('express-http-proxy')
const fileUpload = require('express-fileupload')
const path = require('path')
const fs = require('fs')
const metatags = require('./routes/metatags')
const users = require('./routes/api/users')
const media = require('./routes/api/media')
const label = require('./routes/api/label')
const carousel = require('./routes/api/carousel')
const news = require('./routes/api/news')
const jahresberichte = require('./routes/api/jahresberichte')
const jobs = require('./routes/api/jobs')
const faqs = require('./routes/api/faqs')
const team = require('./routes/api/team')
const training = require('./routes/api/training')
const projects = require('./routes/api/projects')
const app = express()

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/public', express.static(__dirname + '/public'))

app.use('/assets', proxy('https://assets.zara.or.at'))
app.use('/download', proxy('https://zara-download.ams3.digitaloceanspaces.com'))
// app.use('/assets', proxy('https://serpig-test.ams3.digitaloceanspaces.com')) // <= TEST SERVER

// DB Config
const db = require('./config/keys').mongoURI

// Connect to MongoDB
mongoose
  .set('useFindAndModify', false)
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log('DB connection error OIOIOIO', err))

// Passport middleware
app.use(passport.initialize())

// Passport Config
require('./config/passport')(passport)

// Use Routes

app.use('/api/users', users)
app.use('/api/media', media)
app.use('/api/label', label)
app.use('/api/carousel', carousel)
app.use('/api/news', news)
app.use('/api/jahresberichte', jahresberichte)
app.use('/api/jobs', jobs)
app.use('/api/faqs', faqs)
app.use('/api/team', team)
app.use('/api/training', training)
app.use('/api/projects', projects)

// app.get('*', (req, res) => {
//   console.log(req.path)
// })

// Server static assets if on production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'))

  app.use('/', metatags)

  app.get('*', (req, res) => {
    // console.log(req.path)
    const filePath = path.resolve(__dirname, './client', 'build', 'index.html')
    const lang = req.params.lang
    // read in the index.html file
    fs.readFile(filePath, 'utf8', function (err, data) {
      if (err) {
        return console.log(err)
      }

      // replace the special strings with server generated strings
      data = data.replace(
        /\$OG_TITLE/g,
        'ZARA - Zivilcourage & Anti-Rassismus-Arbeit'
      )
      data = data.replace(
        /\$DESCRIPTION/g,
        'ZARA – Zivilcourage und Anti-Rassismus-Arbeit. Beratung, Prävention und Sensibilisierung der Öffentlichkeit.'
      )
      data = data.replace(
        /\$OG_DESCRIPTION/g,
        'ZARA – Zivilcourage und Anti-Rassismus-Arbeit. Beratung, Prävention und Sensibilisierung der Öffentlichkeit.'
      )
      data = data.replace(
        /\$OG_IMAGE_SECURE_URL/g,
        'https://zara.or.at/static/media/collapsed.8796f218.svg'
      )
      result = data.replace(
        /\$OG_IMAGE/g,
        'https://zara.or.at/static/media/collapsed.8796f218.svg'
      )
      console.log('should be last!')
      res.send(result)
    })
  })
}

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server running on port ${port}`))
