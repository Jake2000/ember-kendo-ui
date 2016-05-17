import { onChange, value } from '../mixins/value';
import BaseComponent from './base-component';

export default BaseComponent.extend(onChange, value, {
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
    _initialize(options) {
        return this.$('input')
            .kendoTimePicker(options || {})
            .data('kendoTimePicker');
    }
});
