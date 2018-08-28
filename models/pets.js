module.exports = function(sequelize, DataTypes) {
  var pets = sequelize.define("Pets", {
    text: DataTypes.STRING,
    description: DataTypes.TEXT
  });
  return pets;
};

