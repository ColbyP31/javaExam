const { request, response } = require("express");
const { Pet } = require("../models/pet.model");

module.exports.findAllPets = (request, response) => {
    Pet.find()
        .then(AllPets => response.json(AllPets))
        .catch(err => response.json({message: "Something went wrong!", error: err}))
}

module.exports.findOnePet = (request, response) => {
    Pet.findOne({_id: request.params.id})
        .then(OnePet => response.json(OnePet))
        .catch(err => response.json({message: "Something went wrong!", error: err}))
}

module.exports.createPet = (request, response) => {
    Pet.create(request.body)
        .then(newPet => response.json(newPet))
        .catch(err => response.json({message: "Something went wrong!", error: err}))
}

module.exports.deletePet = (request, response) => {
    Pet.deleteOne({_id: request.params.id})
        .then(response.json({message: "Pet Adopted!"}))
        .catch(err => response.json({message: "Something went wrong!", error: err}))
}

module.exports.updatePet = (request, response) => {
    Pet.findOneAndUpdate({_id: request.params.id}, request.body, {new: true})
    .then(updatededPet => response.json(updatededPet))
    .catch(err => response.json({message: "Something went wrong!", error: err}))
}