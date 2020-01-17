import React, { Component } from "react";
import "./App.css";
import Game from "./Game";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Conway's Game of Life</h1>
        <Game />
      <p>
          "The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970.
The game is a zero-player game, meaning that its evolution is determined by its initial state, requiring no further input. One interacts with the Game of Life by creating an initial configuration and observing how it evolves." - Wikipedia
      </p>
      </div>
    );
  }
}

export default App;
