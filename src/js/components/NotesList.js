var React = require('react'),
    Note = require('./Note.js');
    AppActions = require('../actions/AppActions');
var ViewNotes = React.createClass({
    render(){
        return(
            <div>
                {
                    this.props.notes.map(function(note,index){
                        return <Note note={note} key={index}/>
                    })
                }
            </div>
        )
    }
});

module.exports = ViewNotes;