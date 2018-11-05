import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import Board from "./Board";
import NavBar from "./Navbar";
import AddEvent from "./AddEvent";
class App extends React.Component {
  state = {
    open: false,
    list: {}
  };
  openForm = () => {
    this.setState({ open: true });
  };
  closeForm = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div className="App">
        <NavBar open={this.openForm.bind(this)} />
        <Board />
        <AddEvent open={this.state.open} close={this.closeForm.bind(this)} />
      </div>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
