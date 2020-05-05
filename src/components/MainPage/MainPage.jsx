import React from "react";
import "./MainPage.css";
import { Link, Route, Switch } from "react-router-dom";
import CreateData from "../CreateDate/CreateData";
// import Ongoing from "./Ongoing/Ongoing";

class MainPage extends React.Component {
  render() {
    return (
      <div className="navigation">
        <Switch>
          <div className="navigation">
          <Link path="/ongoing">
            <div className="nav">
              <h3>Ongoing Plans</h3>
            </div>
          </Link>
          <div>
            {/* {this.state.on && (
              <CreateData />
            )} */}
            <Link path="/create">
              <div className="nav">
                <h3>Create a New Plan</h3>
              </div>
            </Link>
          </div>
          </div>
        </Switch>
      </div>
    );
  }
}

export default MainPage;



          // {/* <Link  path ="/ongoing" component={Ongoing}> */}
          // <Link exact path="/ongoing">
          //   <div className="nav">
          //     <h3>View Ongoing Plans</h3>
          //   </div>
          // </Link>
          // <Route path="/create" render={CreateData}>
          //   <div className="nav">
          //     <h3>Create a New Plan</h3>
          //   </div>
          // </Route>