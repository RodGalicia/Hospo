const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const restaurantSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: "Enter a name for the restaurant"
    },
    address: {
        type: String,
        trim: true,
        required: "Enter an address for the restaurant"
    },
    
    manager: {
        type: String,
        trim: true,
        required: "Enter a name for the manager"
    },
    telephone: {
        type: String,
        trim: true,
        required: "Enter a phone number for the manager"
    },
    email: {
        type: String,
        trim: true,
        required: "Enter an email for the manager"
    },
    jobs:[{
        position: {
            type: String,
            trim: true,
            required: "Enter a job position for the restaurant"
        },
        salary: {
            type: Number,
            required: "Enter a salary for the restaurant"
        },
        requirement: {
            type: String,
            trim: true,
            required: "Enter a requirement for the job"
        }}],
    reviews:[{
        score: {
            type: Number,
            required: "Enter a score for the restaurant"
        },
        review: {
            type: String,
            trim: true,
            required: "Enter a review for the restaurant"
        }}] 
});

const Restaurant = mongoose.model("Restaurant", restaurantSchema)


module.exports = Restaurant;