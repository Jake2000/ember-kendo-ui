import Ember from 'ember';

let onChange = Ember.Mixin.create({
  _onChange: Ember.observer('$object', function() {
    let $object = this.get('$object');
    if(!Ember.isEmpty($object)) {
      $object.bind('change', () => {
        this.set('value', $object.value());
      });
    }
  })
});

let onDataBound = Ember.Mixin.create({
  _onDataBound: Ember.observer('$object', function() {
    let $object = this.get('$object');
    if(!Ember.isEmpty($object)) {
      $object.bind('dataBound', () => {
        this.set('value', $object.value());
      });
    }
  })
});

export {onChange, onDataBound};

export default Ember.Mixin.create(onChange, onDataBound);
