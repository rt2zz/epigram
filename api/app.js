var Eqi = require('eqi')
var eqstock = require('eqstock')

var tlsConfig = require('./tls/config.js')

var server = Eqi.createServer(4002).tls(tlsConfig)

server.extend(require('eqrouter'))
server.extend(eqstock.session, {keys: ['key1', 'key2']})

server.plugin(require('./plugins/auth'))

server.start(function(){
  console.log('server started')
})
