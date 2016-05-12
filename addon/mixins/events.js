import Ember from 'ember';
const { Mixin, String: { dasherize }, observer, typeOf, on } = Ember;

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
    _setEvents: on('didInsertElement', observer('$object', function() {
        let $object = this.get('$object');
        this._events.forEach(e => {
            let fn = this.get(e);
            if(typeOf(fn) === 'function') {
                e = dasherize(e.substring(2)).replace('-', '');
                $object.element.on(e, e => {
                    fn.apply(this, e);
                });
            }
        });
    }))
});
