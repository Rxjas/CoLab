var fs = require('fs');
var path = require('path');
var multer = require('multer');
var imgModel = require('./../models/image');
const router = require('express').Router();
var ObjectId = require('mongodb').ObjectId;
const { PromiseProvider } = require('mongoose');

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now())
    }
});

var upload = multer({ storage: storage });

router
    .route('/:id')
    .get((req, res) => {
        // later, the id will be the user id of the profile picture in question. Current objectId is a demo placeholder
        imgModel
            .findOne({ username: req.params.id })
            .then(data => {
                res.contentType('json')
                res.send(data)
            })
            .catch(error => console.log(error))
    })

router.post('/', upload.single("file"), (req, res, next) => {

    var obj = {
        name: req.body.name,
        img: {
            data: fs.readFileSync(path.join(__dirname + '/../../uploads/' + req.file.filename)),
            contentType: 'image/png'
        }
    }

    imgModel.create(obj, (err, item) => {
        if (err) {
            console.log(err);
        }
        else {

            res.redirect('/');
        }
    });
});


module.exports = router;