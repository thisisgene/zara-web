const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const passport = require('passport')
const fileUpload = require('express-fileupload')
const path = require('path')
const s3Proxy = require('s3-proxy')
const request = require('request')
const users = require('./routes/api/users')
const projects = require('./routes/api/projects')
const AWS = require('aws-sdk')
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
app.use(
  fileUpload({
    createParentPath: true,
    safeFileNames: true,
    preserveExtension: true
  })
)
app.use('/public', express.static(__dirname + '/public'))

// DB Config
const db = require('./config/keys').mongoURI

// Connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err))

// Passport middleware
app.use(passport.initialize())

// Passport Config
require('./config/passport')(passport)

// Use Routes
app.use('/api/users', users)
app.use('/api/projects', projects)

// Server static assets if on production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}
const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server running on port ${port}`))
