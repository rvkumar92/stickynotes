var React = require('react'),
    AppActions = require('../actions/AppActions');
var AddNoteForm = React.createClass({
    handleForm(e){
        e.preventDefault();
        AppActions.addNote(this.refs.note.value);
    },
    render(){
        return(
            <div className="well pull-left">
                <h3>Add a Note</h3>
                <form onSubmit={this.handleForm}>
                    <label>Note Text</label>
                    <input type="text" placeholder="Enter a note..." ref="note" className="form-control"/>
                    <button type="submit" className="btn btn-primary">Add</button>
                </form>
            </div>
        )
    }
});

module.exports = AddNoteForm;