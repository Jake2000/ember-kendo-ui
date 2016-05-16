import { onChange, value } from '../mixins/value';
import Events from '../mixins/events';
import BaseComponent from './base-component';

export default BaseComponent.extend(onChange, value, Events, {
    _keys: [
        //configuration
        'decreaseButtonTitle',
        'increaseButtonTitle',
        'largeStep',
        'max',
        'min',
        'orientation',
        'precision',
        'showButtons',
        'smallStep',
        'tickPlacement',
        'tooltip',
        'value',
        //events
        'change',
        'slide'
    ],
    _initialize(options) {
        return this.$('input')
            .kendoSlider(options || {})
            .data('kendoSlider');
    }
});
