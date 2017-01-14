var express = require('express');
var app = express();

var fs = require('fs');
var path = require('path');
var bodyParser = require('body-parser');

var Skill = require('./db').Skill

app.use(bodyParser.json());

app.get('/', function (req, res) {
  Skill.find({}, function(err, skills) {
    res.send({data:skills})
  })
});

app.listen(3000, function() {
  console.log('app listening on port 3000');
});
