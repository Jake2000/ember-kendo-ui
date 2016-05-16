import { onChange, value } from '../mixins/value';
import Events from '../mixins/events';
import BaseComponent from './base-component';

export default BaseComponent.extend(onChange, value, Events, {
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
