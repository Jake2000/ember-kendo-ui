import { onChange, value } from '../mixins/value';
import Events from '../mixins/events';
import BaseComponent from './base-component';

export default BaseComponent.extend(onChange, value, Events, {
    _keys: [
        //configuration
        'buttons',
        'columns',
        'tileSize',
        'messages',
        'palette',
        'opacity',
        'preview',
        'toolIcon',
        'value',
        //events
        'change',
        'select',
        'open',
        'close'
    ],
    _initialize(options) {
        return this.$('input')
            .kendoColorPicker(options || {})
            .data('kendoColorPicker');
    }
});
