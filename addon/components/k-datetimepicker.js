import { onChange, value } from '../mixins/value';
import BaseComponent from './base-component';

export default BaseComponent.extend(onChange, value, {
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
        'interval',
        'max',
        'min',
        'month',
        'parseFormats',
        'start',
        'timeFormat',
        'value',
        //events
        'change',
        'close',
        'open'
    ],
    _initialize(options) {
        return this.$('input')
            .kendoDateTimePicker(options || {})
            .data('kendoDateTimePicker');
    }
});
