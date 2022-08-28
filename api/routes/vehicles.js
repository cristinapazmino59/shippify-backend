const express = require('express');
const { Op } = require('sequelize');
const router = express.Router();
const { Vehicles } = require('../models');

router.get('/', async (req, res) => {
  try {
    const company = await Vehicles.findAll();
    res.status(200).send(company);
  } catch (error) {res.status(400).send(error)}
});

router.get('/:driverId', async (req, res) => {
  try {
    let driverId = req.params.driverId;
    const vehicles = await Vehicles.findAll({
      where: {[Op.or]: [{ driverId: driverId }]},
    });
    res.status(200).send(vehicles);
  } catch (error) {console.log(error)}
});

router.post('/', async (req, res) => {    
  try {
    let vehicle = await Vehicles.create(JSON.parse(JSON.stringify(req.body)));
      res.status(201).send(vehicle);
    } catch (error) {
    res.status(400).send(error);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updatedVehicle = await Vehicles.update(req.body, {where: { id: id }})
    const vehicle = await Vehicles.findOne({ where: { id } });
    res.status(201).send(vehicle)
  } catch (error) {res.status(400).send(error)}
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updatedVehicle = await Vehicles.update(req.body, {where: { id: id }})
    const vehicle = await Vehicles.findOne({ where: { id } });
    res.status(201).send(vehicle)
  } catch (error) {res.status(400).send(error)}
});

module.exports = router;