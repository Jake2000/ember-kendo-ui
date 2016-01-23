import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('k-colorpicker', 'Integration | Component | k colorpicker', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{k-colorpicker}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:"
  this.render(hbs`
    {{#k-colorpicker}}
      template block text
    {{/k-colorpicker}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
