var $ = require('jquery')

var router = require('./router.js')

// router.route('/', function () {
//  console.log('home')
//  this.next()
// })

$(document).ready(function(){
  initialize()
})

var Helm = require('./helm/helm.js')
function initialize(){
  Helm($('#container')).initialize()
  router.goto(window.location.pathname)
}
