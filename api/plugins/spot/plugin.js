var Spot = require('./spot.model.js')

function plugin(plugin, options, next){
  
  plugin.phase(['user'], function(next){
    //do additional work after user plugin is initialized
  })

  plugin.endPhase(['user'], function(){
    //do work after all user plugin phases are complete
  })
}



module.exports.plugin = plugin
