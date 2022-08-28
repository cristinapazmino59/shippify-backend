const Companies = require('./models/Companies');
const Drivers = require('./models/Drivers');
const Vehicles = require('./models/Vehicles');

Companies.bulkCreate([
  {
    name: 'Tres Diablos Mixchelada',
    country: 'Ecuador',
    city: 'Quito',
    code: 1234,
    category: 'Beverages & Food',
  },
  {
    name: 'Bassa',
    country: 'Ecuador',
    city: 'Loja',
    code: 2345,
    category: 'Healthcare & Beauty',
  },
  {
    name: 'Tecompartes',
    country: 'Ecuador',
    city: 'Guayaquil',
    code: 3456,
    category: 'Electronics',
  },
  {
    name: 'Awe',
    country: 'Ecuador',
    city: 'Guayaquil',
    code: 4567,
    category: 'Clothes, Shoes & Accesories',
  },
]);

Drivers.bulkCreate([
  {
    name: 'freddie mercury',
    email: 'freddie@hotmail.com',
    country: 'Ecuador',
    city: 'Guayaquil',
    companyId: 1,
  },
  {
    name: 'phil anselm',
    email: 'phil@gmail.com',
    country: 'Ecuador',
    city: 'Quito',
    companyId: 2,
  },
  {
    name: 'bruce dickinson',
    email: 'bruce@gmail.com',
    country: 'Ecuador',
    city: 'Loja',
    companyId: 3,
  },
  {
    name: 'till lindemann',
    surname: 'lindemann',
    email: 'till@hotmail.com',
    country: 'Ecuador',
    city: 'Ambato',
    companyId: 4,
  },
]);

Vehicles.bulkCreate([
  {
    type: 'van',
    driverId: 1,
  },
  {
    type: 'motorcycle',
    driverId: 2,
  },
  {
    type: 'car',
    driverId: 3,
  },
  {
    type: 'truck',
    driverId: 4,
  },
  {
    type: 'motorcycle',
    driverId: 1,
  },
  {
    type: 'car',
    driverId: 1,
  },
  {
    type: 'van',
    driverId: 2,
  },
  {
    type: 'bicycle',
    driverId: 3,
  },
]);
