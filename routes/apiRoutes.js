var db = require("../models/real_pets");

// Dependencies
// =============================================================
var RealPet = require("../models/real_pets");

// Routes
// =============================================================
module.exports = function(app) {
  // Search for Specific Pet (or all pets) then provides JSON
  app.get("/api/realpet/:petid?", function(req, res) {
    // If the user provides a specific pet in the URL...
    if (req.params.petid) {
      // Then display the JSON for ONLY that pet.
      // (Note how we're using the ORM here to run our searches)
      RealPet.findOne({
        where: {
          id: req.params.petid
        }
      }).then(function(result) {
        return res.json(result);
      });
    }
    else {
      // Otherwise...
      // Otherwise display the data for all of the pets.
      // (Note how we're using Sequelize here to run our searches)
      RealPet.findAll({}).then(function(result) {
        return res.json(result);
      });
    }
  });


  // Create a new example
//   app.post("/api/examples", function(req, res) {
//     db.Example.create(req.body).then(function(dbExample) {
//       res.json(dbExample);
//     });
//   });

//   // Delete an example by id
//   app.delete("/api/examples/:id", function(req, res) {
//     db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
//       res.json(dbExample);
//     });
//   });
};
