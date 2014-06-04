var session = require('eqstock').session.remand

exports.init = function(plugin, options, next) {
  plugin.dependency('equipp-session')

  var auth = {
    start: startFn,
  }

  plugin.pre([{'a2': startFn}])

  plugin.route({
    path: '/admin',
    method: "GET",
    pre: [
      {'session' : session}
    ],
    handler: function(request, reply) {
      var cookies = request.cookies
      cookies.set('testkey1', 'val2')
      request.session.set('a', {once: 'hi2'})
      reply("This is a AUTHAUTH from a route defined in my plugin!");
    }
  });

  plugin.share('auth', auth)

  next();
};

function startFn(request, remand){
  console.log('AUTH')
  remand(null)
}
