const Nosh = require('../models/Nosh');
const seedData = require('./seeds.json');

// clear out Nosh collection
Nosh.remove({})
  .then(() => {
    // create collection using JSON in seed file
    return Nosh.collection.insert(seedData);
  })
  .then(() => {
    process.exit();
  });
