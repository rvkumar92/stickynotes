var React = require('react'),
    AddNoteForm = require('./AddNoteForm.js'),
    NotesList = require('./NotesList.js'),
    EditNoteForm = require('./EditNoteForm.js'),
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
        if(this.state.noteToEdit == ''){
            var noteForm = <AddNoteForm />;
        }else{
            var noteForm = <EditNoteForm noteToEdit={this.state.noteToEdit}/>;
        }
        return(
            <div>
                <div className="off-canvas-wrapper">
                    <div className="off-canvas-wrapper-inner" data-off-canvas-wrapper>
                        <div className="off-canvas position-left reveal-for-large" data-off-canvas data-position="left">
                            <div className="row column">
                                <br/>
                                {noteForm}
                            </div>
                        </div>
                        <div className="off-canvas-content" data-off-canvas-content>
                            <NotesList notes={this.state.notes}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});

getAppState = function(){
  return {
      notes : AppStore.getNotes(),
      noteToEdit: AppStore.getNoteToEdit()
  };
};
module.exports = Sticky;