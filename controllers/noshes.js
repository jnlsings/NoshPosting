const express = require('express');
const Nosh = require('../models/Nosh');

const router = express.Router();

// get all Noshes
router.get('/', (req, res) => {
  Nosh.find({})
    .then(noshes => {
      res.render('index', { noshes });
    })
    .catch(console.error);
});

// link to make a new nosh/render new hbs
router.get('/new', (req, res) => {
  res.render('new');
});

// make a new Nosh
router.post('/', (req, res) => {
  Nosh.create(req.body)
    .then(() => {
      res.redirect('/');
    })
    .catch(console.error);
});

// process GET requests on /noshes/id/edit
router.get('/:id/edit', (req, res) => {
  Nosh.findById(req.params.id).then(nosh => {
    // Render the edit form w/fields prepopulated by passing the found Nosh to hbs template
    res.render('edit', nosh);
  });
});

router.delete('/:id', (req, res) => {
    Nosh.findOneAndRemove({_id: req.params.id}).then(()=> {
        res.redirect('/');
    })
})

router.get('/:id', (req, res) => {
  Nosh.findById(req.params.id)
    .then(nosh => {
      res.render('show', nosh);
    })
    .catch(console.error);
});

// edit processes PUT requests on /id'
router.put('/:id', (req, res) => {
  const nosh = {
    title: req.body.title,
    description: req.body.description,
    ingredients: req.body.ingredients,
    instructions: req.body.instructions
  };
  Nosh.findOneAndUpdate({ _id: req.params.id }, nosh, { new: true }).then(
    () => {
      res.redirect('/');
    }
  );
});

module.exports = router;
