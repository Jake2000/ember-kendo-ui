import Ember from 'ember';
const {Mixin, observer, isEmpty} = Ember;
import Serialize from './serialize';

export default Mixin.create(Serialize, {
  _dataSource: observer('dataSource.[]', function() {
    let $object = this.get('$object'), dataSource = this._serialize(this.get('dataSource'));
    if(!isEmpty($object)) {
      $object.setDataSource(dataSource);
    }
  })
});
