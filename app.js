// Requiring in all of the modules to use
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const swig = require('swig');
const routes = require('./routes/index');
const db = require('./config/keys').db;

// Starting the application up and setting up the default port if one isn't available
const app = express();
const port = 5000;

// Setting up the port to equal the environment port OR the default variable port
const PORT = process.env.PORT || port;

// Connecting the mongoose database to the database
mongoose.connect(db);

// Setup View Engine
app.engine('html', swig.renderFile);

// Since we are using a view engine we are using app set for views
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

// Using the middleware for express and our routes
app.use(express.static(path.join(__dirname, 'public')));
// Setting the middleware for body parser to use inside of the application
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use('/', routes);

app.listen(PORT, () => {
  console.log(`App is listening on port: ${PORT}`);
});
