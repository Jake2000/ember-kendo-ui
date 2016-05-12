import Ember from 'ember';
import layout from '../templates/components/k-multiselect';

import Options from '../mixins/options';
import Events from '../mixins/events';
import DataSource from '../mixins/datasource';
import Value from '../mixins/value';

export default Ember.Component.extend(DataSource, Options, Events, Value, {
  layout: layout,
  _keys: [
    //configuration
    'animation',
    'autoBind',
    'autoClose',
    'dataSource',
    'dataTextField',
    'dataValueField',
    'delay',
    'enable',
    'filter',
    'fixedGroupTemplate',
    'groupTemplate',
    'height',
    'highlightFirst',
    'ignoreCase',
    'minLength',
    'maxSelectedItems',
    'placeholder',
    'popup',
    'headerTemplate',
    'itemTemplate',
    'tagTemplate',
    'tagMode',
    'value',
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
  willInsertElement() {
    let $object = this.$('select')
      .kendoMultiSelect(this.get('options'))
      .data('kendoMultiSelect');
    this.set('$object', $object);
    this.sendAction('action', $object);
  }
});
