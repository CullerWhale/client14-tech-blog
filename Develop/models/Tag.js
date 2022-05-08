const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Tag extends Model {}

Tag.init(
  {
    // define columns

    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },

    tag_name: {
      type: DataTypes. STRING
    }



    // -- CREATE TABLE tag(
    //   --     id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    //   --     tag_name VARCHAR(30)
    //   -- );


  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;
