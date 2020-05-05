import React from "react";
import "./MainPage.css";
import { Link, } from "react-router-dom";
// import CreateData from "../CreateDate/CreateData";
// import Ongoing from "./Ongoing/Ongoing";

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

// render() {
//   const { render } = this.props;
//   return (
//     <div className="navigation">
//       <Switch>
//         <div className="navigation">
//         <Link path="/ongoing">
//           <div className="nav">
//             <h3>Ongoing Plans</h3>
//           </div>
//         </Link>
//         <div>
//           {this.state.on && this.props.children}
//           <Link path="/create"
//           onClick={this.toggle}>
//             <div className="nav">
//             <h3>Create a New Plan</h3>
//             </div>
//           </Link>
//         </div>
//         </div>
//       </Switch>
//     </div>
