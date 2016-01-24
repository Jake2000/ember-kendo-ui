import Ember from 'ember';
import DatasourceMixin from '../../../mixins/datasource';
import { module, test } from 'qunit';

module('Unit | Mixin | datasource');

// Replace this with your real tests.
test('it works', function(assert) {
  let DatasourceObject = Ember.Object.extend(DatasourceMixin);
  let subject = DatasourceObject.create();
  assert.ok(subject);
});
