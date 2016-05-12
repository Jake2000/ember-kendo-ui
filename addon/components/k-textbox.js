import Ember from 'ember';
import Events from '../mixins/events';
import layout from '../templates/components/k-textbox';
const { TextField } = Ember;
export default TextField.extend(Events, {
    layout,
    classNames: ['k-textbox'],
    willInsertElement() {
        let $object = {
            element: this.$()
        };
        this.set('$object', $object);
        this.sendAction('action', $object);
    }
});
