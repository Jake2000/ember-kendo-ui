import { onChange, value } from '../mixins/value';
import BaseComponent from './base-component';

export default BaseComponent.extend(onChange, value, {
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
