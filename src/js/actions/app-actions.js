/**
 * Created by pheadra on 4/11/15.
 */
var AppContants = require('../constants/app-constants');
var AppDispatcher = require('../dispatchers/app-dispatcher');

var AppActions = {
    create: function(text){
        AppDispatcher.handleViewAction({
            actionType: AppContants.TODO_CREATE,
            text:text
        })
    }
}

module.exports = AppActions;