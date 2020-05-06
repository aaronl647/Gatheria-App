import React, { Component } from "react";
import { Link, Route } from "react-router-dom";

import "./App.css";
import logo from "./logo.png";
// import MainPage from "./components/MainPage/MainPage";
// import Details from "./components/Details/Details";
import Ongoing from "./components/Ongoing/Ongoing";
import CreateData from "./components/CreateDate/CreateData";
import MainPage from "./components/MainPage/MainPage";

class App extends Component {
  state = {
    on: false,
  };

  toggle = () => {
    this.setState({
      on: !this.state.on,
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </header>
        <Route exact path="/" render={(props) => <MainPage />} />
        <Route exact path="/ongoing" render={(props) => <Ongoing />} />
        <Route exact path="/create" render={(props) => <CreateData />} />
        <footer className="component">Gatheria © </footer>
      </div>
    );
  }
}

export default App;

  /* <div className="navigation">
<Link path="/ongoing">
  <div className="nav">
    <h3>Ongoing Plans</h3>
  </div>
</Link>
<div>
  {this.state.on && (
    <CreateData />
  )}
  <Link path="/create" render={() =>(

  )}>
    <div className="nav">
      <h3>Create a New Plan</h3>
    </div>
  </Link>
</div>
</div> */




// componentDidMount() {
//   this.callBackendAPI()
//     .then((res) => this.setState({ data: res.express }))
//     .catch((err) => console.log(err));
// }

// callBackendAPI = async() => {
//   const response = await fetch('/express_backend');
//   const body= await response.json
// }