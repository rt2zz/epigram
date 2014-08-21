var View = require('ampersand-view');
var _ = require('lodash');

var template = require('./test.hbs');

module.exports = View.extend({
    pageTitle: 'test',
    template: template
});
