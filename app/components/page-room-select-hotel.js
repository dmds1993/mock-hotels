import Ember from 'ember';

const {Component, inject, get} = Ember

export default Ember.Component.extend({
  routing: inject.service('-routing'),
  actions: {
    selectHotel(hotel) {
      let routing = get(this, 'routing');
      //*by Leonardo Ganoa <--
      routing.transitionTo("congratulations").then((newRoute) => {
        newRoute.controller.set('hotel', hotel);
      })
      //*
    }
  }
});
