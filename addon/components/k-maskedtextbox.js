import { onChange, value } from '../mixins/value';
import Events from '../mixins/events';
import BaseComponent from './base-component';

export default BaseComponent.extend(onChange, value, Events, {
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
    _initialize(options) {
        return this.$('input')
            .kendoMaskedTextBox(options || {})
            .data('kendoMaskedTextBox');
    }
});
