import Ember from 'ember';
import Serialize from './serialize';

export default Ember.Mixin.create(Serialize, {
  _dataSource: Ember.observer('dataSource.[]', function() {
    let $object = this.get('$object'), dataSource = this._serialize(this.get('dataSource'));
    dataSource = Array.isArray(dataSource) ? dataSource : [];
    if(!Ember.isEmpty($object)) {
      $object.setDataSource(dataSource);
    }
  })
});
