const Movie = require('../models/movie')

// All the different operations you can do in the movie list
module.exports = {
    getMovies: async (req, res) => {
        console.log(req.user)
        try {
            const movieItems = await Movie.find({ userId: req.user.id })
            const itemsLeft = await Movie.countDocuments({ userId: req.user.id, completed: false })
            res.render('movies.ejs', { movies: movieItems, left: itemsLeft, user: req.user })
        } catch (err) {
            console.log(err)
        }
    },
    // add movie to 'to watch' list
    addMovie: async (req, res) => {
        try {
            await Movie.create({ movie: req.body.movieItem, completed: false, userId: req.user.id })
            console.log('Movie has been added!')
            res.redirect('/movies')
        } catch (err) {
            console.log(err)
        }
    },
    // mark a movie as watched
    watched: async (req, res) => {
        try {
            await Movie.findOneAndUpdate({ _id: req.body.movieIdFromJSFile }, {
                completed: true
            })
            console.log('Mark Watched')
            res.json('Mark Watched')
        } catch (err) {
            console.log(err)
        }
    },
    // mark a movie as unwatched
    unwatched: async (req, res) => {
        try {
            await Movie.findOneAndUpdate({ _id: req.body.movieIdFromJSFile }, {
                completed: false
            })
            console.log('Marked Unwatched')
            res.json('Marked Unwatched')
        } catch (err) {
            console.log(err)
        }
    },
    // delete a movie on the list
    deleteMovie: async (req, res) => {
        console.log(req.body.movieIdFromJSFile)
        try {
            await Movie.findOneAndDelete({ _id: req.body.movieIdFromJSFile })
            console.log('Deleted Movie')
            res.json('Deleted It')
        } catch (err) {
            console.log(err)
        }
    }
}    