var Stream = require('stream')

server.pipeline('postRequest', [
  [
    {test: function(request, remand){
      setTimeout(function(){
        console.log('running test1')
        remand('t1')
      },10)
    }},
    {test2: function(request, remand){console.log('running test2'); remand('t2')}}
  ],
  {respond: function(request, remand){
    remand(null)
  }}
])

server.pipeline('postResponse', [
  {wait: wait},
  {after: testLog}
])




server.route({
    path: '/tE',
    handler: function(request, remand){
      //@TODO how to combine these into 1
      request.reply('tErEsA')
      remand('replied')
    }
  })

function wait(request, remand){
  setTimeout(function(){
    remand('waited')
  }, 1000)
}

function testLog(request, remand){
  // request.raw.response.end()
  console.log('TEST LOG', request.raw.request.url)
  remand('done')
}
