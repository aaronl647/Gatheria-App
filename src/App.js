import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import userService from './utils/userService';
import "./App.css";
import logo from "./logo.png";
import Ongoing from "./components/Ongoing/Ongoing";
import CreateData from "./components/CreateDate/CreateData";
import MainPage from "./components/MainPage/MainPage";
import Activities from "./components/Activities/Activities";
import NavBar from "./components/NavBar/NavBar";
import LoginPage from "./components/LoginPage/LoginPage"
import SignupPage from "./components/SignupPage/SignupPage";

class App extends Component {
  constructor() { 
    super()
    this.state={
      user: userService.getUser()
    }
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
          
        </header>
        <NavBar />
        <Route exact path="/login" render={(props) => <LoginPage />}/>
        <Route exact path="/signup" render={(props) => <SignupPage />}/>
        <Route exact path="/" render={(props) => <MainPage />} />
        <Route exact path="/ongoing" render={(props) => <Ongoing />} />
        <Route exact path="/create" render={(props) => <CreateData />} />
        <Route exact path="/create/activity" render={(props) => <Activities />} />

        <footer className="footer">Gatheria © </footer>
      </div>
    );
  }
}

export default App;

