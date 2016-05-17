import Ember from 'ember';
import Events from '../mixins/events';
import { isPromise, serialize } from '../utils';
const { Component, isEmpty, RSVP: { Promise }, assign, A } = Ember;

export default Component.extend(Events, {
    _options() {
        let {
            dataSource, _keys: keys
        } = this.getProperties('dataSource', '_keys');
        dataSource = new Promise((resolve, reject) => {
            if(isPromise(dataSource)) {
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
                resolve({ dataSource: serialize(dataSource) });
            }
        });
        let options = {};
        keys = A(keys);
        if(keys.contains('dataSource')) {
            keys.removeObject('dataSource');
        }
        keys.forEach(key => {
            let value = serialize(this.get(key));
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
            let [ first, second ] = results,
                options = serialize(assign(first, second)),
                $object = this._initialize(options);
            this.set('$object', $object);
            this._setEvents();
            this.sendAction('action', $object);
        });
    }
});
