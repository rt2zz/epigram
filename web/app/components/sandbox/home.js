var View = require('ampersand-view');
var _ = require('lodash');

var template = require('./home.hbs');

module.exports = View.extend({
    pageTitle: 'home',
    template: template
});
