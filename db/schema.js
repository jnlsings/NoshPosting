const mongoose = require('./connection');

const NoshSchema = new mongoose.Schema({
  title: String,
  description: String,
  ingredients: String,
  instructions: String
});

const Nosh = mongoose.model('Nosh', NoshSchema);

module.exports = Nosh;
