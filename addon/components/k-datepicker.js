import Ember from 'ember';
import layout from '../templates/components/k-datepicker';

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
    'max',
    'min',
    'month',
    'parseFormats',
    'start',
    'value',
    //events
    'change',
    'close',
    'open'
  ],
  willInsertElement() {
    let $object = this.$('input')
      .kendoDatePicker(this.get('options'))
      .data('kendoDatePicker');
    this.set('$object', $object);
    this.sendAction('action', $object);
  }
});
