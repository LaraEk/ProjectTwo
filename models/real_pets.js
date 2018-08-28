
//Model for the real pets table

var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");

//Create the model for the real pets table that matches with the DB

var Real_Pets = sequelize.define("real_pets",{
    //the ID for each pet (an integer)
    id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
    //the name of the pet (a string)
    pet_name: Sequelize.STRING,
    //the breed of the animal (a string)
    breed: Sequelize.STRING,
    //the pet's age (an integer)
    age: Sequelize.INTEGER,
    //the pet's weight in a decimal
    pet_weight: Sequelize.DECIMAL,
    //the price for the pet in a decimal
    price: Sequelize.DECIMAL,
    //notes on the describing the pet (a string)
    notes: Sequelize.STRING,
    //determine if the pet has been adopted or not (a boolean)
    adopted: Sequelize.BOOLEAN,
    //the picture of the pet (a blob)
    pic: Sequelize.BLOB
},
// don't add the timestamp attributes (updatedAt, createdAt)
{
    timestamps: false
}
);

// Syncs with DB
Real_Pets.sync();

// Makes the Character Model available for other files (will also create a table)
module.exports = Real_Pets;

    
