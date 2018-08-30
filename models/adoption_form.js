
//Model for the adoption form

var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");

//Create the model for the adoption table that matches with the DB

var Adoption_Form = sequelize.define("adoption_form",{
    //the ID for the customer (an integer)
    id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
    //the name of the customer (a string)
    name: Sequelize.STRING,
    //the email of the customer (a string)
    email: Sequelize.STRING,
    //the phone number of the customer (a string)
    phone: Sequelize.STRING,
    //the customer's message (a string)
    message: Sequelize.STRING
},
// don't add the timestamp attributes (updatedAt, createdAt)
{
    timestamps: false
}
);

// Syncs with DB
Adoption_Form.sync();

// Makes the Character Model available for other files (will also create a table)
module.exports = Adoption_Form;

    
