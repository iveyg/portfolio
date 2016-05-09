var express = require('express');
var router = express.Router();

/* GET stack page. */
router.get('/', function(req, res, next) {
  res.render('htmlcss', {title: 'HTML & CSS'});	
});

router.get('/fooddelivery', function(req, res, next) {
  res.render('htmlcss', {
  	title:'HTML & CSS',
  	selected: 'htmlcss'
  });	
});

module.exports = router;
