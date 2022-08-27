const S = require('sequelize');
const db = require('../db');

class Drivers extends S.Model {}

Drivers.init(
  {
    name: {
      type: S.STRING,
      allowNull: false,
    },
    email:{
      type: S.STRING,
      allowNull: false,
      validate:{
          isEmail:{
              args:true,
              msg:'Valid email required'
          }
      },
      unique: {
          args:true,
          msg: 'Email address already in use!'
      }
    },
    country: {
      type: S.STRING,
      allowNull: false,
    },
    city: {
      type: S.STRING,
      allowNull: false,
    },
  },
  { sequelize: db, modelName: 'drivers' }
);

module.exports = Drivers;
