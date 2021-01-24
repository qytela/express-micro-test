var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/service2', function(req, res, next) {
  res.send('Service 2');
});

module.exports = router;
