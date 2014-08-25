define(['ember', 'app/app'], function(Ember, App) {
    App.IndexController = Ember.ObjectController.extend({
        resultsHidden: true,
        
        actions: {
            showResults: function() {
                this.set('resultsHidden', false);
            },

            hideResults: function() {
                this.set('resultsHidden', true);
            }
        }
    });
});
