const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/nosh', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false // <-- Add this
  });

module.exports = mongoose;
