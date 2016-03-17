var React = require('react'),
    AppActions = require('../actions/AppActions');
var Note = React.createClass({
    render(){
        return(
            <div className="notes">
                {
                    this.props.note
                }
            </div>
        )
    }
});

module.exports = Note;