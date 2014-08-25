define(['app/app', 'routes/index_route'], function(App) {
    App.Router.map(function() {
        this.route('catchall', { path: '/*wildcard'});
    });

    App.Router.reopen({
        location: 'history'
    });
});
