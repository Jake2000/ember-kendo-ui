import Ember from 'ember';
import layout from '../templates/components/k-maskedtextbox';

import Options from '../mixins/options';
import Events from '../mixins/events';
import {onChange, value} from '../mixins/value';

export default Ember.Component.extend(Options, onChange, Events, value, {
  layout: layout,
  _keys: [
    //configuration
    'clearPromptChar',
    'culture',
    'mask',
    'promptChar',
    'rules',
    'unmaskOnPost',
    'value',
    //events
    'change'
  ],
  willInsertElement() {
    let $object = this.$('input')
      .kendoMaskedTextBox(this.get('options'))
      .data('kendoMaskedTextBox');
    this.set('$object', $object);
    this.sendAction('action', $object);
  }
});
