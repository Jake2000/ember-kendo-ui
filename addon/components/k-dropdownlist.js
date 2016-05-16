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
        'ignoreCase',
        'index',
        'minLength',
        'popup',
        'optionLabel',
        'optionLabelTemplate',
        'headerTemplate',
        'template',
        'valueTemplate',
        'text',
        'vaue',
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
            .kendoDropDownList(options || {})
            .data('kendoDropDownList');
    }
});
