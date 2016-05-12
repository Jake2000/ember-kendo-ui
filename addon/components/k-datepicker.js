import Ember from 'ember';
import layout from '../templates/components/k-datepicker';

import Options from '../mixins/options';
import Events from '../mixins/events';
import {onChange, value} from '../mixins/value';

export default Ember.Component.extend(Options, onChange, Events, value, {
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
