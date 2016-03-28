var firebase = require('firebase'),
    AppActions = require('../actions/AppActions');
module.exports = {
    addNoteToFirebase(note){
        this.firebaseRef = new firebase('https://stickypadnotes.firebaseio.com/stickynotes');
        this.firebaseRef.push({note: note});
    },
    getContacts(){
        this.firebaseRef = new firebase('https://contactlistwithflux.firebaseio.com/contacts');
        this.firebaseRef.once("value",function(snapshot){
            var contacts = [];
            snapshot.forEach(function(childSnapshot){
                var contact = {
                    id: childSnapshot.key(),
                    name: childSnapshot.val().contact.name,
                    number: childSnapshot.val().contact.number,
                    email: childSnapshot.val().contact.email
                };
                contacts.push(contact);
                AppActions.receiveContacts(contacts);
            })
        });
    },
    removeContact(contactId){
        this.firebaseRef = new firebase('https://contactlistwithflux.firebaseio.com/contacts/'+ contactId);
        this.firebaseRef.remove();
    },
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
            })
        }
};