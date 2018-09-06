//var db = require("../models/real_pets");

// Dependencies
// =============================================================
var Real_Pets = require("../models/real_pets");
var Fantasy_Animals = require("../models/fantasy_animals");
var Adoption_Form = require("../models/adoption_form");

// Routes
// =============================================================
module.exports = function(app) {

app.get("/", function(req,res){

  var data = { realdata: {}, fantasydata: {} };
  // note: created separate variables in order to be able to show two tables from one single DB (realdata and fantasydata)

  Real_Pets.findAll({}).then(function(result) {
    // console.log(result);
    data.realdata = result;
  });
  Fantasy_Animals.findAll({}).then(function(result) {
    // console.log(result);
    data.fantasydata = result;
  });

  res.render("index", {alldata: data});

});


  // Search for Specific Pet (or all pets) then provides JSON
  app.get("/api/realpet/:petid?", function(req, res) {
    // If the user provides a specific pet in the URL...
    if (req.params.petid) {
      // Then display the JSON for ONLY that pet.
      // (Note how we're using the ORM here to run our searches)
      Real_Pets.findOne({
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
      Real_Pets.findAll({}).then(function(result) {
        return res.json(result);
      });
    }
  });

  // Search for Specific Pet (or all pets) then provides JSON
  app.get("/api/fantasypet/:petid?", function(req, res) {
    // If the user provides a specific pet in the URL...
    if (req.params.petid) {
      // Then display the JSON for ONLY that pet.
      // (Note how we're using the ORM here to run our searches)
      Fantasy_Animals.findOne({
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
      Fantasy_Animals.findAll({}).then(function(result) {
        return res.json(result);
      });
    }
  });

  // Create a new adoption request entry
  app.post("/api/adopt-form", function(req, res) {
    // Take the request...
    var newAdoptReq = req.body;

    // Then add the adoption form information to the database using sequelize
    Adoption_Form.create({      
      client_name: newAdoptReq.clientName,
      client_email: newAdoptReq.clientEmail,
      client_phone: newAdoptReq.clientPhone,
      client_message: newAdoptReq.clientMessage,
      pet_id: newAdoptReq.petId
    }).then(function(data) {
      res.json(data);
      console.log("TESTING- ADDED NEW ENTRY SUCCESSFULLY")
    });
  });

//   // Delete an example by id
//   app.delete("/api/examples/:id", function(req, res) {
//     db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
//       res.json(dbExample);
//     });
//   });
};
