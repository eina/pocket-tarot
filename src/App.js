import React, { Component } from 'react';
import 'sanitize.css';
import './css/App.css';

import SpreadPicker from './components/SpreadPicker';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>🔮 Tarot Spreads 🔮</h1>
          <p>Pick a spread that appeals the most.</p>
        </header>
        <main>          
          <SpreadPicker />
                    
        </main>
        
        <footer>
          <p>Created by <a href="//eina.ca" alt="Eina's portfolio" target="_blank">Eina Onting</a>. </p>
        </footer>
      </div>
    );
  }
}

export default App;
