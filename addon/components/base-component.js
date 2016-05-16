import Ember from 'ember';

const { Component, typeOf, isEmpty, RSVP: { Promise }, assign, A } = Ember;

export default Component.extend({
    _parse(property) {
        return JSON.parse(JSON.stringify(property));
    },
    _isFunction(property) {
        return typeOf(property) === 'function';
    },
    _isInstance(property) {
        return typeOf(property) === 'instance';
    },
    _isPromise(property) {
        return this._isInstance(property) && this._isFunction(property.then);
    },
    _toObject(property) {
        let id = null;
        if(this._isInstance(property)) {
            id = property.get('id');
            let content = property.get('content');
            if(!isEmpty(content)) {
                property = content;
            }
        }
        property = property || {};
        let content = this._parse(property);
        if(!isEmpty(id)) {
            content['id'] = id;
        }
        return content;
    },
    _serialize(property) {
        let type = typeOf(property);
        switch(type) {
            case 'instance':
                property = this._toObject(property);
            break;
            case 'array':
                let array = [];
                property.forEach(value => {
                    array.push(this._serialize(value));
                });
                property = array;
            break;
        }
        return property;
    },
    _options() {
        let {
            dataSource, _keys
        } = this.getProperties('dataSource', '_keys');
        dataSource = new Promise((resolve, reject) => {
            if(this._isPromise(dataSource)) {
                dataSource.then(dataSource => {
                    dataSource = dataSource.toArray();
                    dataSource.map((d, i) => {
                        dataSource[i] = d.toJSON();
                        let id = d.get('id');
                        if(!isEmpty(id)) {
                            dataSource[i]['id'] = id;
                        }
                    });
                    resolve({ dataSource });
                }).catch(() => {
                    reject({ dataSource: [] });
                });
            } else {
                resolve({ dataSource: this._serialize(dataSource) });
            }
        });
        let keys = A(_keys), options = {};
        if(keys.contains('dataSource')) {
            keys.removeObject('dataSource');
        }
        keys.forEach(key => {
            let value = this._serialize(this.get(key));
            if(!isEmpty(value)) {
                options[key] = value;
            }
        });
        return Promise.all([
            dataSource,
            options
        ]);
    },
    willInsertElement() {
        this._options().then(results => {
            let [ first, second ] = results;
            let options = this._serialize(assign(first, second));
            let $object = this._initialize(options);
            this.set('$object', $object);
            this.sendAction('action', $object);
        });
    }
});
