define(['ember', 'app/app', 'models/poll_model', 'controllers/index_controller'], function(Ember, App) {

    App.IndexRoute = Ember.Route.extend({
        model: function() {
            return this.store.find('poll', 1);
        }
    });
});
