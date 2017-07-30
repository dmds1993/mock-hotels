import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    store.unloadAll('hotelMeta');
    store.createRecord('hotelMeta', payload.meta)
    return this._super(store, primaryModelClass, payload, id, requestType)
  }

});
