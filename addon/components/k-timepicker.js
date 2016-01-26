import Ember from 'ember';
import layout from '../templates/components/k-timepicker';

import Options from '../mixins/options';
import {onChange, value} from '../mixins/value';

export default Ember.Component.extend(Options, onChange, value, {
  layout: layout,
  _keys: [
    //configuration
    'animation',
    'culture',
    'dates',
    'format',
    'interval',
    'max',
    'min',
    'parseFormats',
    'value',
    //events
    'change',
    'close',
    'open'
  ],
  willInsertElement() {
    let $object = this.$('input')
      .kendoTimePicker(this.get('options'))
      .data('kendoTimePicker');
    this.set('$object', $object);
    this.sendAction('action', $object);
  }
});
