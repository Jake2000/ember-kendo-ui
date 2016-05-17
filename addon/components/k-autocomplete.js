import Value from '../mixins/value';
import BaseComponent from './base-component';

export default BaseComponent.extend(Value, {
    _keys: [
        //configuration
        'animation',
        'dataSource',
        'dataTextField',
        'delay',
        'enable',
        'filter',
        'fixedGroupTemplate',
        'groupTemplate',
        'height',
        'highlightFirst',
        'ignoreCase',
        'minLength',
        'placeholder',
        'popup',
        'separator',
        'suggest',
        'headerTemplate',
        'template',
        'valuePrimitive',
        'virtual',
        //events
        'change',
        'close',
        'dataBound',
        'filtering',
        'open',
        'select'
    ],
    _initialize(options) {
        return this.$('input')
            .kendoAutoComplete(options || {})
            .data('kendoAutoComplete');
    }
});
