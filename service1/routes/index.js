var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/service1', function(req, res, next) {
  res.send('Service 1');
});

module.exports = router;
