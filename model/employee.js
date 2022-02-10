const mongoose = require('mongoose');

let employeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    jobTitle: {
        type: String,
        required: true
    },
    experienceInYears: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Employee', employeeSchema);