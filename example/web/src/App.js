import React, { Component } from 'react';
import logo from './logo.svg';
import Test1 from '@example/test1';
import Test2 from '@example/test2';
import './App.css';

class App extends Component {
  render() {
    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Test1/>
        <Test2/>
        <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    );
  }
}

export default App;