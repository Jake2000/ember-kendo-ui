import Ember from 'ember';
import SerializeMixin from '../../../mixins/serialize';
import { module, test } from 'qunit';

module('Unit | Mixin | serialize');

// Replace this with your real tests.
test('it works', function(assert) {
  let SerializeObject = Ember.Object.extend(SerializeMixin);
  let subject = SerializeObject.create();
  assert.ok(subject);
});
