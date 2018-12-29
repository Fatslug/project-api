var express = require('express');
var app = express();
var db = require('./db');
var port = process.env.PORT || 3000;

app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, authorization');

  // Pass to next layer of middleware
  return next();
});

var ProjectsController = require('./user/ProjectsController');
express.use('/projects', ProjectsController);

var server = app.listen(port, function() {
  console.log('Express server listening on port ' + port);
});