var Account = require('./account.model.js')

exports.plugin = function(plugin, options, next) {
  // plugin.service('Account', account)
  console.log('inplugin')
  next();
};

exports.route = function(plugin, options, next){
  console.log('in routes')
  plugin.preHandler({'a2': startFn})

  plugin.route({
    path: '/admin',
    method: "GET",
    auth: 'required',
    preHandler: {
           tester : function(request, remand){
             console.log('TEST REMAND')
             remand(true)
           }
          },
    handler: function(request, reply) {
      var cookies = request.getCookies()
      cookies.set('testkey1', 'val3')
      request.session.set('a', {once: 'hi3'})
      reply("This is a AUTHAUTH from a route defined in my plugin!");
    }
  })
  plugin.route({
    path: '/login',
    method: "GET",
    auth: 'none',
    preHandler: {
           tester : function(request, remand){
             console.log('TEST login')
             remand(true)
           }
          },
    handler: function(request, reply) {
      login(request, {eg: 'data'})
      reply("You just logged in!");
    }

  });
  next()
}

function startFn(request, remand){
  console.log('startfn')
  remand('start')
}

function login(request, account){
  var session = request.getSession()
  session.set('user', account)
}
