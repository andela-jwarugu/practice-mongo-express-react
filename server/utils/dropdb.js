// Drop db

const mongoose = require('mongoose');
const Movie = require('../models/movie');
const Genre = require('../models/genre');

mongoose.connect('mongodb://localhost/practice-mongo-express-react-test', function(err) {
  if(err){
    console.log(err);
  }
})

mongoose.connection.on('connected', function (err){
  Movie.remove({}, function() {
    if (err) {
      console.log(err);
    } else {
      console.log('Movies deleted');
    }

  })

  Genre.remove({}, function() {
    if (err) {
      console.log(err);
    } else {
      console.log('Genre deleted');
    }
    process.exit();
  })

})
