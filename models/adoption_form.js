
//Model for the adoption form

var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");

//Create the model for the adoption table that matches with the DB

var Adoption_Form = sequelize.define("adoption_requests",{
    //the ID for the customer (an integer)
    id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
    //the name of the customer (a string)
    client_name: Sequelize.STRING,
    //the email of the customer (a string)
    client_email: Sequelize.STRING,
    //the phone number of the customer (a string)
    client_phone: Sequelize.STRING,
    //the customer's message (a string)
    client_message: Sequelize.STRING,
    //the pet ID (an integer)
    pet_id: Sequelize.INTEGER

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

    
