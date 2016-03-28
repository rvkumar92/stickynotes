var React = require('react'),
    AppActions = require('../actions/AppActions');
var EditNoteForm = React.createClass({
    handleForm(e){
        e.preventDefault();
        /*var note = {
            note: this.refs.note.value.trim()
        };
        AppActions.addNote(note);
        this.refs.note.value = '';*/
    },
    render(){
        console.log("Editing notes" ,this.props.noteToEdit);
        return(
            <div>
                <h3>Edit Note</h3>
                <form onSubmit={this.handleForm}>
                    <div className="row">
                        <div className="large-12 column">
                            <label>Note Text
                                <input type="text" value={this.props.noteToEdit.note}
                                       ref="editNote" className="form-control" onChange={this.handleEdit.bind(this,'note')}/>
                                <button type="submit" className="button">Update</button>
                            </label>
                        </div>
                    </div>
                </form>
            </div>
        )
    },
    handleEdit(note,event){
        console.log(note);
    }
});

module.exports = EditNoteForm;