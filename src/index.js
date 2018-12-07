import React from "react";
import ReactDOM from "react-dom";
import Board from "./Board";
import NavBar from "./Navbar";
import AddEvent from "./AddEvent";
import Login from "./Login";
import store from "./store";
import MessageBar from "./MessageBar";
import EventWordCloud from "./EventWordCloud";
import data from "./data.json";

import { Provider } from "react-redux";

import "./styles.css";

class App extends React.Component {
  state = {
    open: false,
    openLogin: false,
    list: data
  };
  componentDidMount() {
    this.initState();
  }
  initState = () => {
    this.setState({ list: data });
  };
  updateList = name => {
    let filterList = data.filter(item => {
      if (item.name === name) {
        return true;
      }
    });
    filterList === undefined || filterList.length === 0
      ? this.initState()
      : this.setState({ list: filterList });
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
            update={this.updateList.bind(this)}
          />
          <EventWordCloud />
          <Board list={this.state.list} />

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
