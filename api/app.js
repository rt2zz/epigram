var server = require('./server/server.js')

server.plugin(require('./plugins/user'))
server.plugin(require('./plugins/auth'))

var tlsConfig = require('./tls/config.js')

server.pipeline('postRequest', {stuff: function(request, remand){
    console.log('postReq')
    remand('stuff')
    }
  }
)

server.port(4002).tls(tlsConfig).start(function(){
  console.log('server started')
})
