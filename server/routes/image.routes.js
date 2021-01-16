var fs = require('fs');
var path = require('path');
var multer = require('multer');
var imgModel = require('./../models/image');
const router = require('express').Router();

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
        imgModel
            .findOne({ username: req.params.id })
            .then(data => {
                if (data === null){
                    res.json({message: "THE DATA WAS NULL"})
                } else {
                    res.contentType('json')
                    res.send(data)

                }
            })
            .catch(error => console.log(error))
    })

router.post('/:username', upload.single("file"), (req, res, next) => {
    var obj = {
        username: req.params.username,
        img: {
            data: fs.readFileSync(path.join(__dirname + '/../../uploads/' + req.file.filename)),
            contentType: 'image/png'
        }
    }
    imgModel.findOne({ username: req.params.username })
        .then((data) => {
            if (data === null){
                imgModel.create(obj, (err, item) => {
                    if (err) {
                        console.log(err);
                    }
                    else {
                        res.send("COMPLETE")
                    }
                });
            } else {
                imgModel.deleteOne({ username: req.params.username })
                .then(data => {
                    imgModel.create(obj, (err, item) => {
                        if (err) {
                            console.log(err);
                        }
                        else {
                            res.send("COMPLETE")
                        }
                    }).then(data => {
                        res.send("excellent")
                    })
                })
            }
        })
        .catch(err => console.log(err))
});

module.exports = router;