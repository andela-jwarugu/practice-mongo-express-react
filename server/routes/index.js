const movie = require('../controllers/movie');
const genre = require('../controllers/genre');

module.exports = function (app) {
  app.post('/api/movies', movie.create)
  app.get('/api/movies', movie.find)
  app.post('/api/genres', genre.create)
  app.get('/api/genres', genre.find)
}
