define(['ember-data', 'app/app'], function(DS, App) {
    App.Poll = DS.Model.extend({
        question: DS.attr('string'),
        choices: DS.hasMany('choice')
    });

    App.Choice = DS.Model.extend({
        text: DS.attr('string'),
        description: DS.attr('string'),
        poll: DS.belongsTo('poll')
    });

    App.PollSerializer = DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin, {
        attrs: {
            choices: { embedded: 'always' }
        }
    });
});
