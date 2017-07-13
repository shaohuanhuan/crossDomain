/**
 * @author monkeywang
 * Date: 17/3/31
 */
var https = require('https');
var hostname = require('./config').hostname
var querystring = require("querystring");

/**
 * HttpRequest 类
 * @constructor
 */
var HttpRequest = function(){};
/**
 * function 请求函数
 * @param opts
 */
HttpRequest.prototype.requestUrl = function (opts) {
  var bodyString = querystring.stringify(opts.params);
  var options = {
    hostname: hostname,
    rejectUnauthorized:false,
    port: 443,
    path: opts.url,
    method: opts.method,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Length': Buffer.byteLength(bodyString)
    }
  };
  var req = https.request(options, (res) => {
    res.on('data', (d) => {
      opts.cb(d)
    });
  });
  req.on('error', (e) => {
    console.error(e);
  });
  req.write(bodyString)
  req.end();
};
/**
 * post 请求
 * @param url
 * @param params
 * @param cb
 */
HttpRequest.prototype.post = function(url, params, cb){
 this.requestUrl({
   method: 'POST',
   url: url,
   params: params,
   cb: cb
 })
};
/**
 * get 请求
 * @param url
 * @param params
 * @param cb
 */
HttpRequest.prototype.get = function(url, params, cb){
  if(arguments.length === 2){
    cb = params;
    params = undefined;
  }
  this.requestUrl({
    method: 'GET',
    url: url,
    params: params,
    cb: cb
  })
};

module.exports = new HttpRequest;
