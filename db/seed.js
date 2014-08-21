module.exports = function(db) {
    db.Poll.create({
        question: 'What features would you like to see'
    }).success(function(poll) {
        db.Choice.bulkCreate([{
            id: 1,
            text: 'Improved UI',
            description: 'New, fancy interface',
            PollId: poll.id
        }, {
            id: 2,
            text: 'Improved Performance',
            description: 'Faster response times',
            PollId: poll.id
        }]);
    });
};
