const express = require('express');
const morgan = require('morgan');

const routes = require('./routes/index');
const errorHandlers = require('./handlers/errorHandlers');

const app = express();

app.use(morgan('dev'));
// Takes the raw requests and turns them into usable properties on req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/', routes);

// If that above routes didnt work, we 404 them and forward to error handler
app.use(errorHandlers.notFound);

// Otherwise this was a really bad error we didn't expect! Shoot eh
if (app.get('env') === 'development') {
  /* Development Error Handler - Prints stack trace */
  app.use(errorHandlers.developmentErrors);
}

module.exports = app;
