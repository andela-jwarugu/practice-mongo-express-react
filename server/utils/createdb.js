// Create db

const mongoose = require('mongoose');
const Movie = require('../models/movie');
const Genre = require('../models/genre');
const seed = require('./seed');

mongoose.connect('mongodb://localhost/practice-mongo-express-react-test', function(err) {
  if(err){
    console.log(err);
  }
})

mongoose.connection.on('connected', function (err){
  Movie.create(seed.movies, function() {
    if (err) {
      console.log(err);
    } else {
      console.log('Movies created');
    }

  })

  Genre.create(seed.genres, function() {
    if (err) {
      console.log(err);
    } else {
      console.log('Genre created');
    }
      process.exit();
  })
})
