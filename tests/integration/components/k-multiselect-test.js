import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('k-multiselect', 'Integration | Component | k multiselect', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{k-multiselect}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:"
  this.render(hbs`
    {{#k-multiselect}}
      template block text
    {{/k-multiselect}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
