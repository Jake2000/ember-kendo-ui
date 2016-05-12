import Ember from 'ember';
import layout from '../templates/components/k-numerictextbox';
import Options from '../mixins/options';
import Events from '../mixins/events';
import { onChange, onSpin, value } from '../mixins/value';

const { Component, $ } = Ember;

export default Component.extend(Options, Events, value, onSpin, onChange, {
    layout,
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
    onKeyUp() {
        let $object = this.get('$object');
        $object.value($object.element.val());
        this.set('value', $object.value());
    },
    willInsertElement() {
        let $object = this.$('input')
                .kendoNumericTextBox(this.get('options'))
                .data('kendoNumericTextBox');
        this.set('$object', $object);
        this.sendAction('action', $object);
    }
});
