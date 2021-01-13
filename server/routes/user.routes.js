const router = require('express').Router();
var fs = require('fs');
var path = require('path');
var multer = require('multer');
var ObjectId = require('mongodb').ObjectId;
const { request } = require('express');
const { User } = require('../models');

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads')
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now())
  }
});

var upload = multer({ storage: storage });

//Restful API Time Full Routes are commented above routers.
//api/user/
router.route('/')
  //  get users
  .get((req, res) => {
    User.find({})
      .then(data => {
        res.json({ success: true, data })
      })
      .catch(err => {
        console.log(err)
        res.json({ success: false });
      });
  })
  // add user
  .post((req, res) => {
    User.create(req.body)
      .then(newUser => {
        console.log(newUser);
        res.json({ success: true })
      })
      .catch((err) => {
        console.log(err);
        res.json({ success: false });
      })
  })
  // update user
  .put(upload.single("file"), (req, res, next) => {
    var obj = { ...req.body };
    obj.img = {
      data: fs.readFileSync(path.join(__dirname + '/../../uploads' + req.file.filename)),
      contentType: 'image/png'
    };
    User.updateOne({
      username: req.body.username
    }, {
      $set: { obj }
    })
    .then(() => {
      res.redirect('/');
    })
    .catch(err => console.log(err))
  });

    // router.put('/', upload.single("file"), (req, res, next) => {
    //   var obj = { ...req.body };
    //   obj.img = {
    //     data: fs.readFileSync(path.join(__dirname + '/../../uploads' + req.file.filename)),
    //     contentType: 'image/png'
    //   };
    //   User.findOneAndUpdate(req.body, (err) => {
    //     if (err) {
    //       console.log(err)
    //     } else {
    //       res.redirect('/');
    //     }
    //   })
    // });

    // api/user/:id   This path is used so you can search by username not the object ID
    router.route('/:id')
      //get specific user
      .get((req, res) => {
        User.find({ username: req.params.id })

          .then((data) => {
            console.log(data)
            res.json({ success: true, data })
          })

          .catch(err => {
            console.log(err)
            res.json({ success: false })
          })
      })

      //update specific user via username
      .put((req, res) => {
        User.findOneAndUpdate({ username: req.params.id }, req.body)
          .then((data) => {
            res.json({ success: true })
          })
          .catch(err => {
            console.log(err);
            res.json({ success: false })
          })
      })

      //delete a user via the username
      .delete((req, res) => {
        User.deleteOne({ username: req.params.id })
          .then((data) => {
            res.json({ user: "Deleted" })
          })
          .catch(err => {
            console.log(err);
            res.json({ success: false })
          })

      });

    //route to search for cetain kinds of users
    router.route('/results')
      .get((req, res) => {
        // right now there's just functionality to search by roles
        User.find({
          roles: req.body.roles
        })
          .then(data => {
            res.json(data);
          })
          .catch(err => console.log(err))
      })

    // route to search for matches, cycle through array in Matches component and do a get request each time...?
    router
      .route('/matches')
      .get((req, res) => {
        User.find({
          username: req.body.username
        })
          .then(data => res.json(data))
          .catch(err => console.log(err))
      })

    //export the module
    module.exports = router;
