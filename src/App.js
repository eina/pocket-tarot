import React, { Component } from "react";
import "sanitize.css";
import "./css/App.css";

import SpreadPicker from "./components/SpreadPicker";
import ErrorBoundary from "./components/ErrorBoundary";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>🔮 Pocket Tarot 🔮</h1>
          <p>Pick a spread that appeals the most.</p>
        </header>
        <main>
          <ErrorBoundary>
            <SpreadPicker />
          </ErrorBoundary>
        </main>

        <footer>
          <p>
            View project on{" "}
            <a
              href="https://github.com/thelittleblacksmith/tarot-spread"
              alt="Project repository on GitHub"
              target="_blank"
            >
              GitHub
            </a>{" "}
            | Created by{" "}
            <a href="//eina.ca" alt="Eina's portfolio" target="_blank">
              Eina Onting
            </a>
            .{" "}
          </p>
        </footer>
      </div>
    );
  }
}

export default App;
