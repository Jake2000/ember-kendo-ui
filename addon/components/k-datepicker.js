import { onChange, value } from '../mixins/value';
import Events from '../mixins/events';
import BaseComponent from './base-component';

export default BaseComponent.extend(onChange, value, Events, {
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
    _initialize(options) {
        return this.$('input')
            .kendoDatePicker(options || {})
            .data('kendoDatePicker');
    }
});
