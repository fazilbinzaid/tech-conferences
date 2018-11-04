import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import Board from "./Board";
import NavBar from "./Navbar";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Board />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
