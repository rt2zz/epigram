var routes = require('routes')
var router = routes()

var https = require('hardhttps')

var url = require('url')

var st = require('st')

var defaultConfig = require('./config.js')

function App(config){
  this.config = config || defaultConfig
  this.decorate = function(req, res, cb){cb(req, res)}
}

App.prototype.router = router

App.prototype.start = function(){
  var self = this
  var site = function(req, res){
    self.decorate(req, res, function(req, res){
      var parsed = url.parse(req.url)
      var pathname = parsed.pathname
      var route = self.router.match(pathname)
      if(!route) return res.error(404)
      req.route = route
      route.fn(req, res)
    })
  }

  https.createServer(self.config.https, site).listen(self.config.port)
}

App.prototype.route = function(path, handler){
  router.addRoute(path, handler)
}

App.prototype.static = function(dir, slug){
  var mount = st(dir, slug)
  router.addRoute(slug+'/*', function(req, res){
    if(!mount(req, res)) return res.error(404)
  })
}

module.exports = App
module.exports.new = function(config){
  return new App(config)
}
