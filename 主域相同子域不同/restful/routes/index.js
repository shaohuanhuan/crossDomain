var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function (req, res, next) {
  var src = 'theme'+1+'/views/homePage/index';
  res.render(src, {
    title: '首页',
    version: version,
    them: 1
  });
});

module.exports = router;
