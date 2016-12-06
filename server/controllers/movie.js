const Movie = require('../models/movie');
const Genre = require('../models/genre');

module.exports = {
  create: function (req, res) {
    let movie = new Movie();

    movie.title = req.body.title;
    movie.description = req.body.description;

    Genre.findOne({title: req.body.genre}, function(err, genre){
      if(err) {
        res.status(500).send({
          message: 'Error occured while finding genre'
        })
      } else {
        movie.genre = genre._id;

        movie.save(function(err, movie) {
          if(err) {
            if(err.code === 11000) {
              res.status(400).send({
                message: 'Duplicate entry'
              });
            } else {
              res.status(500).send({
                message: 'Error occured while saving movie'
              });
            }

          } else {
            res.status(200).send(movie);
          }
        })
      }
    })
  },

  find: function (req, res) {
    let title = req.query.title;
    let genre = req.query.genre;

    let responseCallback = function(err, movies) {
      if(err) {
        res.status(500).send({
          message: 'Error occured while finding movie'
        })
      } else {
        res.status(200).send(movies);
      }
    }

    if(title) {
      Movie.find({title: title}, responseCallback)
    } else if (genre) {
      Genre.findOne({title: genre}, function(err, genre){
        if(err){
          res.status(500).send({
            message: 'Error occured while finding genre'
          });
        } else {
          Movie.find({genre: genre._id}, responseCallback)
        }
      })
    } else {
      Movie.find({}).exec(responseCallback)
    }
  },
}
