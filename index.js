const express = require('express');
const app = express();
const noshController = require('./controllers/noshes');
const title = require('express-title');
const favicon = require('serve-favicon')
const path = require('path')

app.use(favicon(path.join(__dirname, 'favicon.ico')));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'hbs');

app.set('title', 'NoshPit');

const methodOverride = require('method-override');
app.use(methodOverride('_method'));

app.use('/', noshController);

app.listen(4000, () => {
  console.log('app listening on port 4000');
});
