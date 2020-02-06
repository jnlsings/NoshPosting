const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/nosh');

module.exports = mongoose;
