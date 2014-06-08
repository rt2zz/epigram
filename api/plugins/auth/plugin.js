var session = require('eqstock').session.remand

exports.plugin = function(plugin, options, next) {
  plugin.dependency('equipp-session')

  var session = request.getSession()
  if(session.user)
    remand(true)
  else
    request.error('403'); remand.break();

  var auth = {
    start: startFn,
  }

  plugin.preHandler({'a2': startFn})

  plugin.route({
    path: '/admin',
    method: "GET",
    preHandler: [
      {'session' : session}
    ],
    handler: function(request, reply) {
      var cookies = request.cookies
      cookies.set('testkey1', 'val2')
      request.session.set('a', {once: 'hi2'})
      reply("This is a AUTHAUTH from a route defined in my plugin!")
    }
  });


  plugin.expose('auth', auth)
  plugin.exposed.auth

  var Account = plugin.model('account')

  next();
};

function startFn(request, remand){
  console.log('AUTH')
  remand(null)
}

var Account = plugin.get('account').models
