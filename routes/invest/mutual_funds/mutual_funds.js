var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('mutual_funds/mutual_funds', { title: 'Mutual Funds' });
});

module.exports = router;