define(['ember', 'app/app'], function(Ember, App) {
    App.IndexController = Ember.ObjectController.extend({
        resultsHidden: true,
        
        pollChoices: function() {
            var choices = this.get('model.choices');
            
            var totalVotes = choices.reduce(function(prev, item) {
                return prev + item.get('count');
            }, 0);
            
            choices.map(function(item) {
                var votePercent = (item.get('count') / totalVotes) * 100;
                item.set('vote-percent', votePercent.toFixed(2));
                return item;
            });
            return choices;
        }.property('model.choices'),
        
        actions: {
            showResults: function() {
                this.get('model').reload().then(function() {
                    this.set('resultsHidden', false);
                }.bind(this));
            },

            hideResults: function() {
                this.set('resultsHidden', true);
            },

            vote: function(choiceId) {
                var choices = this.get('model.choices');

                var vote = this.store.createRecord('vote', {
                    choice: choices.findBy('id', '' + choiceId)
                });

                var self = this;

                vote.save().then(function(vote) {
                    self.send('showResults');
                }, function(vote) {
                    self.send('showResults');
                });
            }
        }
    });
});
