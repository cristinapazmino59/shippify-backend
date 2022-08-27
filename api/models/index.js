const Companies = require ('./Companies');
const Drivers = require ('./Drivers');
const Vehicles = require ('./Vehicles');

Vehicles.belongsTo(Drivers);
Drivers.belongsTo(Companies);

module.exports = { Companies, Drivers, Vehicles };




