var React = require('react'),
    AppActions = require('../actions/AppActions');
var EditNoteForm = React.createClass({
    handleForm(e){
        e.preventDefault();
        updatedNote = {
            id: this.props.noteToEdit._id,
            note: this.refs.noteText.value
        };
        AppActions.updateNote(updatedNote);
    },
    render(){
        console.log("Editing notes" ,this.props);
        return(
            <div>
                <h3>Edit Note</h3>
                <form onSubmit={this.handleForm}>
                    <div className="row">
                        <div className="large-12 column">
                            <label>Note Text
                                <input type="text" onChange={this.handleEdit} ref="noteText" value={this.props.noteToEdit.note}/>
                                <button type="submit" className="button">Update</button>
                            </label>
                        </div>
                    </div>
                </form>
            </div>
        )
    },
    handleEdit(note,event){
        var newstate = event.target.value;
        var selected = this.state.selected;
        selected.note = newstate;
        this.setState({selected: selected});
        console.log(note);
    }
});

module.exports = EditNoteForm;