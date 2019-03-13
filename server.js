const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const passport = require('passport')
const proxy = require('express-http-proxy')
const fileUpload = require('express-fileupload')
const path = require('path')
const users = require('./routes/api/users')
const media = require('./routes/api/media')
const news = require('./routes/api/news')
const projects = require('./routes/api/projects')
const app = express()

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// const spacesEndpoint = new AWS.Endpoint('ams3.digitaloceanspaces.com')
// const s3 = new AWS.S3({
//   endpoint: spacesEndpoint
// })
// app.get(
//   '/public/*',
//   s3Proxy({
//     s3: s3,
//     region: 'ams3',
//     bucket: 'spigeon-space',
//     prefix: 'gc-arch/upload',
//     accessKeyId: 'X6UK2KK3BLZ7D3OG6Z43',
//     secretAccessKey: 'X7IJHxoJF2nhXIP5DqAgF/R6eYW028WO40EncTYUAwA'
//   })
// )
// const options = {
//   url: 'http://spigeon-space.ams3.digitaloceanspaces.com',
//   headers: {
//     prefix: 'gc-arch/upload/',
//     Authorization:
//       'Authorization: AWS4-HMAC-SHA256 Credential=X6UK2KK3BLZ7D3OG6Z43/20170710/ams/s3/aws4_request,SignedHeaders=host;x-amz-content-sha256;x-amz-date,Signature=X7IJHxoJF2nhXIP5DqAgF/R6eYW028WO40EncTYUAwA'
//   }
// }
// app.use('/public', function(req, res) {
//   request(options).pipe(res)
// })

// FileUpload middleware
// app.use(
//   fileUpload({
//     createParentPath: true,
//     safeFileNames: true,
//     preserveExtension: true
//   })
// )
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
  .catch(err => console.log(err))

// Passport middleware
app.use(passport.initialize())

// Passport Config
require('./config/passport')(passport)

// Use Routes
app.use('/api/users', users)
app.use('/api/media', media)
app.use('/api/news', news)
app.use('/api/projects', projects)

// Server static assets if on production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
  app.get('/', (req, res) => {
    const filePath = path.resolve(__dirname, './build', 'index.html')

    // read in the index.html file
    fs.readFile(filePath, 'utf8', function(err, data) {
      if (err) {
        return console.log(err)
      }

      // replace the special strings with server generated strings
      data = data.replace(/\$OG_TITLE/g, 'Home Page')
      data = data.replace(/\$OG_DESCRIPTION/g, 'Home page description')
      result = data.replace(/\$OG_IMAGE/g, 'https://i.imgur.com/V7irMl8.png')
      response.send(result)
    })
  })
}
const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server running on port ${port}`))
