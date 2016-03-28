var React = require('react'),
    AppActions = require('../actions/AppActions');
var Note = React.createClass({
    render(){
        console.log(this.props.note);
        return(
            <div className="column">
                <div className="note" onDoubleClick={this.removeNote.bind(this,this.props.note._id)}>
                    <p>{this.props.note.note}</p>
                </div>
            </div>
        )
    },
    removeNote(i,j){
        AppActions.removeNote(i.$oid);
    }
});

module.exports = Note;