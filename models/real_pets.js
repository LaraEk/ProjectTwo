
//Model for the real pets table

var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");

//Create the model for the real pets table that matches with the DB

var Real_Pets = sequelize.define("real_pets",{
    //the ID for each pet (an integer)
    id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
    //the name of the pet (a string)
    pet_name: Sequelize.STRING,
    //the type or species of animal (a string)
    pet_type: Sequelize.STRING,
    //the breed of the animal (a string)
    pet_breed: Sequelize.STRING,
    //the pet's age (an integer)
    pet_age: Sequelize.INTEGER,
    //the pet's weight in a decimal
    pet_weight: Sequelize.DECIMAL,
    //the price for the pet in a decimal
    pet_price: Sequelize.DECIMAL,
    //notes on the describing the pet (a string)
    pet_notes: Sequelize.STRING,
    //determine if the pet has been adopted or not (a boolean)
    pet_adopted: Sequelize.BOOLEAN,
    //the picture of the pet (a blob)
    pet_pic: Sequelize.BLOB,
    //the date the pet was adopted
    adopted_date: Sequelize.DATE,
    //The person that adopted the pet
    adoptedby_name:  Sequelize.STRING,
    //the person's email who adopted the pet
    adoptedby_email: Sequelize.STRING,
    //the person's phone number who adopted the pet
    adoptedby_phone:  Sequelize.STRING
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

    
