const express = require('express');
const { Op } = require('sequelize');
const router = express.Router();
const { Companies } = require('../models');

router.get('/', async (req, res) => {
  try {
    const company = await Companies.findAll();
    res.status(200).send(company);
  } catch (error) {res.status(400).send(error)}
});

router.get('/:driverId', async (req, res) => {
  try {
    let search = req.params.search;
    search = search.toLowerCase();
    const company = await Companies.findAll({
      where: {[Op.or]: [{ name: search },{ code: search },]},
    });
    res.status(200).send(company);
  } catch (error) {console.log(error)}
});

module.exports = router;