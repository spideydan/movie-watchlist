const mongoose = require('mongoose')

const MovieSchema = new mongoose.Schema({
  movieId: {
    type: String,
    required: true
  },
  movie: {
    type: String,
    required: true
  },
  poster: {
    type: String
  },
  completed: {
    type: Boolean,
    required: true
  },
  userId: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Movie', MovieSchema)
