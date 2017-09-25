import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Menu } from 'create-react-styleguist/styleguide/build/bundle.4b6e7d4a.js';
//import { Menu } from 'create-react-styleguist/styleguide/build/0.08da7a36.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          <Menu />
        </p>
      </div>
    );
  }
}

export default App;
