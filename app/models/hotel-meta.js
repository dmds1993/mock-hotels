import DS from 'ember-data';

const {Model, attr} = DS;

export default Model.extend({
  nightsNumber: attr(),
  awards: attr(),
  countHotels: attr(),
  mealPlan: attr(),
  price: attr(),
  statusExecution: attr()
});
