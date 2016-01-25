import Ember from 'ember';
import layout from '../templates/components/k-combobox';

import Options from '../mixins/options';
import DataSource from '../mixins/datasource';
import Value from '../mixins/value';

export default Ember.Component.extend(DataSource, Options, Value, {
  layout: layout,
  _keys: [
    //configuration
    'animation',
    'autoBind',
    'cascadeFrom',
    'cascadeFromField',
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
    'index',
    'minLength',
    'placeholder',
    'popup',
    'suggest',
    'headerTemplate',
    'template',
    'text',
    'value',
    'valuePrimitive',
    'virtual',
    //events
    'change',
    'close',
    'dataBound',
    'filtering',
    'open',
    'select',
    'cascade'
  ],
  willInsertElement() {
    let $object = this.$('select')
      .kendoComboBox(this.get('options'))
      .data('kendoComboBox');
    this.set('$object', $object);
    this.sendAction('action', $object);
  }
});
