const mongoose = require('mongoose');
const PetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Gotta have a name"],
        minlength: [3, "Name must be at least 3 characters"]
    },
    type: {
        type: String,
        required: [true, "Gotta have a type"],
        minlength: [3, "Type must be at least 3 characters"]
    },
    description: {
        type: String,
        required: [true, "Please give a description"],
        minlength: [3, "Description must be at least 3 characters"]
    },
    skill_1: {
        type: String
    },
    skill_2: {
        type: String
    },
    skill_3: {
        type: String
    }

}, { timestamps: true });
module.exports.Pet = mongoose.model('Pet', PetSchema);