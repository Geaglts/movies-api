const express = require('express');
const MoviesService = require('../services/movies');

function moviesAPI(app) {
    const router = express.Router();
    app.use('/api/movies', router);

    const moviesService = new MoviesService();

    router.get('/', async function (req, res, next) {
        const { tags } = req.query;
        try {
            const movies = await moviesService.getMovies({ tags });
            res.status(200).json({ data: movies, messages: 'movies listed' });
        } catch (error) {
            next(error);
        }
    });

    router.get('/:movieId', async function (req, res, next) {
        const { movieId } = req.params;
        try {
            const retrievedMovie = await moviesService.getMovie({ movieId });
            res.status(200).json({
                data: retrievedMovie,
                messages: 'movie retrieved',
            });
        } catch (error) {
            next(error);
        }
    });

    router.post('/', async function (req, res, next) {
        const { body: movie } = req;
        try {
            const createdMovieId = await moviesService.createMovie({ movie });
            res.status(201).json({
                data: createdMovieId,
                messages: 'movie created',
            });
        } catch (error) {
            next(error);
        }
    });

    router.put('/:movieId', async function (req, res, next) {
        const { movieId } = req.params;
        const { body: movie } = req;
        try {
            const updatedMovieId = await moviesService.updateMovie({
                movieId,
                movie,
            });

            res.status(200).json({
                data: updatedMovieId,
                messages: 'movie updated',
            });
        } catch (error) {
            next(error);
        }
    });

    router.delete('/:movieId', async function (req, res, next) {
        const { movieId } = req.params;
        try {
            const deletedMovieId = await moviesService.deleteMovie({ movieId });
            res.status(200).json({
                data: deletedMovieId,
                messages: 'movie deleted',
            });
        } catch (error) {
            next(error);
        }
    });
}

module.exports = moviesAPI;
