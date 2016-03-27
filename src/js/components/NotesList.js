var React = require('react'),
    Note = require('./Note.js');
    AppActions = require('../actions/AppActions');
var NotesList = React.createClass({
    render(){
        return(
            <div className="row small-up-2 medium-up-3 large-up-4">
                {
                    this.props.notes.map(function(note,index){
                        return <Note note={note} key={index}/>
                    })
                }
            </div>
        )
    }
});

module.exports = NotesList;