import { onChange, onSpin, value } from '../mixins/value';
import Events from '../mixins/events';
import BaseComponent from './base-component';

export default BaseComponent.extend(value, onSpin, onChange, Events, {
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
    _initialize(options) {
        return this.$('input')
            .kendoNumericTextBox(options || {})
            .data('kendoNumericTextBox');
    }
});
