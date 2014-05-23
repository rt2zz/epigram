exports.register = function(plugin, options, next) {
  plugin.route({
      path: '/test',
      method: "GET",
      handler: function(request, reply) {
        // request.session.set('a', {once: 'hi'})
        reply("This is a reply from a route defined in my plugin!");
      }
  });
  next();
};
