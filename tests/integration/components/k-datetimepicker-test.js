import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('k-datetimepicker', 'Integration | Component | k datetimepicker', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{k-datetimepicker}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:"
  this.render(hbs`
    {{#k-datetimepicker}}
      template block text
    {{/k-datetimepicker}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
