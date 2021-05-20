const mongoose = require("mongoose");
const express = require("express");
const app = express();

var {User} = require('../models');

app.get("/api/users", async (request, response) => {
  const users = await User.find({});

  try {
      response.send(users);
  } catch (error) {
      response.status(500).send(error);
  }
});

app.post("/api/user", async (request, response) => {

  const user = new User(request.body);

  try {
    await user.save();
    response.send(user);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.patch("/api/user/:id", async (request, response) => {

  const objUser = request.body;

  try {
    const user = await User.findByIdAndUpdate(request.params.id, objUser,  { useFindAndModify: false } );
    response.send(user);
  } catch (error) {
    console.log(error);
    response.status(500).send(error);
  }
});

app.delete("/api/user/:id", async (request, response) => {
  try {
    const user = await User.findByIdAndDelete(request.params.id);

    if (!user) response.status(404).send("No item found");
    response.status(200).send();
  } catch (error) {
    response.status(500).send(error);
  }
});


module.exports = app;