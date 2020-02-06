const express = require('express');
const Nosh = require('../models/Nosh');

const router = express.Router();

// get all Noshes
router.get('/', (req, res) => {
  Nosh.find({})
    .then(noshes => {
      res.render('index', { noshes });
    })
    .catch(err => console.log(err));
});

//make a new nosh
router.get('/new', (req, res) => {
  res.render('new');
});


module.exports = router;
