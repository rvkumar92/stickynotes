var AppDispatcher = require('../dispatcher/AppDispatcher'),
    AppConstants = require('../constants/AppConstants');
var AppActions = {
    addNote(note){
        AppDispatcher.handleViewActions({
            actionType: AppConstants.ADD_NOTE,
            note: note
        });
    }
};


module.exports = AppActions;