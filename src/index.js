import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import Board from "./Board";
import NavBar from "./Navbar";
import AddEvent from "./AddEvent";
import data from "./data.json";
class App extends React.Component {

  state = {
    open: false,
    list: []
    };

  componentDidMount(){
  this.initState();
  };
  initState=()=>{
     this.setState({ list: data });
  };
  updateList=(name)=>{
    let filterList=data.filter((item)=>{
      if(item.name===name)return true;
    });
   
    (filterList===undefined || filterList.length===0)? this.initState() : this.setState({ list: filterList });
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
        <NavBar open={this.openForm.bind(this)} update={this.updateList} />
        <Board list={this.state.list}/>

        <AddEvent open={this.state.open} close={this.closeForm.bind(this)} />
      </div>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
