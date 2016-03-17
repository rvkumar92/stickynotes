var React = require('react'),
    AddNoteForm = require('./AddNoteForm.js'),
    ViewNotes = require('./NotesList.js'),
    AppStore = require('../store/AppStore');

var Sticky = React.createClass({
    getInitialState(){
        return getAppState()
    },
    componentDidMount(){
        AppStore.addChangeListener(this.onChange);
    },
    componentWillUnmount(){
      AppStore.removeChangeListener();
    },
    onChange(){
      this.setState(getAppState());
    },
    render(){
        return(
            <div>
                <AddNoteForm />
                <ViewNotes notes={this.state.notes} />
            </div>
        )
    }
});

getAppState = function(){
  return {
      notes : AppStore.getNotes()
  };
};
module.exports = Sticky;