import Ember from 'ember';
import Serialize from './serialize';

export default Ember.Mixin.create(Serialize, {
  _options: Ember.on('init', function() {
    let options = this.get('options') || {};
    this._keys.forEach(key => {
      let value = this._serialize(this.get(key));
      if(!Ember.isEmpty(value)) {
        options[key] = value;
      }
    });
    this.set('options', options);
  })
});
