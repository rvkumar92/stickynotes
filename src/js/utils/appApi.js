var firebase = require('firebase'),
    AppActions = require('../actions/AppActions');
module.exports = {
    updateContact(contact){
        var id = contact.id;
        var updatedContact = {
            name: contact.name,
            number: contact.number,
            email: contact.email
        };
        console.log(updatedContact);
        this.firebaseRef = new firebase('https://contactlistwithflux.firebaseio.com/contacts/'+contact.id+'/contact');
        this.firebaseRef.update(updatedContact);
    },

    //add to monogolab
    //mongodb://<dbuser>:<dbpassword>@ds025419.mlab.com:25419/stickpadnotes
    //eSwjFfhqWphoPBt2sxIfeUUS0uUQzNXP
        addNote(note){
            $.ajax({
                url: "https://api.mongolab.com/api/1/databases/stickpadnotes/collections/notes?apiKey=eSwjFfhqWphoPBt2sxIfeUUS0uUQzNXP",
                data: JSON.stringify(note),
                type:"POST",
                contentType: "application/json"
            });
        },
    getNotes(){
        $.ajax({
            url: "https://api.mongolab.com/api/1/databases/stickpadnotes/collections/notes?apiKey=eSwjFfhqWphoPBt2sxIfeUUS0uUQzNXP",
            dataType: 'json',
            cache: false,
            success: function(data){
                AppActions.receiveNotes(data);
            }.bind(this),
            error: function(xhr,status,error){
                console.log(error);
            }.bind(this)
        });
    },
    removeNote(noteId){
        $.ajax({
            url: "https://api.mongolab.com/api/1/databases/stickpadnotes/collections/notes/"+noteId+"?apiKey=eSwjFfhqWphoPBt2sxIfeUUS0uUQzNXP",
            type:"DELETE",
            async: true,
            timeout: 300000,
            success: function(data){
                console.log("deleted");
            }.bind(this),
            error: function(xhr,status, error){
                console.log(error);
            }
        })
    },
    updateNote(updateNote){
        console.log('appApi',updateNote);
        console.log('appApi',updateNote.id.$oid);
        var noteId = updateNote.id.$oid;
        var noteToUpdate = updateNote.note;

        console.log("noteToUpdate", noteToUpdate);
        $.ajax({
            url: "https://api.mongolab.com/api/1/databases/stickpadnotes/collections/notes/"+noteId+"?apiKey=eSwjFfhqWphoPBt2sxIfeUUS0uUQzNXP",
            data: JSON.stringify({"$set": {note:noteToUpdate}}),
            type: "PUT",
            contentType: "application/json"
        });
    }
};