/*global app, me, $*/
var _ = require('lodash');
// var logger = require('andlog');
// var config = require('clientconfig');

// var tracking = require('./helpers/metrics');
// var HelmView = require('./views/helm');

// var Me = require('./models/me');
// var People = require('./models/person-collection');
var domReady = require('domready');


module.exports = {
  boot: function (RootView) {
    var self = this;

    this.router = new Router();

    domReady(function () {
      // Main is the primary page contents.  Helm is the "sidebar".
      var rootView = self.root = new RootView({
        el: document.body
      });

      rootView.render();

      // we have what we need, we can now start our router and show the appropriate page
      self.router.history.start({pushState: true, root: '/'});
    });
  },

  // This is how you navigate around the app.
  // this gets called by a global click handler that handles
  // all the <a> tags in the app.
  // it expects a url without a leading slash.
  // for example: "costello/settings".

  setPage: function(view){
    this.root.setPage(view)
  }
}

var Router = require('./router.js');
var RootView = require('./components/root/view.js');

module.exports.boot(RootView);
