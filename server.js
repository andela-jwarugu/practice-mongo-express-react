const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

const env = process.env.NODE_ENV;
var DB_URI;

if(env === 'testing'){
  DB_URI = 'mongodb://localhost/practice-mongo-express-react-test';
} else {
  DB_URI = 'mongodb://localhost/practice-mongo-express-react-dev';
}

mongoose.connect(DB_URI, function(err) {
  if(err){
    console.log('Error occured: ', err);
  } else {
    console.log('Successful database connect', DB_URI);
  }
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', function(req, res) {
  res.send('hello world');
})

app.listen(3000, function() {
  console.log('Listening on port 3000');
})

module.exports = app;
