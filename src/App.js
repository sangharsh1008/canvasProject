import React, { Component } from "react";
import { Game } from "./Game";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Game />
        </header>
      </div>
    );
  }
}

export default App;
