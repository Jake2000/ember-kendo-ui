import Ember from 'ember';
import layout from '../templates/components/k-autocomplete';

import Options from '../mixins/options';
import Events from '../mixins/events';
import DataSource from '../mixins/datasource';
import Value from '../mixins/value';

export default Ember.Component.extend(DataSource, Options, Events, Value, {
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
  willInsertElement() {
    let $object = this.$('input')
      .kendoAutoComplete(this.get('options'))
      .data('kendoAutoComplete');
    this.set('$object', $object);
    this.sendAction('action', $object);
  }
});
