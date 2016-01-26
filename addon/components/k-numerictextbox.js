import Ember from 'ember';
import layout from '../templates/components/k-numerictextbox';

import Options from '../mixins/options';
import {onChange, value} from '../mixins/value';

export default Ember.Component.extend(Options, onChange, value, {
  layout: layout,
  _keys: [
    //configuration
    'culture',
    'decimals',
    'downArrowText',
    'format',
    'max',
    'min',
    'placeholder',
    'spinners',
    'step',
    'upArrowText',
    'value',
    //events
    'change',
    'spin'
  ],
  willInsertElement() {
    let $object = this.$('input')
      .kendoNumericTextBox(this.get('options'))
      .data('kendoNumericTextBox');
    this.set('$object', $object);
    this.sendAction('action', $object);
  }
});
