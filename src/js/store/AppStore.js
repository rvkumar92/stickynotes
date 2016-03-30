var AppDispatcher = require('../dispatcher/AppDispatcher'),
    AppConstants = require('../constants/AppConstants'),
    assign = require('object-assign'),
    appApi = require('../utils/appApi'),
    EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = 'change';
var note_to_edit = '';
var _notes = [];
var AppStore = assign({},EventEmitter.prototype,{
    addChangeListener(callback){
        this.on('change',callback);
    },
    removeChangeListener(callback){
        this.removeListener('change',callback);
    },
    emitChange(){
        console.log('emitter');
        this.emit(CHANGE_EVENT);
    },
    saveContact(contacts){
        _contacts.push(contacts);
        console.log('_contacts',_contacts);
    },
    getContacts(){
        return _contacts;
    },
    receiveContacts(contacts){
        _contacts = contacts;
    },
    removeContact(contactId){
        var index = _contacts.findIndex(x => x.id === contactId);
        _contacts.splice(index,1);
    },
    editContact(editContact){
        _contact_to_edit = editContact;
    },
    getContactToEdit(){
        return _contact_to_edit;
    },
    updateContact(updateContact){
        for(var i=0;i<_contacts.length;i++){
            if(_contacts[i].id == updateContact.id){
                _contacts.splice(i,1);
                _contacts.push(updateContact);
            }
        }
    },

    //sticky note functions
    addNote(note){
        _notes.push(note);
    },
    getNotes(){
        return _notes;
    },
    setNotes(notes){
        _notes = notes;
    },
    removeNote(note_id){
        console.log('remove _notes',_notes);
        var index = _notes.findIndex(i => i._id.$oid === note_id);
        _notes.splice(index,1);
    },
    editNote(editNote){
        note_to_edit = editNote;
    },
    getNoteToEdit(){
        return note_to_edit;
    },
    updateNote(updatedNote){

        for(let i=0;i<_notes.length;i++){
            console.log(updatedNote.id);
            if(_notes[i]._id == updatedNote.id){
                _notes.splice(i,1);
                _notes.push(updatedNote);
            }
        }
    }
});

AppDispatcher.register(function(payload){
    var action = payload.action;
    switch (action.actionType){
        case AppConstants.ADD_NOTE:
            console.log('Adding note...');
            //store save
            AppStore.addNote(action.note);
            // api save
            appApi.addNote(action.note);
            //emit event
            AppStore.emit(CHANGE_EVENT);
            break;
        case AppConstants.RECEIVE_NOTES:
            console.log('Receiving Notes...');

            //store save
            AppStore.setNotes(action.notes);

            //EmitChange
            AppStore.emit(CHANGE_EVENT);
            break;
        case AppConstants.REMOVE_NOTE:
            console.log("Removing note...");
            AppStore.removeNote(action.note_id);
            appApi.removeNote(action.note_id);
            AppStore.emit(CHANGE_EVENT);
            break;
        case AppConstants.EDIT_NOTE:
            AppStore.editNote(action.editNote);
            AppStore.emit(CHANGE_EVENT);
            break;
        case AppConstants.UPDATE_NOTE:
            console.log('Updating note...');
            AppStore.updateNote(action.updatedNote);
            appApi.updateNote(action.updatedNote);
            AppStore.emit(CHANGE_EVENT);

        case AppConstants.UPDATE_CONTACT:
            console.log('Updating Contact...');

            //store save
            AppStore.updateContact(action.updateContact);

            appApi.updateContact(action.updateContact);
            //EmitChange
            AppStore.emit(CHANGE_EVENT);
            break;
    }
    return true;
});

module.exports = AppStore;