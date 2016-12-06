const Genre = require('../models/genre');

module.exports = {
  create: function(req, res) {
    let genre = new Genre();

    genre.title = req.body.title;

    genre.save(function(err, genre) {
      if(err) {
        if(err.code === 11000) {
          res.status(400).send({
            message: 'Duplicate Entry'
          })
        } else {
          res.status(500).send({
            message: 'Error occured while saving genre'
          })
        }
      } else {
        res.status(200).send(genre);
      }
    })
  },

  find: function(req, res) {
    Genre.find({}, function(err, genres) {
      if(err) {
        res.status(500).send({
          message: 'Error while finding genres'
        })
      } else {
        res.status(200).send(genres);
      }
    })
  }
}
