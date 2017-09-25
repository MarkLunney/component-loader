import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Example, SecondExample }  from 'create-react-library';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          <Example title="Hello World Test" />
          <SecondExample />
        </p>
      </div>
    );
  }
}

export default App;
