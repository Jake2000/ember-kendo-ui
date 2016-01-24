import Ember from 'ember';

export default Ember.Controller.extend({
  dataSource: Ember.A([
    Ember.Object.create({
      title: 'value1'
    }),
    Ember.Object.create({
      title: 'value2'
    }),
    Ember.Object.create({
      title: 'value3'
    }),
    Ember.Object.create({
      title: 'value4'
    })
  ])
});
