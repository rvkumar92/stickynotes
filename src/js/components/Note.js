var React = require('react'),
    AppActions = require('../actions/AppActions');
var Note = React.createClass({
    render(){
        console.log(this.props.note);
        return(
            <div className="column">
                <div className="note">
                    <p>{this.props.note.note}</p>
                </div>
            </div>
        )
    }
});

module.exports = Note;