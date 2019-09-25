import React, { Component } from 'react';
import './css/App.css';

import SpreadPicker from './components/SpreadPicker';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header><h1>Tarot Spreads</h1></header>
        <main>
          <p>Pick a spread that appeals the most.</p>
          <SpreadPicker />
        </main>
      </div>
    );
  }
}

export default App;
