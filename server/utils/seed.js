const mongoose = require('mongoose');

module.exports = {
  movies: [{
    title: 'Test',
    description: 'Test',
    genre: mongoose.Types.ObjectId("5846f4e0c7689b3b701429a2")
  }, {
    title: 'Test1',
    description: 'Test1',
    genre: mongoose.Types.ObjectId("5846f4e0c7689b3b701429c2")
  }, {
    title: 'Test2',
    description: 'Test2',
    genre: mongoose.Types.ObjectId("5846f4e0c7689b3b701429c2")
  }],

  genres: [{
    _id: mongoose.Types.ObjectId("5846f4e0c7689b3b701429a2"),
    title: 'Horror'
  }, {
    _id: mongoose.Types.ObjectId("5846f4e0c7689b3b701429c2"),
    title: 'Drama'
  }, {
    _id: mongoose.Types.ObjectId("5846f4e0c7689b3b701429d2"),
    title: 'Fantasy'
  }]
}
