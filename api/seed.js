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
    color: 'blue',
    plate: 'ABC1234'
  },
  {
    type: 'motorcycle',
    color: 'white',
    plate: 'DEF1234'
  },
  {
    type: 'car',
    color: 'black',
    plate: 'ABC1154'
  },
  {
    type: 'truck',
    color: 'yellow',
    plate: 'DEF2345'
  },
  {
    type: 'motorcycle',
    color: 'light blue',
    plate: 'PIC1234'
  },
  {
    type: 'car',
    color: 'brown',
    plate: 'CAR5678'
  },
  {
    type: 'van',
    color: 'green',
    plate: 'GUA1234'
  },
  {
    type: 'bicycle',
    color: 'pink',
    plate: 'IMB1234'
  },
]);
