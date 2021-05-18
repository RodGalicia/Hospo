const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const jobSchema = new Schema({
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
    }
    
});

const Job = mongoose.model("Job", jobSchema)


module.exports = Job;