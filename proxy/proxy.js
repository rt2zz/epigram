/**
 *  Simple and temporary proxy to route api requests to api, and all other requests to web (static app)
 */

var https = require('hardhttps')
var http = require('http')

var config = require('./https/config.js')
https.createServer(config, onRequest).listen(4000)

var portDictionary = {
  web: 4001,
  apiv1: 4002
}

function onRequest(req, res) {
  var parts = req.url.split('/')
  var port = portDictionary.web
  var path = req.url
  var ht = http

  if(parts[1] == 'api' && parts[2] == 'v1'){
    port = portDictionary.apiv1
    path = '/'+parts.slice(3).join('/')
    ht = https
  }

  var options = {
    hostname: 'localhost',
    port: port,
    path: path,
    method: req.method,
    headers: req.headers
    // auth: req.auth,
    // agent: req.agent
  }

  var proxy = ht.request(options, function (resp) {
    resp.pipe(res);
  });

  req.pipe(proxy);
}
