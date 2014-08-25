define ['models/poll_model'], ->
    moduleForModel 'poll', 'Poll Model', {
        needs: []
    }

    test 'exists', ->
        expect 1

        model = @subject()

        ok model
