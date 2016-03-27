var React = require('react'),
    AppActions = require('../actions/AppActions');
var AddNoteForm = React.createClass({
    handleForm(e){
        e.preventDefault();
        var note = {
            note: this.refs.note.value.trim()
        };
        AppActions.addNote(note);
        this.refs.note.value = '';
    },
    render(){
        return(
            <div>
                <h3>Add a Note</h3>
                <form onSubmit={this.handleForm}>
                    <div className="row">
                        <div className="large-12 column">
                            <label>Note Text
                                <input type="text" placeholder="Enter a note..." ref="note" className="form-control"/>
                                <button type="submit" className="button">Add</button>
                            </label>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
});

module.exports = AddNoteForm;