// This view is responsible for rendering all content that goes into
// <html>. It's initted right away and renders itself on DOM ready.

// This view also handles all the 'document' level events such as keyboard shortcuts.
var View = require('ampersand-view');
var ViewSwitcher = require('ampersand-view-switcher');
var _ = require('lodash');
var rootTemplate = require('./template.hbs')
var domify = require('domify')
var $ = require('jquery')

var app = require('../../app.js')

var HelmView = require('../helm/view.js')

module.exports = View.extend({
  template: rootTemplate,
  initialize: function () {
    //app.router.history.on('route', this.updateActiveNav, this);
  },
  events: {
    'click a[href]': 'handleLinkClick'
  },
  render: function () {
    var self = this
    var newDom = domify(this.template())
    this.el.parentNode.replaceChild(newDom, this.el)
    this.el = newDom

    // init and configure our page switcher
    this.pageSwitcher = new ViewSwitcher(this.getByRole('main'), {
      show: function (newView, oldView) {
        // it's inserted and rendered for me
        document.title = _.result(newView.pageTitle) || "AmpTest";
      }
    });

    var helmView = new HelmView({
      el: self.getByRole('helm')
    });
    helmView.render();

    return this;
  },

  setPage: function (view) {
    // tell the view switcher to render the new one
    this.pageSwitcher.set(view);
  },

  handleLinkClick: function (e) {
    console.log('handling ink click!')
    var t = $(e.target);
    var aEl = t.is('a') ? t[0] : t.closest('a')[0];
    var local = window.location.host === aEl.host;
    var path = aEl.pathname.slice(1);

    // if the window location host and target host are the
    // same it's local, else, leave it alone
    if (local) {
      e.preventDefault();
      app.navigate(path);
    }
  },
});
