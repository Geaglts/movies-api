const express = require('express');
const morgan = require('morgan');
const debug = require('debug')('app:server');
const app = express();

const { config } = require('./config');
const moviesApi = require('./routes/movies');
const userMoviesApi = require('./routes/userMovies');
const authApi = require('./routes/auth');

const {
  logErrors,
  wrapError,
  errorHandler,
} = require('./utils/middleware/errorHandlers');

const notFoundHandler = require('./utils/middleware/notFoundHandler');

// morgan
app.use(morgan(config.dev ? 'dev' : 'common'));

// body parser
app.use(express.json());

// routes
moviesApi(app);
userMoviesApi(app);
authApi(app);

// Catch 404
app.use(notFoundHandler);

// Errors middleware
app.use(logErrors);
app.use(wrapError);
app.use(errorHandler);

app.listen(config.port, () => {
  debug(`Listening http://localhost:${config.port}`);
});
