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

// process GET requests on /noshes/id/edit
router.get('/:id/edit', (req, res) => {
  Nosh.findById(req.params.id).then(nosh => {
    // Render the edit form w/fields prepopulated by passing the found Nosh to hbs template
    res.render('edit', nosh);
  });
});

// edit processes PUT requests on /todos/id'
router.put('/:id', (req, res) => {
  Nosh.findOneAndUpdate({ _id: req.params.id }, nosh, { new: true }).then(
    nosh => {
      res.redirect('/');
    }
  );
});


module.exports = router;
