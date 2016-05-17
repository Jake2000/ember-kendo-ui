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
