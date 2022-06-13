const { Router } = require('express');
const { Episode } = require('../models/Episode');

module.exports = Router().get('/', async (req, res) => {
  const epiList = await Episode.getByAll();
  res.json(epiList);
});
