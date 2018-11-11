import React from "react";
import ReactDOM from "react-dom";
import Board from "./Board";
import NavBar from "./Navbar";
import AddEvent from "./AddEvent";
import Login from "./Login";
import store from "./store";

import { Provider } from "react-redux";

import "./styles.css";
import MessageBar from "./MessageBar";
class App extends React.Component {
  state = {
    open: false,
    openLogin: false
  };
  openForm = () => {
    this.setState({ open: true });
  };
  openLoginForm = () => {
    this.setState({ openLogin: true });
  };
  closeForm = () => {
    this.setState({ open: false, openLogin: false });
  };

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <NavBar
            open={this.openForm.bind(this)}
            openLogin={this.openLoginForm.bind(this)}
          />
          <Board />
          <AddEvent open={this.state.open} close={this.closeForm.bind(this)} />
          <Login
            openLogin={this.state.openLogin}
            close={this.closeForm.bind(this)}
          />
          <MessageBar />
        </div>
      </Provider>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
