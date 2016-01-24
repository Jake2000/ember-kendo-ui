import Ember from 'ember';
import OptionsMixin from '../../../mixins/options';
import { module, test } from 'qunit';

module('Unit | Mixin | options');

// Replace this with your real tests.
test('it works', function(assert) {
  let OptionsObject = Ember.Object.extend(OptionsMixin);
  let subject = OptionsObject.create();
  assert.ok(subject);
});
