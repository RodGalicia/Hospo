const mongoose = require("mongoose");
const router = require("express").Router();
const passport = require('passport');
var {User} = require('../models');
// this will run when a POST request hits the endpoint /api/users/login
router.post('/login', (req, res, next) => {
  passport.authenticate('local',
  (err, user, info) => {
    if (err) {
      return next(err);
    }

    if (!user) {
      return res.status(404).json('no user found', info);
    }

    req.logIn(user, function(err) {
      if (err) {
        return next(err);
      }

      return res.json(user);
    });

  })(req, res, next);
});

router.get("/api/users", async (request, response) => {
  const users = await User.find({});

  try {
      response.send(users);
  } catch (error) {
      response.status(500).send(error);
  }
});

router.post("/api/user", async (request, response) => {

  const user = new User(request.body);

  try {
    await user.save();
    response.send(user);
  } catch (error) {
    response.status(500).send(error);
  }
});

router.patch("/api/user/:id", async (request, response) => {

  const objUser = request.body;

  try {
    const user = await User.findByIdAndUpdate(request.params.id, objUser,  { useFindAndModify: false } );
    response.send(user);
  } catch (error) {
    console.log(error);
    response.status(500).send(error);
  }
});

router.delete("/api/user/:id", async (request, response) => {
  try {
    const user = await User.findByIdAndDelete(request.params.id);

    if (!user) response.status(404).send("No item found");
    response.status(200).send();
  } catch (error) {
    response.status(500).send(error);
  }
});


module.exports = router;