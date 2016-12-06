const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://localhost/practice-mongo-express-react', function(err) {
  if(err){
    console.log('Error occured: ', err);
  } else {
    console.log('Success DB connect');
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
