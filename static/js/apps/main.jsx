import React from 'react';
import ReactDOM from 'react-dom';

const App = ({ message }) => <div>{ message }</div>;

ReactDOM.render(<App message="hello world" />, document.getElementById('app'));
