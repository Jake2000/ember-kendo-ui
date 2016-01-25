import Ember from 'ember';
import layout from '../templates/components/k-dropdownlist';

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
    'ignoreCase',
    'index',
    'minLength',
    'popup',
    'optionLabel',
    'optionLabelTemplate',
    'headerTemplate',
    'template',
    'valueTemplate',
    'text',
    'vaue',
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
      .kendoDropDownList(this.get('options'))
      .data('kendoDropDownList');
    this.set('$object', $object);
    this.sendAction('action', $object);
  }
});
