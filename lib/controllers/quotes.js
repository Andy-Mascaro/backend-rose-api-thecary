const { Router } = require('express');
const { Quote } = require('../models/Quote');

module.exports = Router().post('/', async (req, res, next) => {
  try {
    const phrase = await Quote.insert(req.body);
    res.json(phrase);
  } catch (e) {
    next(e);
  }
});
