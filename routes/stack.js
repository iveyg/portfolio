var express = require('express');
var router = express.Router();

/* GET stack page. */
router.get('/', function(req, res, next) {
  res.render('stack', {title: 'Technology Stack & Philosophy'});	
});

module.exports = router;
