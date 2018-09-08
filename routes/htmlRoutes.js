var db = require("../models");

var Real_Pets = require("../models/real_pets");
var Fantasy_Animals = require("../models/fantasy_animals");
var Adoption_Form = require("../models/adoption_form");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  app.get("/about", function(req, res) {
    res.send("about.html");
    });


    app.get("/rescued", function(req, res) {
      res.send("rescued.html");
      });
  
    
      app.get("/safety", function(req, res) {
        res.send("petsafety.html");
        });
    

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
