var express = require('express');
var route = express.Router();

/* GET home page. */
route.get('/', function(req, res, next) {
  res.render('home.ejs');
  // res.render('index', { title: 'Express' });
});

module.exports = route;

