import Ember from 'ember';
const {Mixin, typeOf} = Ember;

export default Mixin.create({
  _serialize(property) {
    let type = typeOf(property);
    switch(type) {
      //serialize Ember.Object.create(<object>) to Object
      case 'instance':
        let object = {};
        Object.keys(property).forEach(key => {
          object[key] = this._serialize(property[key]);
        });
        property = object;
      break;
      //serialize Ember.A(<array>) to Array
      case 'array':
        let array = [];
        property.forEach(value => {
          array.push(this._serialize(value));
        });
        property = array;
      break;
    }
    return property;
  }
});
