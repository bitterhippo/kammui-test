import ReactDOM from 'react-dom';
import React from 'react';

//Main-Screen
import Landing from './Landing';

const App = () => {
  return (
    <Landing />
  )
};

ReactDOM.render(<App />, document.getElementById('app'));