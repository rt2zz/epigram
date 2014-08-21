var View = require('ampersand-view');
var registerTemplate = require('./register.hbs')

AmpersandModel = require('ampersand-model');

var Me = AmpersandModel.extend({
    type: 'user',
    props: {
        id: ['string'],
        email: ['string', true, ''],
    }
});


module.exports = View.extend({
  template: registerTemplate,
  props: {
    email: 'any'
  },
  bindings: {
    'email': [{
            type: 'attribute',
            selector: '[role=emailInput]',
            name: 'value'
        },
        { role: 'emailShow'}
        ]
  },
  initialize: function(data){
    this.email = 'teste'
    console.log('init')
    this.handleBlur = this.handleBlur.bind(this);
    this.handleInputChanged = this.handleInputChanged.bind(this);

    var model = new AmpersandModel({email: 'asdf'})
    console.log('model', model, 'email', model.email)
    this.model = model
  },
  initInputBindings: function () {
    this.input.addEventListener('blur', this.handleBlur, false);
    this.input.addEventListener('input', this.handleInputChanged, false);
  },
  handleBlur: function(){
    console.log('BLUR', this.email)
  },
  handleInputChanged: function(){
    this.email = this.input.value
    console.log('Changed', this.input)
  },
  render: function () {
      this.renderWithTemplate();
      this.input = this.get('input')
      // switches out input for textarea if that's what we want
      // this.handleTypeChange();
      this.initInputBindings();
      // this.setValue(this.value);
  },
})
