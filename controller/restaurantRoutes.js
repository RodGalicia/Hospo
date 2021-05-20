const mongoose = require("mongoose");
const router = require("express").Router();


var {Restaurant} = require('../models');
var {Job} = require('../models');
var {Review} = require('../models');

router.get("/", async (request, response) => {
    const restaurants = await Restaurant.find({});

    try {
        response.send(restaurants);
    } catch (error) {
        response.status(500).send(error);
    }
});

router.post("/", async (request, response) => {

  //console.log(request.body);
    const restaurant = new Restaurant({
      name: request.body.name , 
      address: request.body.address,
      manager: request.body.manager,
      telephone: request.body.telephone,
      email: request.body.email,
      jobs: request.body.jobs,
      reviews: request.body.reviews
    });

    try {
      await restaurant.save();
      response.send(restaurant);
    } catch (error) {
      response.status(500).send(error);
    }
  });

  router.patch("/:id", async (request, response) => {

    const objRest = {
      name: request.body.name , 
      address: request.body.address,
      manager: request.body.manager,
      telephone: request.body.telephone,
      email: request.body.email
    };

    try {
      const restaurant = await Restaurant.findByIdAndUpdate(request.params.id, objRest,  { useFindAndModify: false } );
      response.send(restaurant);
    } catch (error) {
      console.log(error);
      response.status(500).send(error);
    }
  });

  router.delete("/:id", async (request, response) => {
    try {
      const restaurant = await Restaurant.findByIdAndDelete(request.params.id);
  
      if (!restaurant) response.status(404).send("No item found");
      response.status(200).send();
    } catch (error) {
      response.status(500).send(error);
    }
  });

  router.post("/addJob/:id", async (request, response) => {

    const restaurant = await Restaurant.findById(request.params.id);
    if(restaurant!=null){
      restaurant.jobs.push(request.body);
      try {
        await restaurant.save();
        response.send(restaurant);
      } catch (error) {
        response.status(500).send(error);
      }
    }else{
      response.status(500).send("Restaurant was not found");
    }
    });

    router.post("/addReview/:id", async (request, response) => {

      const restaurant = await Restaurant.findById(request.params.id);
      if(restaurant!=null){
        restaurant.reviews.push(request.body);
        try {
          await restaurant.save();
          response.send(restaurant);
        } catch (error) {
          response.status(500).send(error);
        }
      }else{
        response.status(500).send("Restaurant was not found");
      }
      });

      router.post("/addJob/:id", async (request, response) => {

    const restaurant = await Restaurant.findById(request.params.id);
    if(restaurant!=null){
      restaurant.jobs.push(request.body);
      try {
        await restaurant.save();
        response.send(restaurant);
      } catch (error) {
        response.status(500).send(error);
      }
    }else{
      response.status(500).send("Restaurant was not found");
    }
    });

    router.post("/addReview/:id", async (request, response) => {

      const restaurant = await Restaurant.findById(request.params.id);
      if(restaurant!=null){
        restaurant.reviews.push(request.body);
        try {
          await restaurant.save();
          response.send(restaurant);
        } catch (error) {
          response.status(500).send(error);
        }
      }else{
        response.status(500).send("Restaurant was not found");
      }
      });

      router.delete("/removeJob/:id/:job_id", async (request, response) => {

        const restaurant = await Restaurant.findById(request.params.id);
        if(restaurant!=null){
          restaurant.jobs.pull(request.params.job_id);
          try {
            await restaurant.save();
            response.send(restaurant);
          } catch (error) {
            response.status(500).send(error);
          }
        }else{
          response.status(500).send("Restaurant was not found");
        }
        });
    
        router.delete("/removeReview/:id/:rev_id", async (request, response) => {
    
          const restaurant = await Restaurant.findById(request.params.id);
          if(restaurant!=null){
            restaurant.reviews.pull(request.params.rev_id);
            try {
              await restaurant.save();
              response.send(restaurant);
            } catch (error) {
              response.status(500).send(error);
            }
          }else{
            response.status(500).send("Restaurant was not found");
          }
          });

module.exports = router;