import Ember from 'ember';

const { isArray, typeOf, isEmpty } = Ember;

export function isFunction(property) {
    return typeOf(property) === 'function';
}
export function isInstance(property) {
    return typeOf(property) === 'instance';
}
export function isPromise(property) {
    return isInstance(property) && isFunction(property.then);
}
export function parse(property) {
    const {
        parse, stringify
    } = JSON;
    return parse(stringify(property));
}
export function serialize(property) {
    if(isArray(property)) {
        let array = [];
        property.forEach(value => {
            array.push(serialize(value));
        });
        property = array;
    }
    if(isInstance(property)) {
        let {
            id, content
        } = property.getProperties('id', 'content');
        property = isEmpty(content) ? parse(property) : parse(content);
        if(!isEmpty(id)) {
            property['id'] = id;
        }
    }
    return property;
}
