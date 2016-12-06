const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const genreSchema = new Schema({
  title: {
    type: String
  }
})

const Genre = mongoose.model('Genre', genreSchema);
