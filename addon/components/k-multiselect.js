import Value from '../mixins/value';
import Events from '../mixins/events';
import BaseComponent from './base-component';

export default BaseComponent.extend(Value, Events, {
    _keys: [
        //configuration
        'animation',
        'autoBind',
        'autoClose',
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
        'minLength',
        'maxSelectedItems',
        'placeholder',
        'popup',
        'headerTemplate',
        'itemTemplate',
        'tagTemplate',
        'tagMode',
        'value',
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
        return this.$('select')
            .kendoMultiSelect(options || {})
            .data('kendoMultiSelect');
    }
});
