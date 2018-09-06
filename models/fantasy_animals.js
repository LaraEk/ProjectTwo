//Model for the fantasy animals table

var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");

//Create the model for the fantasy animals table that matches with the DB
var Fantasy_Animals = sequelize.define("fantasy_animals",{
    //the ID for each animal (an integer)
    id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
    //the name of the animal (a string)
    name: Sequelize.STRING,
    //the picture of the pet (a blob)
    pic: Sequelize.BLOB,
    //the pet's age (an integer)
    age: Sequelize.INTEGER,
    //the animal's size in feet (an integer)
    size_in_feet: Sequelize.INTEGER,
    //the animal's temperament (a string)
    temperament: Sequelize.STRING,
    //the price for the animal in a decimal
    price: Sequelize.DECIMAL,
    //notes on describing the animals (a string)
    from_where: Sequelize.STRING,
    //matching the fantasy animals with the real pets (a string)
    matching_real_animal: Sequelize.STRING,
    //determine if the animal has been adopted or not (a boolean)
    adopted: Sequelize.BOOLEAN
    
},
// don't add the timestamp attributes (updatedAt, createdAt)- Sequelize settings argument/parameters
{
    timestamps: false
}
);

// Syncs with DB
Fantasy_Animals.sync();

// Makes the Character Model available for other files (will also create a table)
module.exports = Fantasy_Animals;