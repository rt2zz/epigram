var Hapi = require('hapi');

var tls = require('./tls/config.js')

// Create a server with a host and port
var server = Hapi.createServer('localhost', 4002, {tls: tls, cache: 'catbox-memory'});

var yarOptions = {
    cookieOptions: {
        password: 'ae34fjjj44#$4333fffefesvsd'
    }
};

// Add the route
server.route({
  method: 'GET',
  path: '/hello',
  handler: function (request, reply) {
    reply('hello world');
  }
});

server.pack.require({
    // "yar": yarOptions,
    "lout": {},
    "./block/user": {}
}, function(err) {
    if (err) throw err;
    server.start(function() {
        console.log("Hapi server started @ " + server.info.uri);
    });
});
