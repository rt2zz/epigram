var $ = require('jquery')

var tpl = {
  helm: require('./views/helm.hbs')
}

module.exports = function($el){
  return new Helm($el)
}

function Helm($el){
  this.$el = $el
  return this
}

Helm.prototype.initialize = function(){
  this.construct()
}

Helm.prototype.construct = function(){
  console.log('const time', this.$el)
  var model = {
    user:{
      uri:'/account',
      name: 'tE'
    }
  }
  this.$el.append(tpl.helm(model))
}
