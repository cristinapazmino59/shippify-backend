const express = require('express');
const router = express.Router();
const { Op } = require('sequelize');
const { Drivers } = require('../models');

router.get('/', async (req, res) => {
  try {
    const drivers = await Drivers.findAll();
    res.status(200).send(drivers);
  } catch (error) {res.status(400).send(error)}
});

router.get('/:driverEmail', async (req, res) => {
  try {
    let driverEmail = req.params.driverEmail;
    const driver = await Drivers.findOne({
      where: {[Op.or]: [{ email: driverEmail }]},
    });
    if (driver) res.status(200).send(driver);
    else res.status(404).send("No driver found");
   
  } catch (error) {console.log(error)}
});

router.post('/', async (req, res) => {    
    try {
      let driver = await Drivers.create(JSON.parse(JSON.stringify(req.body)));
        res.status(201).send(driver);
      } catch (error) {
      res.status(400).send(error);
    }
  });

router.put('/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const updatedDriver = await Drivers.update(req.body, {where: { id: id }})
      const driver = await Drivers.findOne({ where: { id } });
      res.status(201).send(driver)
    } catch (error) {res.status(400).send(error)}
});

module.exports = router;