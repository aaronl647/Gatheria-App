import React from "react";
import "./MainPage.css";
import { Link, } from "react-router-dom";

const MainPage = (props) => {
    return (
      <div className="navigation">
        <Link className='' to='/ongoing'>
          <div className="nav">
            <h3>View Ongoing Plans</h3>
          </div>
          </Link>
        <Link className='' to='/create'>
          <div className="nav">
            <h3>Create a New Plan</h3>
          </div>
          </Link>

        </div>
    );
  }

export default MainPage;

