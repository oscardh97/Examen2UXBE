import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ClimasContainer from './components/ClimasContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Reporte Clima</h1>
        </div>
        <ClimasContainer />
      </div>
    );
  }
}

export default App;
