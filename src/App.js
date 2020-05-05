import React, { Component } from "react";
import { Link, Route } from "react-router-dom";

import "./App.css";
import logo from "./logo.png";
// import MainPage from "./components/MainPage/MainPage";
// import Details from "./components/Details/Details";
// import CreateDate from "./components/CreateDate/CreateData";
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

  getdates = () => {
    this.setState({
      date: new Date(),
    });
  };
  render() {
    return (
      <div className="App">
        <Link to="/">
          <header className="App-header">
            <img src={logo} alt="Logo" />
          </header>
        </Link>
        <Route exact path="/" render={(props) => <MainPage />} />
        <Route exact path="/ongoing" render={(props) => <Ongoing />} />
        <Route exact path="/create" render={(props) => <CreateData />} />
        <footer className="component">Gatheria © </footer>
      </div>
    );
  }
}

export default App;

{
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
}
