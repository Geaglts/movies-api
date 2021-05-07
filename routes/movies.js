const express = require('express');
const { moviesMock } = require('../utils/mocks/movies');

function moviesAPI(app) {
    const router = express.Router();
    app.use('/api/movies', router);

    router.get('/', async function (req, res, next) {
        try {
            const movies = await Promise.resolve(moviesMock);
            res.status(200).json({ data: movies, messages: 'movies listed' });
        } catch (error) {
            next(err);
        }
    });

    router.get('/:movieId', async function (req, res, next) {
        try {
            const retrievedMovie = await Promise.resolve(moviesMock[0]);
            res.status(200).json({
                data: retrievedMovie,
                messages: 'movie retrieved',
            });
        } catch (error) {
            next(err);
        }
    });

    router.post('/', async function (req, res, next) {
        try {
            const createdMovieId = await Promise.resolve(moviesMock[0].id);
            res.status(201).json({
                data: createdMovieId,
                messages: 'movie created',
            });
        } catch (error) {
            next(err);
        }
    });

    router.put('/:movieId', async function (req, res, next) {
        try {
            const updatedMovieId = await Promise.resolve(moviesMock[0].id);
            res.status(200).json({
                data: updatedMovieId,
                messages: 'movie updated',
            });
        } catch (error) {
            next(err);
        }
    });

    router.delete('/:movieId', async function (req, res, next) {
        try {
            const deletedMovieId = await Promise.resolve(moviesMock[0].id);
            res.status(200).json({
                data: deletedMovieId,
                messages: 'movie deleted',
            });
        } catch (error) {
            next(err);
        }
    });
}

module.exports = moviesAPI;
