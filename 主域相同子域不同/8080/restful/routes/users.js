var express = require('express');
var router = express.Router();
var httpRequest = require('../common/https-request')
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('login');
});
router.get('/key', function (req, res, next) {
  httpRequest.get('/bshop/login/captcha/get', {}, function (response) {
    res.send(response)
  })
});
router.post('/login', function (req, res, next) {
  var loginAccount = req.body.loginAccount;
  var password = req.body.password;
  httpRequest.post('/bshop/login', {loginAccount: loginAccount, password: password}, function (response) {
    res.send(response.data)
  })
})

module.exports = router;
