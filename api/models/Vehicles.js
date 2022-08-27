const S = require('sequelize');
const db = require('../db');

class Vehicles extends S.Model {}

Vehicles.init(
  {
    type: {
      type: S.STRING,
      allowNull: false,
    },
  },
  { sequelize: db, modelName: 'vehicles' }
);

module.exports = Vehicles;
