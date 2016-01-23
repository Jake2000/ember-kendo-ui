import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('k-numerictextbox', 'Integration | Component | k numerictextbox', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{k-numerictextbox}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:"
  this.render(hbs`
    {{#k-numerictextbox}}
      template block text
    {{/k-numerictextbox}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
