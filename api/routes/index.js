const express = require('express');

const router = express.Router();
const companiesRouter = require('./companies');
const driversRouter = require('./drivers');
const vehiclesRouter = require('./vehicles');

router.use('/companies', companiesRouter);
router.use('/drivers', driversRouter);
router.use('/vehicles', vehiclesRouter);

router.get('/', (req, res) => {
  res.send('Shippify App is alive!');
});

module.exports = router;