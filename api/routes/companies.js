const express = require('express');
const { Op } = require('sequelize');
const router = express.Router();
const { Companies } = require('../models');

router.get('/', async (req, res) => {
  try {
    const companies = await Companies.findAll();
    res.status(200).send(companies);
  } catch (error) {res.status(400).send(error)}
});

module.exports = router;