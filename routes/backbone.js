var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('backbonetbl', {
  	title: 'Backbone',
  	selected: 'backbone'
  });
});

module.exports = router;