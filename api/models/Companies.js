const S = require('sequelize');
const db = require('../db');

class Companies extends S.Model {}

Companies.init(
  {
    name: {
      type: S.STRING,
      allowNull: false,
    },
    country: {
      type: S.STRING,
      allowNull: false,
    },
    city: {
      type: S.STRING,
      allowNull: false,
    },
    category: {
      type: S.STRING,
      allowNull: false,
    },
    code: {
      type: S.INTEGER,
      allowNull: false,
    },
  },
  { sequelize: db, modelName: 'companies' }
);

module.exports = Companies;
