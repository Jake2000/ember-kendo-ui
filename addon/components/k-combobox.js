import Value from '../mixins/value';
import Events from '../mixins/events';
import BaseComponent from './base-component';

export default BaseComponent.extend(Value, Events, {
    _keys: [
        //configuration
        'animation',
        'autoBind',
        'cascadeFrom',
        'cascadeFromField',
        'dataSource',
        'dataTextField',
        'dataValueField',
        'delay',
        'enable',
        'filter',
        'fixedGroupTemplate',
        'groupTemplate',
        'height',
        'highlightFirst',
        'ignoreCase',
        'index',
        'minLength',
        'placeholder',
        'popup',
        'suggest',
        'headerTemplate',
        'template',
        'text',
        'value',
        'valuePrimitive',
        'virtual',
        //events
        'change',
        'close',
        'dataBound',
        'filtering',
        'open',
        'select',
        'cascade'
    ],
    _initialize(options) {
        return this.$('select')
            .kendoComboBox(options || {})
            .data('kendoComboBox');
    }
});
