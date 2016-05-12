import Ember from 'ember';
import layout from '../templates/components/k-slider';

import Options from '../mixins/options';
import Events from '../mixins/events';
import {onChange, value} from '../mixins/value';

export default Ember.Component.extend(Options, onChange, Events, value, {
  layout: layout,
  _keys: [
    //configuration
    'decreaseButtonTitle',
    'increaseButtonTitle',
    'largeStep',
    'max',
    'min',
    'orientation',
    'precision',
    'showButtons',
    'smallStep',
    'tickPlacement',
    'tooltip',
    'value',
    //events
    'change',
    'slide'
  ],
  willInsertElement() {
    let $object = this.$('input')
      .kendoSlider(this.get('options'))
      .data('kendoSlider');
    this.set('$object', $object);
    this.sendAction('action', $object);
  }
});
