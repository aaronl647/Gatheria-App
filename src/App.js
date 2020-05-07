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

  handleAddDate = async (newDateData) => {
    console.log('hello')
    const newDate = await scheduleService.createDate(newDateData);
    this.setState(
      (state) => ({
        selDate: {newDate},
      }
      {console.log(selDate)}))};

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </header>
        <NavBar />
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
        <Route exact path="/" render={(props) => <MainPage />} />
        <Route exact path="/ongoing" render={(props) => <Ongoing />} />
        <Route
          exact
          path="/create"
          render={(history) => (
            <CreateData
              history={history}
              handleAddDate={this.handleAddDate}
            />
          )}
        />
        <Route
          exact
          path="/create/activity"
          render={(props) => <Activities />}
        />

        <footer className="footer">Gatheria © </footer>
      </div>
    );
  }
}

export default App;
