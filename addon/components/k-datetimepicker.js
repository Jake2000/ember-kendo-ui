import Ember from 'ember';
import layout from '../templates/components/k-datetimepicker';

import Options from '../mixins/options';
import {onChange} from '../mixins/value';

export default Ember.Component.extend(Options, onChange, {
  layout: layout,
  _keys: [
    //configuration
    'animation',
    'ARIAtemplate',
    'culture',
    'dates',
    'depth',
    'disableDates',
    'footer',
    'format',
    'interval',
    'max',
    'min',
    'month',
    'parseFormats',
    'start',
    'timeFormat',
    'value',
    //events
    'change',
    'close',
    'open'
  ],
  willInsertElement() {
    let $object = this.$('input')
      .kendoDateTimePicker(this.get('options'))
      .data('kendoDateTimePicker');
    this.set('$object', $object);
    this.sendAction('action', $object);
  }
});
