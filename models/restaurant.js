const mongoose = require("mongoose");
const { schema } = require("./job");

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
        type: Schema.Types.ObjectId,
        ref:"Job"

    }],
    reviews:[{
        type:schema.Types.ObjectId,
        ref:"Review"

    }]
    
});

const Restaurant = mongoose.model("Restaurant", restaurantSchema)


module.exports = Restaurant;