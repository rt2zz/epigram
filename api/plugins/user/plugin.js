exports.init = function(plugin, options, next) {
  // plugin.dependency('a')

  var auth = {
    start: startFn,
  }

  plugin.pre(startFn)

  plugin.route({
    path: '/admin',
    method: "GET",
    pre: [
      {'auth' : auth.start}
    ],
    handler: function(request, reply) {
      // request.session.set('a', {once: 'hi'})
      reply("This is a AUTHAUTH from a route defined in my plugin!");
    }
  });

  plugin.share('auth', auth)

  next();
};

function startFn(request, remand){
  remand(null)
}
