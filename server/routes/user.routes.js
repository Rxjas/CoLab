const router = require('express').Router();
const { User } = require('../models');

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
        res.json({ success: true })
      })
      .catch((err) => {
        console.log(err);
        res.json({ success: false });
      })
  });

// get users based on search criteria
router.route('/search/:criteria')
  .get((req, res) => {
    User.find({ roles: req.params.criteria })
      .then(data => {
        res.json(data);
      })
      .catch(err => console.log(err))
  })

router.route("/msg")
  .put((req, res) => {
    User.findOneAndUpdate({ username: req.body.user1 }, { $push: { chats: { channelID: req.body.channelID, user: req.body.user2 } } })
      .then(data => {
        res.json({ success: true, data })
      })
      .catch(err => console.log(err))
  })

// api/user/:id   This path is used so you can search by username not the object ID
router.route('/:id')
  //get specific user
  .get((req, res) => {
    User.find({ username: req.params.id })
      .then((data) => {
        res.json({ success: true, message: data })
      }).catch(err => {
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

// /api/user/matches/:id   full route to call for pushing matches into array
// and to get the users they matched with.
router.route('/matches/:id')

  // get request to get matches for a specific user
  .get((req, res) => {
    User.find({ username: req.params.id }).exec()

      .then(data => {
        // putting array we got from user into variable to make a second query
        var matchesData = data[0].matches;

        //making a second query to find the users from the array of the matches from the user
        User.find({ username: matchesData })
          .then(data => {
            res.json({ success: true, message: data })
          })
          .catch(err => {
            console.log(err)
            res.json({ success: false });
          });
      })
      // a catch for the first query
      .catch(err => {
        console.log(err);
        res.json({ success: false })
      });
  })


  // put request to add matches to array
  .put((req, res) => {
    User.findOneAndUpdate({ username: req.params.id }, { $push: { matches: req.body.matches } })
      .then(data => {
        res.json({ success: true })

      })
      .catch(err => {
        console.log(err);
        res.json({ success: false })
      })
  });


//export the module
module.exports = router;
