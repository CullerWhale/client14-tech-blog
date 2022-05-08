// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');
const Category = require('./Category');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER, 
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },

    product_name: {
      allowNull: false,
      type: DataTypes.STRING(30)
    }, 

    price: {
      allowNull: false,
      type: DataTypes.DECIMAL,
      validate: {
        isDecimal: true
      }
    },

    stock: {
      allowNull:false,
      type: DataTypes.INTEGER,
      defaultValue: 10,
      validate: {
        isInt: true
      }
      
    },

    category_id: {
      type:DataTypes.INTEGER,
      references: {
        model: Category,
        key: 'id'
      }
      
    }

    
    
// -- CREATE TABLE product(
//   --     id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
//   --     product_name VARCHAR(30) NOT NULL, 
//   --     price DECIMAL NOT NULL,-- validates that the value is a decimal,
//   --     stock INTEGER NOT NULL SET DEFAULT 10,--validates value as numeric
//   --     category_id INTEGER, 
//   --     FOREIGN KEY (category_id)
//   --     REFERENCES category(id)
//   -- );


  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
