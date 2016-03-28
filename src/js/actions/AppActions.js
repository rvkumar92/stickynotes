var AppDispatcher = require('../dispatcher/AppDispatcher'),
    AppConstants = require('../constants/AppConstants');
var AppActions = {
    addNote(note){
        AppDispatcher.handleViewActions({
            actionType: AppConstants.ADD_NOTE,
            note: note
        });
    },
    receiveNotes(notes){
        AppDispatcher.handleViewActions({
            actionType: AppConstants.RECEIVE_NOTES,
            notes: notes
        });
    },
    removeNote(id){
        AppDispatcher.handleViewActions({
            actionType: AppConstants.REMOVE_NOTE,
            note_id: id
        });
    },
    editNote(notes){
        AppDispatcher.handleViewActions({
            actionType: AppConstants.EDIT_NOTE,
            editNote: notes
        });
    }

};


module.exports = AppActions;