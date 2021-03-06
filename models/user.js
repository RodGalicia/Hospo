const mongoose = require("mongoose");
const passportLocalMongoose = require('passport-local-mongoose');

const Schema = mongoose.Schema;
const userSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: "Enter a name for the user"
    },
    lastname: {
        type: String,
        trim: true,
        required: "Enter a last name for the user"
    },
    email: {
        type: String,
        trim: true,
        required: "Enter an email for the user"
    },
    username: {
        type: String,
        trim: true,
        required: "Enter an email for the user"
    },
    password: {
        type: String,
        trim: true,
        required: "Enter a password for the user"
    }
    
});

userSchema.plugin(passportLocalMongoose);
const User = mongoose.model("User", userSchema,"User")

module.exports = User;