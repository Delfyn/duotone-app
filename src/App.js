import React, { Component } from 'react';
import tree from './christmas-trees.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={tree} className="christmas-trees" alt="Christmas trees" />
      </div>
    );
  }
}

export default App;
