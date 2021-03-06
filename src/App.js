import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import userService from "./utils/userService";
import scheduleService from "./utils/scheduleService";

import "./App.css";
import logo from "./logo.png";
import Ongoing from "./components/Ongoing/Ongoing";
import CreateData from "./components/CreateData/CreateData";
import MainPage from "./components/MainPage/MainPage";
import Activities from "./components/Activities/Activities";
import NavBar from "./components/NavBar/NavBar";
import LoginPage from "./components/LoginPage/LoginPage";
import SignupPage from "./components/SignupPage/SignupPage";
import LandingPage from "./components/LandingPage/LandingPage";
import URLPage from "./components/URLPage/URLPage";

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser(),
      selDate: "",
    };
  }

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
  };

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  };

  handleSignup = () => {
    this.setState({ user: userService.getUser() });
  };

  // handleAddDate = async newDateData => {
  //   const newDate = await scheduleService.createDate(newDateData);
  //   this.setState()
  // }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </header>
        <NavBar handleLogout={this.handleLogout} />
        <Route
          exact
          path="/login"
          render={({ history }) => (
            <LoginPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          )}
        />
        <Route
          exact
          path="/signup"
          render={({ history }) => (
            <SignupPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          )}
        />
        <Route exact path="/" render={(props) => <LandingPage />} />
        <Route exact path="/home" render={(props) => <MainPage />} />
        <Route exact path="/ongoing" render={(props) => <Ongoing />} />
        <Route
          exact
          path="/create"
          render={(history) => (
            <CreateData history={history} handleAddDate={this.handleAddDate} />
          )}
        />
        <Route
          exact
          path="/create/activity"
          render={(props) => <Activities />}
        />
        <Route exact path="/create/complete" render={(props) => <URLPage />} />

        <footer className="footer">Gatheria © </footer>
      </div>
    );
  }
}

export default App;
