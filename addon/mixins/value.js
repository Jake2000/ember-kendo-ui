import Ember from 'ember';
const {Mixin, observer, isEmpty} = Ember;

let onChange = Mixin.create({
  _onChange: observer('$object', function() {
    let $object = this.get('$object');
    if(!isEmpty($object)) {
      $object.bind('change', () => {
        this.set('value', $object.value());
      });
    }
  })
});

let onSpin = Mixin.create({
  _onSpin: observer('$object', function() {
    let $object = this.get('$object');
    if(!isEmpty($object)) {
      $object.bind('spin', () => {
        this.set('value', $object.value());
      });
    }
  })
});

let onDataBound = Mixin.create({
  _onDataBound: observer('$object', function() {
    let $object = this.get('$object');
    if(!isEmpty($object)) {
      $object.bind('dataBound', () => {
        this.set('value', $object.value());
      });
    }
  })
});

let onSelect = Mixin.create({
  _onSelect: observer('$object', function() {
    let $object = this.get('$object');
    if(!isEmpty($object)) {
      $object.bind('select', () => {
        this.set('value', $object.value());
      });
    }
  })
});

let value = Mixin.create({
  _value: observer('$object', 'value', function() {
    let $object = this.get('$object'), value = this.get('value');
    if(!isEmpty($object)) {
      $object.value(value);
    }
  })
});

export {onChange, onSpin, onDataBound, onSelect, value};

export default Mixin.create(onChange, onSpin, onDataBound, onSelect, value);
