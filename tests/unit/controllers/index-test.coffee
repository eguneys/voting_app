define ['controllers/index_controller'], ->
    moduleFor 'controller:index', 'Index Controller', {
        needs: []
    }
    
    test 'exists', ->
        expect 1

        ctrl = @subject()
        
        ok ctrl
        
