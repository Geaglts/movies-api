const express = require('express');
const app = express();

const { config } = require('./config');
const moviesAPI = require('./routes/movies');

moviesAPI(app);

app.listen(config.port, () => {
    console.log(`Listening http://localhost:${config.port}`);
});
