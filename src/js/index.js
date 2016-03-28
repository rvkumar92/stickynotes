var React = require('react'),
    ReactDOM = require('react-dom'),
    appApi = require('./utils/appApi'),
    Sticky = require('./components/Sticky.js');
    appApi.getNotes();
ReactDOM.render(<Sticky />,document.getElementById('app'));