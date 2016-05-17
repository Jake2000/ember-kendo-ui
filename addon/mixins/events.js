import Ember from 'ember';
import { isFunction } from '../utils';
const { Mixin, String: { dasherize }, isEmpty } = Ember;

export default Mixin.create({
    _events: [
        'onContextMenu',
        'onClick',
        'onChange',
        'onDoubleClick',
        'onDragStart',
        'onDrag',
        'onDragEnter',
        'onDragLeave',
        'onDragOver',
        'onDragEnd',
        'onDrop',
        'onFocusIn',
        'onFocusOut',
        'onInput',
        'onKeyDown',
        'onKeyUp',
        'onKeyPress',
        'onMouseDown',
        'onMouseUp',
        'onMouseMove',
        'onMouseEnter',
        'onMouseLeave',
        'onTouchStart',
        'onTouchMove',
        'onTouchEnd',
        'onTouchCancel',
        'onSubmit'
    ],
    _setEvents() {
        let $object = this.get('$object');
        if(!isEmpty($object)) {
            this._events.forEach(e => {
                let fn = this.get(e);
                if(isFunction(fn)) {
                    e = dasherize(e.substring(2)).replace('-', '');
                    $object.element.on(e, e => {
                        fn.call(this, e);
                    });
                }
            });
        }
    }
});
