const mongoose = require("mongoose");
const express = require("express");
const app = express();

var {Restaurant} = require('../models');

app.get("/restaurants", async (request, response) => {
    const restaurants = await Restaurant.find({});

    try {
        response.send(restaurants);
    } catch (error) {
        response.status(500).send(error);
    }
});
module.exports = app;