var React = require('react'),
    AppActions = require('../actions/AppActions');
var Note = React.createClass({
    render(){
        return(
            <div className="column">
                <div className="note" onDoubleClick={this._editNote.bind(this,this.props.note)}>
                    <p>{this.props.note.note}</p>
                    <button type="button" className="button remove-button" onClick={this.removeNote.bind(this,this.props.note._id)}>X</button>
                </div>
            </div>
        )
    },
    removeNote(i,j){
        AppActions.removeNote(i.$oid);
    },
    _editNote(i,j){
        AppActions.editNote(i);
    }
});

module.exports = Note;