var Equip = require('equipp')

var tlsConfig = require('./tls/config.js')

var server = Equip.createServer(4002).tls(tlsConfig)

server.extend('equipp-router')

// server.plugin('auth')

server.start(function(){
  console.log(__dirname)
  console.log('server started')
})
