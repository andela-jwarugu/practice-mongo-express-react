const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./server/routes');
const app = express();

const env = process.env.NODE_ENV;
var DB_URI;

if(env === 'testing'){
  DB_URI = 'mongodb://localhost/practice-mongo-express-react-test';
} else {
  DB_URI = 'mongodb://localhost/practice-mongo-express-react-dev';
}

mongoose.Promise = global.Promise; 
mongoose.connect(DB_URI, function(err) {
  if(err){
    console.log('Error occured: ', err);
  } else {
    console.log('Successful database connect', DB_URI);
  }
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

routes(app);

app.listen(3000, function() {
  console.log('Listening on port 3000');
})

module.exports = app;
