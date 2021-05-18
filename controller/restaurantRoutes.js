const express = require("express");
const restModel = require("../models/restaurant");
const app = express();

app.get("/restaurants", async (request, response) => {
    const restaurants = await restModel.find({});

    try {
        response.send(restaurants);
    } catch (error) {
        response.status(500).send(error);
    }
});
module.exports = app;