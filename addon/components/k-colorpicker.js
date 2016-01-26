import Ember from 'ember';
import layout from '../templates/components/k-colorpicker';

import Options from '../mixins/options';
import {onChange, value} from '../mixins/value';

export default Ember.Component.extend(Options, onChange, value, {
  layout: layout,
  _keys: [
    //configuration
    'buttons',
    'columns',
    'tileSize',
    'messages',
    'palette',
    'opacity',
    'preview',
    'toolIcon',
    'value',
    //events
    'change',
    'select',
    'open',
    'close'
  ],
  willInsertElement() {
    let $object = this.$('input')
      .kendoColorPicker(this.get('options'))
      .data('kendoColorPicker');
    this.set('$object', $object);
    this.sendAction('action', $object);
  }
});
