import Ember from 'ember';
const {Mixin, on, isEmpty} = Ember;
import Serialize from './serialize';

export default Mixin.create(Serialize, {
  _options: on('init', function() {
    let options = this.get('options') || {};
    this._keys.forEach(key => {
      let value = this._serialize(this.get(key));
      if(!isEmpty(value)) {
        options[key] = value;
      }
    });
    this.set('options', options);
  })
});
