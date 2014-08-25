define(['ember', 'ember-data'], function(Ember, DS) {
    var App = Ember.Application.create();

    App.ApplicationAdapter = DS.RESTAdapter.extend({
        namespace: 'api/v1'
    });
    
    return App;
});
