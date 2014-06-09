
exports.route = function(plugin, options, next){
  plugin.service('test', 'valueasdf')

  plugin.route({
    path: '/test',
    auth: 'none',
    handler: function(request, reply){
      console.log('services', plugin.server.services, plugin.server._servicesMeta)
      reply('Great')
    }
  })
  next()
}
