const movie = require('../controllers/movie');

module.exports = function (app) {
  app.post('/api/movies', movie.create)
  app.get('/api/movies', movie.find)
}
