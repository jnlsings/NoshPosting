const mongoose = require('../db/connection');

const NoshSchema = new mongoose.Schema({
  title: String,
  description: String,
  ingredients: Array,
  instructions: Array,
  nutritionInfo: Array
});

const Nosh = mongoose.model('Nosh', NoshSchema);

module.exports = Nosh;
