const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  title: {
    type: String
  },
  description: {
    type: String
  },
  genre: {
    type: Schema.Types.ObjectId,
    ref: 'Genre',
    required: true
  }
})

module.exports = mongoose.model('Movie', movieSchema);
