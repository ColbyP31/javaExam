const { request } = require("express");

const PetController = require("../controllers/pet.controller");
const { Pet } = require("../models/pet.model");

module.exports = app => {
    app.get("/api/pets", PetController.findAllPets);
    app.get("/api/pets/:id", PetController.findOnePet);
    app.post("/api/pets/new", PetController.createPet);
    app.delete("/api/pets/delete/:id", PetController.deletePet);
    app.put("/api/pets/update/:id", PetController.updatePet);
}