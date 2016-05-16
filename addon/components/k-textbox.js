import Ember from 'ember';
import Events from '../mixins/events';
const { TextField } = Ember;
export default TextField.extend(Events, {
    classNames: ['k-textbox'],
    willInsertElement() {
        let $object = {
            element: this.$()
        };
        this.set('$object', $object);
        this.sendAction('action', $object);
    }
});
