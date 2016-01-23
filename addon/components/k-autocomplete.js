import Ember from 'ember';
import layout from '../templates/components/k-autocomplete';

export default Ember.Component.extend({
  layout: layout,
  _keys: [
    //configuration
    'animation',
    'dataSource',
    'dataTextField',
    'delay',
    'enable',
    'filter',
    'fixedGroupTemplate',
    'groupTemplate',
    'height',
    'highlightFirst',
    'ignoreCase',
    'minLength',
    'placeholder',
    'popup',
    'separator',
    'suggest',
    'headerTemplate',
    'template',
    'valuePrimitive',
    'virtual',
    //events
    'change',
    'close',
    'dataBound',
    'filtering',
    'open',
    'select'
  ],
  _serialize(property) {
    let type = Ember.typeOf(property);
    switch(type) {
      //serialize Ember.Object.create(<object>) to Object
      case 'instance':
        let object = {};
        Object.keys(property).forEach(key => {
          object[key] = this._serialize(property[key]);
        });
        property = object;
      break;
      //serialize Ember.A(<array>) to Array
      case 'array':
        let array = [];
        property.forEach(value => {
          array.push(this._serialize(value));
        });
        property = array;
      break;
    }
    return property;
  },
  _dataSource: Ember.observer('dataSource.[]', function() {
    let dataSource = this._serialize(this.get('dataSource'));
    dataSource = Array.isArray(dataSource) ? dataSource : [];
    this.get('$object').setDataSource(dataSource);
  }),
  _options: Ember.on('init', function() {
    let options = {};
    this._keys.forEach(key => {
      let value = this.get(key);
      if(!Ember.isEmpty(value)) {
        options[key] = value;
      }
    });
    this.set('options', options);
  }),
  willInsertElement() {
    let $object = this.$('input').kendoAutoComplete(this.get('options') || {});
    $object.data('kendoAutoComplete');
    this.set('$object', $object);
    this.sendAction('action', $object);
  }
});
