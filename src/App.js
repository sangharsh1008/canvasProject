import React, { Component } from "react";
import Stage from "./lib/Stage";
import Circle from "./lib/Circle";
import { Temp } from "./Temp";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Temp />
        </header>
      </div>
    );
  }
}

export default App;
