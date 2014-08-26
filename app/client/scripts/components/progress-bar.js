define(['ember', 'app/app'], function(Ember, App) {
    App.ProgressBarComponent = Ember.Component.extend({
        'progress-bar-type': function() {
            var barTypes = [
                'progress-bar-danger',
                'progress-bar-warning',
                'progress-bar-info',
                'progress-bar-success'
            ];

            var percent = Math.min(this.get('percent'), 100);
            
            var barType = barTypes[Math.floor((percent - 1) / 25)];

            return barType;
        }.property('percent'),
        'percent-style': function() {
            return 'width:' + this.get('percent') + '%';
        }.property('percent')
    });
});
