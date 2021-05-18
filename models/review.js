const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    score: {
        type: Number,
        required: "Enter a score for the restaurant"
    },
    review: {
        type: String,
        trim: true,
        required: "Enter a review for the restaurant"
    }
});

const Review = mongoose.model("Review", reviewSchema)


module.exports = Review;