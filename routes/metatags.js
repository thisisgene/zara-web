const express = require('express')
const router = express.Router()
const path = require('path')
const fs = require('fs')

const News = require('../models/News')

router.get('/:lang/wissen/aktuelles/n/:category/:id/:title', (req, res) => {
  const filePath = path.resolve(__dirname, '../client', 'build', 'index.html')
  const lang = req.params.lang
  News.findById(req.params.id).then(newsItem => {
    // read in the index.html file
    fs.readFile(filePath, 'utf8', function(err, data) {
      if (err) {
        return console.log(err)
      }

      // replace the special strings with server generated strings
      data = data.replace(/\$OG_TITLE/g, 'ZARA | ' + newsItem[lang].title)
      data = data.replace(/\$OG_DESCRIPTION/g, newsItem[lang].shortDescription)
      result = data.replace(
        /\$OG_IMAGE/g,
        `https://assets.zara.or.at/media/${newsItem.titleImage.category}/${
          newsItem.titleImage.originalName
        }`
      )
      res.send(result)
    })
  })
})
// router.get('/:lang/*', (req, res) => {
//   const filePath = path.resolve(__dirname, '../client', 'build', 'index.html')
//   const lang = req.params.lang
//   // read in the index.html file
//   fs.readFile(filePath, 'utf8', function(err, data) {
//     if (err) {
//       return console.log(err)
//     }

//     // replace the special strings with server generated strings
//     data = data.replace(
//       /\$OG_TITLE/g,
//       'ZARA - Zivilcourage & Anti-Rassismus-Arbeit'
//     )
//     data = data.replace(/\$OG_DESCRIPTION/g, 'asdasd')
//     result = data.replace(/\$OG_IMAGE/g, `https://assets.zara.or.at/media/`)
//     res.send(result)
//   })
// })

module.exports = router
