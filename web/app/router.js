/*global me, app*/
var Router = require('ampersand-router');
var app = require('./app.js')
var HomePage = require('./components/sandbox/home.js');
var TestPage = require('./components/sandbox/test.js')
var RegisterPage = require('./components/auth/register.view.js')
// var CollectionDemo = require('./pages/collection-demo');
// var InfoPage = require('./pages/info');
// var PersonAddPage = require('./pages/person-add');
// var PersonEditPage = require('./pages/person-edit');
// var PersonViewPage = require('./pages/person-view');


module.exports = Router.extend({
    routes: {
        '': 'home',
        'test': 'test',
        'register': 'register'
    },

    // ------- ROUTE HANDLERS ---------
    home: function () {
      console.log('home', HomePage, app.setPage)
      app.setPage(new HomePage())
    },

    test: function () {
      console.log('test')
      app.setPage(new TestPage())
    },

    register: function () {
      app.setPage(new RegisterPage({email: 'testemail'}))
    },
    //
    // info: function () {
    //     this.trigger('newPage', new InfoPage({
    //         model: me
    //     }));
    // },
    //
    // personAdd: function () {
    //     this.trigger('newPage', new PersonAddPage());
    // },
    //
    // personEdit: function (id) {
    //     this.trigger('newPage', new PersonEditPage({
    //         id: id
    //     }));
    // },
    //
    // personView: function (id) {
    //     this.trigger('newPage', new PersonViewPage({
    //         id: id
    //     }));
    // },

    // catchAll: function () {
    //     this.redirectTo('');
    // }
});
