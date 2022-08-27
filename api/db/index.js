const Sequelize = require('sequelize');

const db = new Sequelize('shippify', 'root', 'password', { 
    dialect: 'mysql',
    host: 'localhost',
    logging: false
});

module.exports = db;
