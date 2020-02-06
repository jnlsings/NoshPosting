const express = require('express');
<<<<<<< HEAD
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

module.exports = router;
=======

const Nosh = require('../models/Nosh');

const router = express.Router();
>>>>>>> controller + index + connection setup
