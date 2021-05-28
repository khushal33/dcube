var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('policies/pension-plan', { title: 'Compare & Buy Insurance Polcies' });
});

module.exports = router;