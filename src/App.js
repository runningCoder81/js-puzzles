import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Puzzels from './Puzzels';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>
          <Puzzels/>
          </div>
        </header>
        
      </div>
    );
  }
}

export default App;



