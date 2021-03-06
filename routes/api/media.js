const express = require('express');
const router = express.Router();
const passport = require('passport');
const marked = require('marked');

const multer = require('multer');
const multerS3 = require('multer-s3');
const aws = require('aws-sdk');
const Jimp = require('jimp');

const Media = require('../../models/Media');

// @route   GET api/media
// @desc    Get all media
// @access  Public
router.get('/', (req, res) => {
  Media.find()
    .then(media => {
      res.json(media);
    })
    .catch(err => {
      console.log(err);
    });
});

// @route   POST api/media/get_by_category/:category
// @desc    Get media by category
// @access  Public
router.get('/get_by_category/:category', (req, res) => {
  Media.find({ category: req.params.category, isDeleted: false })
    .then(media => {
      res.json(media);
    })
    .catch(err => {
      console.log(err);
    });
});

// @route   GET api/media/image_upload
// @desc    Upload image
// @access  Private
router.post(
  '/image_upload',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    let body;

    const s3secret = require('../../config/keys').s3secret;
    const s3key = require('../../config/keys').s3key;
    const spacesEndpoint = new aws.Endpoint('ams3.digitaloceanspaces.com');
    const s3 = new aws.S3({
      endpoint: spacesEndpoint,
      signatureVersion: 'v4',
      accessKeyId: s3key,
      secretAccessKey: s3secret
    });
    const upload = multer({
      storage: multerS3({
        s3: s3,
        bucket: 'serpig-space',
        acl: 'public-read',
        contentType: multerS3.AUTO_CONTENT_TYPE,
        key: function (req, file, cb) {
          console.log('body: ', req.body);
          body = req.body;
          const imgName = body.name.replace(/ /g, '_');
          cb(null, `media/${body.category}/${imgName}`);
        }
      })
    }).array('file', 1);

    upload(req, res, function (error) {
      if (error) {
        res.send(error);
      }
      console.log('File uploaded successfully.');
      const body = req.body;
      const imgName = body.name.replace(/ /g, '_');
      const name = body.name.substring(0, body.name.lastIndexOf('.'));
      const newImage = new Media({
        category: body.category,
        originalName: imgName,
        name: name
      });
      newImage
        .save()
        .then(image => {
          Media.find({ category: body.category, isDeleted: false })
            .then(images => res.json(images))
            .catch(err => {
              console.log(err);
            });
        })
        .catch(err => {
          console.log('noo fail');
          res.send(err);
        });
    });
  }
);

// @route   GET api/media/update_image
// @desc    Update media by id
// @access  Private
router.post(
  '/update_image', (req, res) => {
    const body = req.body
    const id = body.id
    console.log('body: ', body)
    Media.findOneAndUpdate(
      { _id: id },
      {
        $set: {
          de: {
            title: body.titleDE,
            secondTitle: body.secondTitleDE,
            subtitle: body.subtitleDE,
          },
          en: {
            title: body.titleEN,
            secondTitle: body.secondTitleEN,
            subtitle: body.subtitleEN,
          }
        }
      },
      { new: true }
    ).then(image => {
      console.log('CATE: ', body.tag)
      Media.find({ category: body.tag, isDeleted: false })
        .then(media => {
          res.json(media);
        })
        .catch(err => {
          console.log(err);
        });
    })
  }

)

// @route   GET api/media/delete/:id
// @desc    Delete media by id
// @access  Private
router.get(
  '/delete/:category/:id',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    Media.findOneAndUpdate(
      { _id: req.params.id },
      { isDeleted: true },
      { new: true }
    )
      .then(image => {
        console.log(image);
        Media.find({ isDeleted: false, category: req.params.category })
          .then(media => res.json(media))
          .catch(err => {
            res.send(err);
          });
      })
      .catch(err => {
        res.send(err);
      });
  }
);

module.exports = router;
